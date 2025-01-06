import config from './config.json'
import { parseData } from '$lib/parse.js'
import { json } from '@sveltejs/kit'

export async function POST ({ request }) {
  const file = (await request.formData()).get('cfg')

  if (!file) {
    console.warn("No file was detected: User didn't upload a file ")
    return new Response('Please select a file to start', { status: 400, message: 'No file was detected' })
  }

  const INSTRUCTION = '680F0000'
  const { CheatOptions } = config

  if (!(file instanceof File && file.type === 'text/plain' && file.size < 5000)) {
    return new Response('Please make sure you are using the correct file', { status: 422 })
  }

  const cheat = parseData(await file.text())

  // Initialize an array to collect content parts
  const contentParts = []
  for (const item of CheatOptions) {
    if (item.options) {
    // Filter out options that do not have corresponding values in the cheat object
      const setting = item.options.filter(options => {
        const [name] = Object.entries(options)[0]
        return cheat[name] // Only keep the option if it exists in the cheat data
      })

      // Only add the section if there are valid options
      if (setting.length > 0) {
        // Check the default values
        const isDefault = setting.every(option => {
          const [name, value] = Object.entries(option)[0]
          return cheat[name] && cheat[name].value === `680F0000 ${value}`
        })

        // Add the cheat name
        const sectionName = isDefault ? `Default ${item.name}` : `${item.name}`
        contentParts.push(`[${sectionName}]`)

        // Process each valid option
        setting.forEach(options => {
          const [name, value] = Object.entries(options)[0]
          if (cheat[name] && cheat[name].offset) {
            contentParts.push(cheat[name].offset)
            contentParts.push(`${INSTRUCTION} ${value}`)
          } else {
            console.warn(`Missing offset or data for option: ${name}`)
          }
        })

        contentParts.push('') // Add a newline after each section
      } else {
        console.warn('No offsets found for:', item.name)
      }
    } else {
      console.warn('Skipped', item.name)
    }
  }

  // Join all content parts with newlines
  const content = contentParts.join('\n')

  return json(
    {
      name: file.name,
      content,
      size: Buffer.byteLength(content, 'utf8') / 1000
    }
  )
}
