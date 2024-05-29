<script>

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
  let options = [
    {
      name: 'Enable',
      value: '3F800000 3F800000'
     },
     {
      name: 'Disable',
      value: '00000000 00000000'
     }
  ]

  const cheatNames = [
  // --- DYNAMIC RESOLUTION ---
  { cvar: "r.DynamicRes.OperationMode", name: "Dynamic Resolution", options: options},
  { cvar: "r.DynamicRes.FrameTimeBudget", name: "Dynamic Resolution Target FPS", option: [""]},

  // --- ANTI ALIASING ---
  { cvar: "r.PostProcessAAQuality", name: "Anti Aliasing", type: "selector", default: 4, options: ["Off", "Very Low", "Low", "Medium", "High", "Very High", "Max"] },
  { cvar: "r.TemporalAA.Upsampling", name: "TAAU", type: "selector", default: 0, options: ["Spatial upscale", "TAAU"] },

  // --- RENDER RESOLUTION SCALE ---
  { cvar: "r.ScreenPercentage", name: "Render Resolution Scale", type: "integer", default: 100, min: 1, max: 100 },
  { cvar: "r.SecondaryScreenPercentage.GameViewport", name: "2nd RRS", type: "integer", default: 0, min: 0, max: 100 },

  // --- UPSACLE ---
  { cvar: "r.Upscale.Quality", name: "Upscale Quality", type: "selector", default: 3, options: ["Nearest", "Bilinear", "Blur", "Catmull-Rom", "Lanczos 3", "Gaussian"] },

  // --- FIDELITYFX SUPER RESOLUTION ---
  { cvar: "r.FidelityFX.FSR.PrimaryUpscale", name: "FSR Primary Upscale", type: "boolean", default: false },
  { cvar: "r.FidelityFX.FSR.SecondaryUpscale", name: "FSR Secondary Upscale", type: "boolean", default: false },
  
  // --- MSAA ---
  { cvar: "r.MSAACount", name: "MSAA Count", type: "selector", default: 0, options: ["Disabled", "1x", "2x", "4x", "8x"] },
  { cvar: "r.MobileMSAA", name: "Mobile MSAA", type: "selector", default: 1, options: ["Temporal AA", "2x MSAA", "4x MSAA", "8x MSAA"] },
  { cvar: "r.MSAA.CompositingSampleCount", name: "MSAA Sample Count", type: "selector", default: 1, options: ["1x", "2x", "4x", "8x"] },

  // --- VIEW DISTANCE ---
  { cvar: "r.ViewDistanceScale", name: "View Distance Scale", type: "float", default: 1.0, min: 0.1, max: 10.0 },
  { cvar: "foliage.LODDistanceScale", name: "Foliage", type: "float", default: 1.0, min: 0.1, max: 10.0 },


  // --- EFFECTS ---
  { cvar: "r.AmbientOcclusionRadiusScale", name: "SSAO", type: "float", default: 1.0, min: 0, max: 10.0 },
  { cvar: "r.ShadowQuality", name: "Shadow", type: "selector", default: 5, options: ["Off", "Low (Unfiltered)", "Low", "Medium", "High", "Max"] },
  { cvar: "r.Shadow.DistanceScale", name: "Shadow Distance", type: "float", default: 1.0, min: 0.1, max: 10.0 },
  { cvar: "r.MotionBlurQuality", name: "Motion Blur", type: "selector", default: 3, options: ["Off", "Low", "Medium", "High", "Very High"] },
  { cvar: "r.LensFlareQuality", name: "Lens Flare", type: "selector", default: 2, options: ["Off", "Low", "Good", "Very Good"] },
  { cvar: "r.BloomQuality", name: "Bloom", type: "selector", default: 5, options: ["Off", "Low", "Average", "Good", "Best", "Experimental"] },
  { cvar: "r.SceneColorFringeQuality", name: "Chromatic Aberration", type: "selector", default: 1, options: ["Off", "3 Texture Samples"] },
  { cvar: "r.DepthOfFieldQuality", name: "Depth of Field", type: "selector", default: 2, options: ["Off", "Low", "High", "Very High", "Extremely High"] },
  { cvar: "r.SSR.Quality", name: "SSR Quality", type: "selector", default: 0, options: ["Off", "Low", "Medium", "High", "Very High"] },

  // --- LIGHTING ---
  { cvar: "r.SkyLightingQuality", name: "Sky Lighting Quality", type: "boolean", default: true },
  { cvar: "r.LightFunctionQuality", name: "Light Function Quality", type: "selector", default: 2, options: ["Off", "Low", "Normal", "High"] },

  // --- POST PROCESSING ---
  { cvar: "r.Tonemapper.GrainQuantization", name: "Film Grain", type: "selector", default: 1, options: ["Low", "High"] },
  { cvar: "r.Tonemapper.Sharpen", name: "Image Sharpening", type: "float", default: 0, min: 0, max: 10.0 },
  { cvar: "r.TonemapperFilm", name: "Filmic Tonemapper", options: options},
  { cvar: "r.Tonemapper.Quality", name: "Vignette", type: "selector", default: 5, options: ["Basic", "+ Film Contrast", "+ Vignette", "+ Film Shadow Tint", "+ Grain", "Full Quality"] },
  { cvar: "r.EyeAdaptationQuality", name: "Adaptive Exposure", type: "selector", default: 2, options: ["Off", "Low", "Normal", "High"] },

  // --- OTHER ---
  { cvar: "r.MaxAnisotropy", name: "Anisotropic Filtering", type: "selector", default: 4, options: ["1", "2", "4", "8", "16"] },
  { cvar: "r.Fog", name: "Fog", type: "boolean", default: true },
  { cvar: "r.SSGI.Enable", name: "SSGI Enable", type: "boolean", default: false },
  { cvar: "r.SSGI.Quality", name: "SSGI Quality", type: "integer", default: 4, min: 1, max: 4 },
  { cvar: "r.DisableDistortion", name: "Distortion", type: "boolean", default: false },
  { cvar: "r.PostProcessOutline", name: "Outlines", type: "boolean", default: false },
  { cvar: "r.VSync", name: "VSync", type: "boolean", default: false },
  { cvar: "t.MaxFPS", name: "Max FPS", type: "integer", default: 60, min: 30, max: 240 },
  { cvar: "r.Streaming.FullyLoadUsedTextures", name: "Fully Load Textures ASAP", type: "boolean", default: false },
  { cvar: "r.RefractionQuality", name: "Refraction Quality", type: "selector", default: 2, options: ["Off", "Low", "Normal", "High"] },
  { cvar: "r.MaxQualityMode", name: "Max Quality Override", type: "boolean", default: false },
  { cvar: "r.Mobile.ShadingPath", name: "Mobile Shading Path", type: "selector", default: 0, options: ["Forward", "Deferred"] },
  { cvar: "r.GTSyncType", name: ""}
]


  for(const cheat of offsets){
    try{
      for (const item of cheatNames.find(({ cvar }) => cvar === cheat.name)?.options){
        console.log(item)
          let offset = cheat.value[0];
          // @ts-ignore
          output += `[${item.name} ${cheatNames.find(({ cvar }) => cvar === cheat.name)?.name}]\n\n`;
      }
    } catch(err){
      console.log('SKipped brrr')
    }
  }

  return output;
}

const cheat = processConfigFile(config)

</script>
<h1> UE4cheatcreator </h1>
<p>Game: Placeholder</p>
<p>Bid: Placeholder</p>
<h2> Cheats </h2>
<p> {cheat} </p>
