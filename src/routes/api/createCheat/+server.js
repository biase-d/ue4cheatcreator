import yaml from 'js-yaml'
import { parseData } from './parse.js'
import { read } from '$app/server'
import { json } from '@sveltejs/kit'

export async function POST ({ request }) {
  const cfgFormData = await request.formData()
  const cfg = cfgFormData.get('cfg')

  const data = yaml.load(await read('../src/routes/api/createCheat/config.yaml').text())
  const { CheatOptions } = data

  let content = ''
  let dump

  if (cfg instanceof File && cfg.type === 'text/plain') {
    dump = {
      name: cfg.name,
      type: cfg.type,
      size: cfg.size,
      content: await cfg.text()
    }
  } else {
    return new Response('Please make sure you are using the correct file', { status: 500 })
  }

  const cheat = parseData(dump.content)

  for (const item of CheatOptions) {
    content += `[${item.name}]\n`
    item.options.forEach(options => {
      const [name, value] = Object.entries(options)[0]
      if (cheat[name]) {
        content += `${cheat[name].offset}\n`
        content += '680F0000 '
        content += `${value}\n`
      } else {
        console.warn('Skipped: ', name)
      }
    })
    content += '\n'
  }

  return json(
    {
      name: dump.name,
      content,
      size: Buffer.byteLength(content, 'utf8') / 1000
    }
  )
}
