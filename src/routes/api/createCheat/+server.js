import config from './config.json'
import { parseData } from '$lib/parse.js'
import { json } from '@sveltejs/kit'

export async function POST ({ request }) {
  const INSTRUCTION = '680F0000'
  const cfg = (await request.formData()).get('cfg')
  const { CheatOptions } = config

  if (!(cfg instanceof File && cfg.type === 'text/plain')) {
    return new Response('Please make sure you are using the correct file', { status: 500 })
  }

  const cheat = parseData(await cfg.text())

  // Initialize an array to collect content parts
  const contentParts = []

  for (const item of CheatOptions) {
    // Add the cheat name
    contentParts.push(`[${item.name}]`)

    // Process each option
    item.options.forEach(options => {
      const [name, value] = Object.entries(options)[0]

      // @ts-ignore
      if (cheat[name]) {
        // @ts-ignore
        contentParts.push(`${cheat[name].offset}`)
        contentParts.push(INSTRUCTION + value)
      } else {
        console.warn('Skipped: ', name)
      }
    })

    // Add a newline after each section
    contentParts.push('')
  }

  // Join all content parts with newlines
  const content = contentParts.join('\n')

  return json(
    {
      name: cfg.name,
      content,
      size: Buffer.byteLength(content, 'utf8') / 1000
    }
  )
}
