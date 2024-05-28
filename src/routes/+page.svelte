<script>
  import { text } from "@sveltejs/kit";


const config = `
  [r.DynamicRes.MinScreenPercentage]
  580F0000 0806CF58
  680F0000 42700000 42700000

  [r.DynamicRes.MaxScreenPercentage]
  580F0000 0806CF70
  680F0000 42C80000 42C80000

  [r.TonemapperFilm]
  580F0000 07FE7B18
  680F0000 00000001 00000001

  [r.TemporalAA.HistoryScreenPercentage]
  580F0000 07FF9B60
  680F0000 42C80000 42C80000

  [r.DynamicRes.FrameTimeBudget]
  580F0000 0806CF88
  680F0000 420551EC 420551EC

  [r.TemporalAA.R11G11B10History]
  580F0000 07FF9BA8
  680F0000 00000000 00000000

  [r.Mobile.ShadingPath]
  580F0000 0789EDB8
  680F0000 00000000 00000000

  [r.SSGI.Enable]
  580F0000 08005DE8
  680F0000 00000000 00000000

  [r.VSync]
  580F0000 0789F1F0
  680F0000 00000001 00000001

  [t.MaxFPS]
  580F0000 08092EE0
  680F0000 00000000 00000000

  [r.SceneColorFringeQuality]
  580F0000 0789EF50
  680F0000 00000000 00000000

  [foliage.LODDistanceScale]
  580F0000 080765A0
  680F0000 3F800000 3F800000

  [r.Streaming.FullyLoadUsedTextures]
  580F0000 08091100
  680F0000 00000000 00000000

  [r.TemporalAASamples]
  580F0000 08005298
  680F0000 00000008 00000008

  [r.TemporalAAFilterSize]
  580F0000 07FF9AE8
  680F0000 3F800000 3F800000

  [r.AmbientOcclusionRadiusScale]
  580F0000 0789EF68
  680F0000 3F4CCCCD 3F4CCCCD

  [r.DisableDistortion]
  580F0000 07F94470
  680F0000 00000001 00000001

  [r.SSGI.Quality]
  580F0000 08005E30
  680F0000 00000001 00000001

  [r.TemporalAA.Algorithm]
  580F0000 07FF9AD0
  680F0000 00000000 00000000

  [r.TemporalAACatmullRom]
  580F0000 07FF9B00
  680F0000 00000000 00000000

  [r.SkyLightingQuality]
  580F0000 0789F638
  680F0000 00000001 00000001

  [r.MaxQualityMode]
  580F0000 08091330
  680F0000 00000000 00000000

  [r.TemporalAAPauseCorrect]
  580F0000 07FF9B18
  680F0000 00000001 00000001

  [r.Tonemapper.GrainQuantization]
  580F0000 0789F418
  680F0000 00000000 00000000

  [r.LensFlareQuality]
  580F0000 07FE99D0
  680F0000 00000000 00000000

  [r.ShadowQuality]
  580F0000 0789EF98
  680F0000 00000003 00000003

  [r.MotionBlurQuality]
  580F0000 0789EFB0
  680F0000 00000000 00000000

  [r.TemporalAACurrentFrameWeight]
  580F0000 07FF9B30
  680F0000 3DCCCCCD 3DCCCCCD

  [r.MaxAnisotropy]
  580F0000 0789F220
  680F0000 00000001 00000001

  [r.TemporalAA.AllowDownsampling]
  580F0000 07FF9B78
  680F0000 00000001 00000001

  [r.TemporalAAUpsampleFiltered]
  580F0000 07FF9B48
  680F0000 00000000 00000000

  [r.ViewDistanceScale]
  580F0000 0789F2F8
  680F0000 3F000000 3F000000

  [r.DynamicRes.OperationMode]
  580F0000 08092BF0
  680F0000 00000002 00000002

  [r.Tonemapper.Sharpen]
  580F0000 07FF4BF0
  680F0000 3F000000 3F000000

  [r.MobileMSAA]
  580F0000 07FF61C8
  680F0000 00000001 00000001

  [r.Shadow.DistanceScale]
  580F0000 0789F3E8
  680F0000 3F800000 3F800000

  [r.SecondaryScreenPercentage.GameViewport]
  580F0000 0806F710
  680F0000 00000000 00000000

  [r.PostProcessAAQuality]
  580F0000 0789EFC8
  680F0000 00000003 00000003

  [r.MSAACount]
  580F0000 07FF61B0
  680F0000 00000004 00000004

  [r.TemporalAA.Upsampling]
  580F0000 0808AA38
  680F0000 00000001 00000001

  [r.SSS.Quality]
  580F0000 07FF3DA0
  680F0000 00000000 00000000

  [r.RefractionQuality]
  580F0000 08003528
  680F0000 00000001 00000001

  [r.MSAA.CompositingSampleCount]
  580F0000 0789F148
  680F0000 00000004 00000004

  [r.EyeAdaptationQuality]
  580F0000 0789F3D0
  680F0000 00000002 00000002

  [r.Tonemapper.Quality]
  580F0000 0808A990
  680F0000 00000002 00000002

  [r.LightFunctionQuality]
  580F0000 0789F3B8
  680F0000 00000000 00000000

  [r.DefaultFeature.AntiAliasing]
  580F0000 0808A8E8
  680F0000 00000002 00000002

  [r.BloomQuality]
  580F0000 0789EF38
  680F0000 00000000 00000000

  [rhi.SyncInterval]
  580F0000 07F4A780
  680F0000 00000002 00000002

  [r.ScreenPercentage]
  580F0000 0789F058
  680F0000 428551EC 428551EC

  [r.GTSyncType]
  580F0000 07F566A8
  680F0000 00000001 00000001

  [r.DepthOfFieldQuality]
  580F0000 0789F040
  680F0000 00000000 00000000

  [r.SSR.Quality]
  580F0000 08005D88
  680F0000 00000000 00000000

  [r.Upscale.Quality]
  580F0000 07FF5430
  680F0000 00000001 00000001

  [r.SSS.Scale]
  580F0000 07FF3D70
  680F0000 00000000 00000000

  [FixedFrameRate]
  580F0000 08093130
  780F0000 000007AC
  680F0000 41F00000 00000007

  [CustomTimeStep]
  580F0000 08093130
  780F0000 000007C8
  640F0000 00000000 00000000
  `

  /**
   * @param {string} text
   */
  function processConfigFile(text) {
  const sections = text.split(/\[\s*([^\]]+)\s*\]\s*/).filter(Boolean);
  let offsets = [];
  
  for (let i = 0; i < sections.length; i += 2) {
    try{
      offsets.push({name: `${sections[i + 1].trim().split('\n')}`, value: sections[i].trim().split('\n').map(line => line.trim())})
    } catch (err) {
      console.log('something went wrong')
    }
  }

  let output = "";
  let disable = '00000000 00000000'
  let enable = '3F800000 3F800000'

  offsets.forEach((entry) => {
    let firstpart = '680F0000';
    
    switch(entry.name){
      case 'r.DynamicRes.OperationMode':
        output += `[DRS Enable]\n${entry.value[0]}\n${entry.value[1]}\n\n`
        output += `[DRS Disable]\n${entry.value[0]}\n${firstpart} ${disable}\n\n` 
        break;
      case "r.DynamicRes.FrameTimeBudget":
        output += `[DR Target 60 FPS]\n${entry.value[0]}\n${firstpart} 41855555 41855555\n\n`
        output += `[DR Target 30 FPS]\n${entry.value[0]}\n${firstpart} 420551EC 420551EC\n\n`
      break;
      case "r.DynamicRes.MinScreenPercentage":
        
        break;
      case "r.DynamicRes.MaxScreenPercentage":
        // Logic for handling r.DynamicRes.MaxScreenPercentage
        break;
      case "r.TonemapperFilm":
        // Logic for handling r.TonemapperFilm
        break;
      case "r.TemporalAA.HistoryScreenPercentage":
        // Logic for handling r.TemporalAA.HistoryScreenPercentage
        break;
      case "r.TemporalAA.R11G11B10History":
        // Logic for handling r.TemporalAA.R11G11B10History
        break;
      case "r.Mobile.ShadingPath":
        // Logic for handling r.Mobile.ShadingPath
        break;
      case "r.SSGI.Enable":
        // Logic for handling r.SSGI.Enable
        break;
      case "r.VSync":
      output += `[Disable Vsync]\n${entry.value[0]}\n${firstpart} ${disable}\n\n`
      output += `[Enable Vsync]\n${entry.value[0]}\n${firstpart} 00000001 00000001\n\n` 
        break;
      case "r.SceneColorFringeQuality":
        // Logic for handling r.SceneColorFringeQuality
        break;
      case "foliage.LODDistanceScale":
        // Logic for handling foliage.LODDistanceScale
        break;
      case "r.Streaming.FullyLoadUsedTextures":
        // Logic for handling r.Streaming.FullyLoadUsedTextures
        break;
      case "r.TemporalAASamples":
        // Logic for handling r.TemporalAASamples
        break;
      case "r.TemporalAAFilterSize":
        // Logic for handling r.TemporalAAFilterSize
        break;
      case "r.AmbientOcclusionRadiusScale":
        // Logic for handling r.AmbientOcclusionRadiusScale
        break;
      case "r.DisableDistortion":
        // Logic for handling r.DisableDistortion
        break;
      case "r.SSGI.Quality":
        // Logic for handling r.SSGI.Quality
        break;
      case "r.SkyLightingQuality":
        // Logic for handling r.SkyLightingQuality
        break;
      case "r.MaxQualityMode":
        // Logic for handling r.MaxQualityMode
        break;
      case "r.TemporalAAPauseCorrect":
        // Logic for handling r.TemporalAAPauseCorrect
        break;
      case "r.Tonemapper.GrainQuantization":
        // Logic for handling r.Tonemapper.GrainQuantization
        break;
      case "r.LensFlareQuality":
        // Logic for handling r.LensFlareQuality
        break;
      case "r.ShadowQuality":
        // Logic for handling r.ShadowQuality
        break;
      case "r.MotionBlurQuality":
        // Logic for handling r.MotionBlurQuality
        break;
      case "r.TemporalAACurrentFrameWeight":
        // Logic for handling r.TemporalAACurrentFrameWeight
        break;
      case "r.MaxAnisotropy":
        // Logic for handling r.MaxAnisotropy
        break;
      case "r.TemporalAA.AllowDownsampling":
        // Logic for handling r.TemporalAA.AllowDownsampling
        break;
      case "r.TemporalAAUpsampleFiltered":
        // Logic for handling r.TemporalAAUpsampleFiltered
        break;
      case "r.ViewDistanceScale":
        // Logic for handling r.ViewDistanceScale
        break;
      case "r.Tonemapper.Sharpen":
        // Logic for handling r.Tonemapper.Sharpen
        break;
      case "r.MobileMSAA":
        // Logic for handling r.MobileMSAA
        break;
      case "r.Shadow.DistanceScale":
        // Logic for handling r.Shadow.DistanceScale
        break;
      case "r.SecondaryScreenPercentage.GameViewport":
        // Logic for handling r.SecondaryScreenPercentage.GameViewport
        break;
      case "r.PostProcessAAQuality":
        // Logic for handling r.PostProcessAAQuality
        break;
      case "r.MSAACount":
        // Logic for handling r.MSAACount
        break;
      case "r.TemporalAA.Upsampling":
        // Logic for handling r.TemporalAA.Upsampling
        break;
      case "r.SSS.Quality":
        // Logic for handling r.SSS.Quality
        break;
      case "r.RefractionQuality":
        // Logic for handling r.RefractionQuality
        break;
      case "r.MSAA.CompositingSampleCount":
        // Logic for handling r.MSAA.CompositingSampleCount
        break;
      case "r.EyeAdaptationQuality":
        // Logic for handling r.EyeAdaptationQuality
        break;
      case "r.Tonemapper.Quality":
        // Logic for handling r.Tonemapper.Quality
        break;
      case "r.LightFunctionQuality":
        // Logic for handling r.LightFunctionQuality
        break;
      case "r.DefaultFeature.AntiAliasing":
        // Logic for handling r.DefaultFeature.AntiAliasing
        break;
      case "r.BloomQuality":
        // Logic for handling r.BloomQuality
        break;
      case "r.ScreenPercentage":
        // Logic for handling r.ScreenPercentage
        break;
      case "r.DepthOfFieldQuality":
        // Logic for handling r.DepthOfFieldQuality
        break;
      case "r.SSR.Quality":
        // Logic for handling r.SSR.Quality
        break;
      case "r.Upscale.Quality":
        output += `[Filtering Type-0 (Nearest)]\n${entry.value[0]}\n${entry.value[1].split(' ')[0]} 00000000 00000000\n\n`
        break;
      case "r.SSS.Scale":
        // Logic for handling r.SSS.Scale
        break;
      default:
        // Optional: Default case for handling any unknown section names
        console.warn("Don't forget about:", entry.name);
        break;
    }
  })

  return output;
}

const cheat = processConfigFile(config)

</script>
<h1> UE4cheatcreator </h1>
<p>Game: Placeholder</p>
<p>Bid: Placeholder</p>
<h2> Cheats </h2>
<p> {cheat} </p>
