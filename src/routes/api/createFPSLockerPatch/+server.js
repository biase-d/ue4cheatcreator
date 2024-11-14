import { json } from '@sveltejs/kit'
import { parseData } from '$lib/parse.js'

const config = [
  { name: 't.MaxFPS' },
  { name: 'r.DynamicRes.FrameTimeBudget' },
  { name: 'r.VSync' },
  { name: 'r.DynamicRes.OperationMode' }
]

function checkForTruncDecVal (hex) {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)

  view.setUint32(0, parseInt(hex, 16))

  let float = view.getFloat32(0)

  float = float.toString().split('.')[1] || ''
  float = float.indexOf('0') !== -1 ? float.slice(0, float.indexOf('0')) : float
  float = float.length

  return float
}

export async function POST ({ request }) {
  const file = (await request.formData()).get('cfg')
  const cvars = {}

  if (!file) {
    console.warn("No file: User didn't upload a file")
    return new Response('Please select a supported file to start', {
      status: 400,
      message: 'No file or file unsupported'
    })
  }

  const dumpData = parseData(await file.text())

  for (const item of config) {
    cvars[`${item.name}`] = {
      offset: dumpData[item.name].offset.split(' ')[1],
      value: `${dumpData[item.name].value.split(' ')[1]}}`
    }
  }

  const truncDecVal = checkForTruncDecVal(cvars['r.DynamicRes.FrameTimeBudget'].value)

  const content = ['# Add title and game version here']
  content.push(`# BID: ${file.name.split('.')[0]}\n`)
  content.push('unsafeCheck: true\n')
  content.push('ALL_FPS:')

  if (cvars['r.VSync']) {
    content.push('  # r.VSync')
    content.push('  -')
    content.push('    type: write')
    content.push('    address: [MAIN, 0x' + cvars['r.VSync'].offset + ', 0]')
    content.push('    value_type: int32')
    content.push('    value: [0, 0]')
  }

  if (cvars['r.DynamicRes.FrameTimeBudget']) {
    content.push(`  # r.DynamicRes.FrameTimeBudget (1000/FPS) cutted to ${truncDecVal} decimals`)
    content.push('  -')
    content.push('    type: evaluate_write')
    content.push('    address: [MAIN, 0x' + cvars['r.DynamicRes.FrameTimeBudget'].offset + ', 0]')
    content.push('    value_type: float')
    content.push(`    value: ["TruncDec(FRAMETIME_TARGET, ${truncDecVal})", "TruncDec(FRAMETIME_TARGET, ${truncDecVal})"]`)
  }

  if (cvars['t.MaxFPS']) {
    content.push('  # t.MaxFPS')
    content.push('  -')
    content.push('    type: evaluate_write')
    content.push('    address: [MAIN, 0x' + cvars['t.MaxFPS'].offset + ', 0]')
    content.push('    value_type: float')
    content.push('    value: [FPS_LOCK_TARGET, FPS_LOCK_TARGET]')
  }

  content.push('  -')
  content.push('    type: block')
  content.push('    what: timing')

  console.log(content.join('\n'))

  return json(
    {
      name: `${file.name.split('.')[0]}.yaml`,
      content: content.join('\n'),
      size: Buffer.byteLength(content.join('\n'), 'utf8') / 1000
    }
  )
}
