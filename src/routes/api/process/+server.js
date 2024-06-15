import { json } from '@sveltejs/kit'
import {cheatNames} from '$lib/cvars'

export async function POST({ request }){

  const data = await request.formData()
  const cfg = data.get('cfg')

  const cheatOffsets = await cfg.text()

  if (cfg.size > 20000){
    return new Response('File is too big to be a cheat', {status: 500})
  }

  if (!cfg){
    return new Response('No file was uploaded', {status: 500})
  }

  const sections = await cheatOffsets.split(/\[\s*([^\]]+)\s*\]\s*/).filter(Boolean);
  let offsets = [];
  
  for (let i = 0; i < sections.length; i += 2) {
    try{
      offsets.push({name: `${sections[i].trim().split('\n')}`, value: sections[i + 1].trim().split('\n').map((/** @type {string} */ line) => line.trim())})
    } catch (err) {
      console.log('Something went wrong', err)
    }
  }

  let output = "";

  for(const cheat of offsets){
    try{
      let offset = cheat.value[0] 
      // @ts-ignore
      for (const item of cheatNames.find(({ cvar }) => cvar === cheat.name)?.options){
          // @ts-ignore
          let cheatName = cheatNames.find(({ cvar }) => cvar === cheat.name)?.name
          // @ts-ignore
          output += `[${cheatName} - ${item.name}]\n${offset}\n680F0000 ${item.value}\n\n`;
      }
    } catch(err){
      console.log('Skipped: ', err)
    }
  }

  return json(
    {
      name: await cfg.name,
      size: await cfg.size,
      cheats: output
    }
  )
}
