import { json } from '@sveltejs/kit'
import config from '../createCheat/config.json'

const sampleData = `SDK MW+EpicGames+UnrealEngine-5_3_2

r.TemporalAA.HistoryScreenPercentage, main_offset: 0xA063650 + 0x0, type: float 100.00000 / 0x42C80000
r.DynamicRes.FrameTimeBudget, main_offset: 0xA0CA138 + 0x0, type: float 33.33000 / 0x420551EC
r.TemporalAA.R11G11B10History, main_offset: 0xA063680 + 0x0, type: int 1 / 0x1
r.VSync, main_offset: 0x90FC980 + 0x0, type: int 1 / 0x1
t.MaxFPS, main_offset: 0xA104AE0 + 0x0, type: float 0.00000 / 0x0
foliage.LODDistanceScale, main_offset: 0xA0CE740 + 0x0, type: float 0.40000 / 0x3ECCCCCD
r.Streaming.FullyLoadUsedTextures, main_offset: 0xA102B18 + 0x0, type: int 0 / 0x0
r.TemporalAASamples, main_offset: 0xA06F1F0 + 0x0, type: int 8 / 0x8
r.TemporalAAFilterSize, main_offset: 0xA0635D8 + 0x0, type: float 1.00000 / 0x3F800000
r.AmbientOcclusionRadiusScale, main_offset: 0x90FC710 + 0x0, type: float 1.00000 / 0x3F800000
r.DisableDistortion, main_offset: 0x9FFBF38 + 0x0, type: int 0 / 0x0
r.SSGI.Quality, main_offset: 0xA075788 + 0x0, type: int 1 / 0x1
r.TemporalAACatmullRom, main_offset: 0xA0635F0 + 0x0, type: int 0 / 0x0
r.SkyLightingQuality, main_offset: 0x90FCDB8 + 0x0, type: int 1 / 0x1
r.MaxQualityMode, main_offset: 0xA1031B8 + 0x0, type: int 0 / 0x0
r.TemporalAAPauseCorrect, main_offset: 0xA063608 + 0x0, type: int 1 / 0x1
r.LensFlareQuality, main_offset: 0xA05CD78 + 0x0, type: int 0 / 0x0
r.ShadowQuality, main_offset: 0x90FC740 + 0x0, type: int 1 / 0x1
r.MotionBlurQuality, main_offset: 0x90FC758 + 0x0, type: int 0 / 0x0
r.TemporalAACurrentFrameWeight, main_offset: 0xA063620 + 0x0, type: float 0.04000 / 0x3D23D70A
r.MaxAnisotropy, main_offset: 0x90FC9B0 + 0x0, type: int 1 / 0x1
r.ViewDistanceScale, main_offset: 0x90FCAA0 + 0x0, type: float 1.00000 / 0x3F800000
r.DynamicRes.OperationMode, main_offset: 0xA104A98 + 0x0, type: int 2 / 0x2
r.Shadow.DistanceScale, main_offset: 0x90FCBA8 + 0x0, type: float 0.40000 / 0x3ECCCCCD
r.SecondaryScreenPercentage.GameViewport, main_offset: 0xA0CFEA8 + 0x0, type: float 100.00000 / 0x42C80000
r.MSAACount, main_offset: 0xA06F1A8 + 0x0, type: int 4 / 0x4
r.SSS.Quality, main_offset: 0xA05D048 + 0x0, type: int 0 / 0x0
r.RefractionQuality, main_offset: 0xA06D5D8 + 0x0, type: int 0 / 0x0
r.MSAA.CompositingSampleCount, main_offset: 0x90FC8D8 + 0x0, type: int 4 / 0x4
r.EyeAdaptationQuality, main_offset: 0x90FCB90 + 0x0, type: int 2 / 0x2
r.LightFunctionQuality, main_offset: 0x90FCB78 + 0x0, type: int 1 / 0x1
r.BloomQuality, main_offset: 0x90FC6E0 + 0x0, type: int 4 / 0x4
rhi.SyncInterval, main_offset: 0x9FC9628 + 0x0, type: int 2 / 0x2
r.Upscale.Quality, main_offset: 0xA063530 + 0x0, type: int 2 / 0x2
r.GTSyncType, main_offset: 0x9FD9A20 + 0x0, type: int 0 / 0x0
r.DepthOfFieldQuality, main_offset: 0x90FC7D0 + 0x0, type: int 1 / 0x1
r.SSR.Quality, main_offset: 0xA0756F8 + 0x0, type: int 2 / 0x2
r.SSS.Scale, main_offset: 0xA05D018 + 0x0, type: float 0.00000 / 0x0
r.SceneColorFringeQuality, main_offset: 0x90FC6F8 + 0x0, type: int 0 / 0x0
r.ScreenPercentage, main_offset: 0xA0D7F40 + 0x0, type: float 80.00000 / 0x42A00000
r.DynamicRes.MinScreenPercentage, main_offset: 0xA0CA0F0 + 0x0, type: float 70.00000 / 0x428C0000
r.DynamicRes.MaxScreenPercentage, main_offset: 0xA0CA108 + 0x0, type: float 90.00000 / 0x42B40000
r.Tonemapper.Sharpen, main_offset: 0xA05D180 + 0x0, type: float 0.00000 / 0x0
r.Tonemapper.Quality, main_offset: 0xA0FC498 + 0x0, type: int 2 / 0x2
r.TemporalAA.Upsampling, main_offset: 0xA0FC540 + 0x0, type: int 0 / 0x0
r.Mobile.ShadingPath, main_offset: 0x90FC518 + 0x0, type: int 1 / 0x1
r.TemporalAA.UseMobileConfig, main_offset: 0xA063698 + 0x0, type: int 0 / 0x0
r.TemporalAA.Quality, main_offset: 0xA063638 + 0x0, type: int 0 / 0x0
r.VelocityOutputPass, main_offset: 0xA082F48 + 0x0, type: int 0 / 0x0
r.Velocity.EnableVertexDeformation, main_offset: 0xA0F7530 + 0x0, type: int 2 / 0x2
r.AntiAliasingMethod, main_offset: 0xA0FC3F0 + 0x0, type: int 4 / 0x4
`
function parseLogFile (logFile) {
  const processedLogFile = {}

  console.log('Generating via Log File')
  processedLogFile.uploadedFile = 'log'

  logFile = logFile.trim().split(/\n+/)
  logFile.forEach((data) => {
    try {
      data = data.split(', ')
      const cvar = data[0]
      data = {
        main_offset: data[1].split(': ')[1].split(' ')[0],
        offset: [data[1].split(': ')[1].split(' ')[1], data[1].split(': ')[1].split(' ')[2]],
        type: data[2].split(': ')[1].split(' ')[0],
        value: data[2].split(': ')[1].split(' ')[1],
        hexValue: data[2].split(': ')[1].split(' ')[3]
      }
      processedLogFile[cvar] = data
    } catch (err) {
      processedLogFile.engineVersion = data
    }
  })

  return processedLogFile
}

/*
function parseTxtFile (txtFile) {
  const processedTxtFile = {}
  const sections = txtFile.trim().split(/\n\n+/) // Split into sections by double newlines

  sections.forEach(section => {
    const lines = section.split('\n') // Split section into lines
    const name = lines[0].match(/\[(.*)\]/)[1] // Extract name from square brackets
    const offset = lines[1]
    const value = lines[2]

    // Store the parsed data in an object
    processedTxtFile[name] = {
      offset,
      value
    }
  })

  return data
}
  */

function generateCheats (parsedFile, config) {
  const instruction = '680F0000'
  let result = []
  for (const i of config.cheatOptions) {
    if (i.options) {
      const options = i.options.filter(option => {
        const [name] = Object.entries(option)[0]
        return parsedFile[name]
      })

      if (options.length > 0) {
        const isDefault = options.some(option => {
          const [name, value] = Object.entries(option)[0]
          if (parsedFile.uploadedFile === 'log') {
            switch (parsedFile[name].type) {
              case 'int':
                return parsedFile[name] && parsedFile[name].value === value.slice(value.length - parsedFile[name].value.length, value.length)
              case 'float':
                return parsedFile[name] && parsedFile[name].hexValue === `0x${value.split(' ')[1]}`
            }
          }
          return console.log('Something went wrong') // I just added this to hide errors
        })
        const cheatName = isDefault ? '* ' + i.name : i.name
        result.push(`[${cheatName}]`)

        options.forEach(option => {
          const [name, value] = Object.entries(option)[0]
          if (parsedFile[name] && parsedFile[name].main_offset) {
            result.push(`580F0000 ${parsedFile[name].main_offset.split('x')[1]}`) // todo: create variable with proper name for 580F0000
            result.push(`${instruction} ${value}`)
          }
        })
        result.push('') // add newline after each section
      } else {
        console.warn('Offset not found in dump: ', i.name)
      }
    } else {
      console.log('Missing options in config: ', i.name)
    }
  }

  result = result.join('\n')
  return result
}

/*
function generateFPSLockerPatch (parsedFile) {
  function checkTruncDecVal (hex) {
    const buffer = new ArrayBuffer(4)
    const view = new DataView(buffer)

    view.setUint32(0, parseInt(hex, 16))

    let float = view.getFloat32(0)

    float = float.toString().split('.')[1] || ''
    float = float.indexOf('0') !== -1 ? float.slice(0, float.indexOf('0')) : float
    float = float.length

    return float
  }
}
*/

export async function POST ({ request }) {
  const file = (await request.formData()).get('dump')

  if (!file) {
    console.warn('No file was uploaded')
    return new Response('Please select a supported file to start', { status: 400, message: 'No file was uploaded' })
  }

  if (!(file instanceof File && file.size < 5000)) {
    return new Response('Please make sure you are using the correct file', { status: 422 })
  }

  const dump = parseLogFile(sampleData)
  const cheats = generateCheats(dump, config)

  return json({
    name: file.name,
    cheats,
    size: Buffer.byteLength(cheats, 'utf8') / 1000
  })
}
