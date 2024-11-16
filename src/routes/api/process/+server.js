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

export async function POST ({ request }) {
  const dump = sampleData.trim().split(/\n+/)
  const { cheatOptions } = config
  const instruction = '680F0000'

  const dumpContent = {}

  dump.forEach((data) => {
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
      dumpContent[cvar] = data
    } catch (err) {
      dumpContent.engineVersion = data
      console.log('Could not parse: ', err)
    }
  })

  for (const i of cheatOptions) {
    if (i.options) {
      const option = i.options.filter(option => {
        const [name] = Object.entries(option)[0]
        return dumpContent[name]
      })

      if (option.length > 0) {
        const isDefault = option.some(option => {
          const [name, value] = Object.entries(option)[0]
          switch (dumpContent[name].type) {
            case 'int':
              return dumpContent[name] && dumpContent[name].value === value.slice(value.length - dumpContent[name].value.length, value.length)
            case 'float':
              return dumpContent[name] && dumpContent[name].hexValue === `0x${value.split(' ')[1]}`
          }
        })
      }
    }
  }
}
