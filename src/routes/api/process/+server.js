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
    const offset = lines; // Extract the offset
    return { name, offset };
  })

  let cheats = ""

  let FPS = ['rhi.SyncInterval', 'r.VSync', 'Customtimestep', 't.MaxFPS', 'r.DynamicRes.FrameTimeBudget']
  let FPSOptions = [
    {
      name: '[30 FPS]',
      fps: '680F0000 41F00000 41F00000',
      value: '680F0000 420551EC 420551EC' // 33.33ms
    },
    {
      name: '[45 FPS]',
      fps: '680F0000 42340000 42340000',
      value: '680F0000 41B1C28F 41B1C28F' // 22.22ms
    },
    {
      name: '[60 FPS]',
      fps: '680F0000 00000000 00000000',
      value: '680F0000 41855555 41855555' // 16.66ms
    }
  ]

  let TAAU = ['r.DefaultFeature.AntiAliasing', 'r.TemporalAA.Upsampling','r.PostProcessAAQuality', 'r.TemporalAA.Algorithm']
  let TAAUOptions = [
    {
      name: '[Enable TAAU]',
      AAFeature: '00000002 00000002',
      AAQuality: '00000003 00000003', // Setting to 3 to prevent crashes in some games
      AAAlgorithm: '00000001 00000001',
      upsampling: '00000001 00000001',
    },
    {
      name: '[Disable TAAU]',
      AAFeature: '00000001 00000001',
      upsampling: '00000000 00000000',
      AAQuality: '00000001 00000001',
      AAAlgorithm: '00000000 00000000'
    }
  ]

  let SSGI = ['r.SSGI.Quality', 'r.SSGI.Enable']
  let SSGIOptions = [
    {
      name: '[Enable SSGI]',
      SSGIEnable: '00000001 00000001',
      SSGIQuality: '00000001 00000001'
    },
    {
      name: '[Disable SSGI]',
      SSGIEnable: '00000000 00000000',
      SSGIQuality: '00000000 00000000'
    }
  ]

  const fps = sections.filter(entry => FPS.some(keyword => entry.name.includes(keyword)))
  for(const frameRate of FPSOptions){
    cheats += `${frameRate.name}\n`
    for(const item of fps){
      if (frameRate.name === "[30 FPS]"){
        if (item.name == '[rhi.SyncInterval]'){
          cheats += `${item.offset[0]}\n680F0000 00000002 00000002\n`
        }
        if (item.name == '[r.VSync]'){
          cheats += `${item.offset[0]}\n680F0000 00000001 00000001\n`
        }
        if (item.name == '[r.DynamicRes.FrameTimeBudget]'){
          cheats += `${item.offset[0]}\n${frameRate.value}\n`
        }
        if (item.name == '[t.MaxFPS]'){
          cheats += `${item.offset[0]}\n${frameRate.fps}\n`
        }
      } else if (frameRate.name === '[45 FPS]'){
        if (item.name == '[rhi.SyncInterval]'){
          cheats += `${item.offset[0]}\n680F0000 00000001 00000001\n`
        }
        if (item.name == '[r.VSync]'){
          cheats += `${item.offset[0]}\n680F0000 00000000 00000000\n`
        }
        if (item.name == '[r.DynamicRes.FrameTimeBudget]') {
          cheats += `${item.offset[0]}\n${frameRate.value}\n`
        }
        if (item.name == '[t.MaxFPS]'){
          cheats += `${item.offset[0]}\n${frameRate.fps}\n`
        }
      } else if (frameRate.name === "[60 FPS]"){
        if (item.name == '[rhi.SyncInterval]'){
          cheats += `${item.offset[0]}\n680F0000 00000001 00000001\n`
        }

        if (item.name == '[r.VSync]'){
          cheats += `${item.offset[0]}\n680F0000 00000000 00000000\n`
        }
        if (item.name == '[r.DynamicRes.FrameTimeBudget]') {
          cheats += `${item.offset[0]}\n${frameRate.value}\n`
        }
        if (item.name == '[t.MaxFPS]'){
          cheats += `${item.offset[0]}\n${frameRate.fps}\n`
        }
      }
    }
    cheats += `\n`
  }

  const taau = sections.filter(entry => TAAU.some(keyword => entry.name.includes(keyword)))
  if (taau){
    for(const temporalUpsampling of TAAUOptions){
      cheats += `${temporalUpsampling.name}\n`
      for(const item of taau){
        if (temporalUpsampling.name == '[Enable TAAU]') {
          // Enable TAAU
          if (item.name == '[r.DefaultFeature.AntiAliasing]'){
            cheats += `${item.offset[0]}\n680F0000 ${temporalUpsampling.AAFeature}\n`
          }
  
          if (item.name == '[r.TemporalAA.Upsampling]'){
            cheats += `${item.offset[0]}\n680F0000 ${temporalUpsampling.upsampling}\n`
          }
  
          if (item.name == '[r.PostProcessAAQuality]'){
            cheats += `${item.offset[0]}\n680F0000 ${temporalUpsampling.AAQuality}\n`
          }
  
          if (item.name == '[r.TemporalAA.Algorithm]'){
            cheats += `${item.offset[0]}\n680F0000 ${temporalUpsampling.AAAlgorithm}\n`
          }
        } else if (temporalUpsampling.name == '[Disable TAAU]'){
          //Disabled TAAU
          if (item.name == '[r.DefaultFeature.AntiAliasing]'){
            cheats += `${item.offset[0]}\n680F0000 ${temporalUpsampling.AAFeature}\n`
          }
  
          if (item.name == '[r.TemporalAA.Upsampling]'){
            cheats += `${item.offset[0]}\n680F0000 ${temporalUpsampling.upsampling}\n`
          }
  
          if (item.name == '[r.PostProcessAAQuality]'){
            cheats += `${item.offset[0]}\n680F0000 ${temporalUpsampling.AAQuality}\n`
          }
  
          if (item.name == '[r.TemporalAA.Algorithm]'){
            cheats += `${item.offset[0]}\n680F0000 ${temporalUpsampling.AAAlgorithm}\n`
          }
        }
      }
      cheats += '\n'
    }
  }

  const ssgi = sections.filter(entry => SSGI.some(keyword => entry.name.includes(keyword)))
  for (const options of SSGIOptions){
    cheats += `${options.name}\n`
    for (const item of ssgi){
      if (options.name == '[Enable SSGI]'){
        if (item.name == '[r.SSGI.Quality]'){
          cheats += `${item.offset[0]}\n680F0000 ${options.SSGIQuality}\n`
        }
        if (item.name == '[r.SSGI.Enable'){
          cheats += `${item.offset[0]}\n680F0000 ${options.SSGIEnable}\n`
        }
      } else if (options.name == '[Disable SSGI]'){
        if (item.name == '[r.SSGI.Quality]'){
          cheats += `${item.offset[0]}\n680F0000 ${options.SSGIQuality}\n`
        }
        if (item.name == '[r.SSGI.Enable'){
          cheats += `${item.offset[0]}\n680F0000 ${options.SSGIEnable}\n`
        }
      }
    }
    cheats += '\n'
  }

  for(const cheat of sections){
    const cheatName = cheat.name.split(/\[\s*([^\]]+)\s*\]\s*/).filter(Boolean)[0]
    
    try {
      let test = cheatNames.find(({ cvar }) => cvar === cheatName)
      for (const option of test?.options){
        cheats += `[${test?.name} ${option.name}]\n`
        cheats += `${cheat.offset[0]}\n`
        cheats += `680F0000 ${option.value}\n`
        cheats += '\n'
      }
      
      if (test == undefined){
        throw Error
      }
    } catch(err) {
      console.log('Skipped: ', cheatName)
    }
  }

  console.log(cheats)

  return json(
    {
      name: await dumpContent.name,
      cheats: cheats
    }
  )
}
