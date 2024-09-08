// @ts-ignore
import fs from 'fs'
import yaml from 'js-yaml'
import { json } from '@sveltejs/kit'

export async function POST ({ request }) {
  const cfgFormData = await request.formData()
  const cfg = cfgFormData.get('cfg')

  let dump
  let content = ''

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

  // @ts-ignore
  const data = yaml.load(fs.readFileSync('src/consoleVariables.yaml', 'utf8'))

  const { CheatOptions } = data

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

  function parseData (data) {
    const result = {}
    const sections = data.trim().split(/\n\n+/) // Split into sections by double newlines

    sections.forEach(section => {
      const lines = section.split('\n') // Split section into lines
      const name = lines[0].match(/\[(.*)\]/)[1] // Extract name from square brackets
      const offset = lines[1]
      const value = lines[2]

      // Store the parsed data in an object
      result[name] = {
        offset,
        value
      }
    })

    return result
  }

  return json(
    {
      name: dump.name,
      content,
      size: Buffer.byteLength(content, 'utf8') / 1000
    }
  )
}
