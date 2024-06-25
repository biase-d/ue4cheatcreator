import { json } from '@sveltejs/kit'
import {cheatNames} from '$lib/cvars'

export async function POST({ request }){

  const data = await request.formData()
  const dumpContent = data.get('cfg') 

  const cheatOffsets = await dumpContent.text()

  if (dumpContent.size > 20000){
    return new Response('File is too big to be a cheat', {status: 500})
  }

  if (!dumpContent){
    return new Response('No file was uploaded', {status: 500})
  }

  const sections = cheatOffsets.split(/\n\n/)
  .filter((/** @type {string} */ section) => section.trim() !== "") // Remove empty sections
  .map((/** @type {string} */ section) => {
    const lines = section.trim().split('\n');
    const name = lines.shift(); // Extract the name
    const offset = lines.join('\n').trim(); // Extract the offset
    return { name, offset };
  })

  let cheats = ""

  console.log(sections)
  
  for(const cheat of sections){
      let cheatName = cheatNames.find(({ cvar }) => cvar === cheat.name)?.name

      console.log(cheatName)
    console.log()
  }
}
