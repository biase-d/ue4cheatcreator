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
    if (item.options) {
    // Filter out options that do not have corresponding values in the cheat object
      const setting = item.options.filter(options => {
        const [name] = Object.entries(options)[0]
        // @ts-ignore
        return cheat[name] // Only keep the option if it exists in the cheat data
      })

      // Only add the section if there are valid options
      if (setting.length > 0) {
      // Add the cheat name
        contentParts.push(`[${item.name}]`)

        // Process each valid option
        setting.forEach(options => {
          const [name, value] = Object.entries(options)[0]
          // @ts-ignore
          contentParts.push(`${cheat[name].offset}`)
          contentParts.push(INSTRUCTION + ' ' + value)
        })

        // Add a newline after each section
        contentParts.push('')
      } else {
        console.warn('No offsets for:', item.name)
      }
    } else {
      console.warn('Not Implemented: Skipped', item.name)
    }
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
