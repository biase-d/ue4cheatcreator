import {levels, levelsFlt, levelOptions, toggleOptions, toggleOptionsFlt, fpsTargetOptions, resPercentageOptions, upscaleOptions} from '$lib/options'

export let cheatNames = [
  // --- DYNAMIC RESOLUTION ---
  { cvar: "r.DynamicRes.OperationMode", name: "Dynamic Resolution", options: toggleOptions},
  { cvar: "r.DynamicRes.FrameTimeBudget", name: "Dynamic Resolution Target FPS", option: fpsTargetOptions},

  // --- ANTI ALIASING ---
  { cvar: "r.PostProcessAAQuality", name: "Anti-Aliasing", options: levels },
  // { cvar: "r.TemporalAA.Upsampling", name: "TAAU", options: toggleOptions },

  // --- RENDER RESOLUTION SCALE ---
  { cvar: "r.ScreenPercentage", name: "Render Resolution", options: resPercentageOptions},
  { cvar: "r.SecondaryScreenPercentage.GameViewport", name: "2nd Render Resolution", options: resPercentageOptions },

  // --- UPSACLE ---
  { cvar: "r.Upscale.Quality", name: "Upscale Quality", options: upscaleOptions },

  // --- FIDELITYFX SUPER RESOLUTION ---
  //{ cvar: "r.FidelityFX.FSR.PrimaryUpscale", name: "FSR Primary Upscale"},
  //{ cvar: "r.FidelityFX.FSR.SecondaryUpscale", name: "FSR Secondary Upscale"},
  
  // --- MSAA ---
  //{ cvar: "r.MSAACount", name: "MSAA Count", options: ["Disabled", "1x", "2x", "4x", "8x"] },
  //{ cvar: "r.MobileMSAA", name: "Mobile MSAA", options: ["Temporal AA", "2x MSAA", "4x MSAA", "8x MSAA"] },
  //{ cvar: "r.MSAA.CompositingSampleCount", name: "MSAA Sample Count", options: ["1x", "2x", "4x", "8x"] },

  // --- VIEW DISTANCE ---
  { cvar: "r.ViewDistanceScale", name: "View Distance Scale", options: levels.slice(0, -2)},
  { cvar: "foliage.LODDistanceScale", name: "Foliage", option: levels},


  // --- EFFECTS ---
  { cvar: "r.AmbientOcclusionRadiusScale", name: "SSAO", options: levelOptions},
  { cvar: "r.ShadowQuality", name: "Shadow", options: levels.slice(0, -2)},
  { cvar: "r.Shadow.DistanceScale", name: "Shadow Distance", options: levelOptions},
  { cvar: "r.MotionBlurQuality", name: "Motion Blur", options: toggleOptions },
  { cvar: "r.LensFlareQuality", name: "Lens Flare", options: toggleOptions },
  { cvar: "r.BloomQuality", name: "Bloom", options: levels },
  { cvar: "r.SceneColorFringeQuality", name: "Chromatic Aberration", options: toggleOptions },
  { cvar: "r.DepthOfFieldQuality", name: "Depth of Field", options: toggleOptions},
  //{ cvar: "r.SSR.Quality", name: "SSR Quality", options: ["Off", "Low", "Medium", "High", "Very High"] },

  // --- LIGHTING ---
  { cvar: "r.SkyLightingQuality", name: "Sky Lighting Quality", options: toggleOptions},
  { cvar: "r.LightFunctionQuality", name: "Light Function Quality", options: levels.slice(0, -2)},

  // --- POST PROCESSING ---
  { cvar: "r.Tonemapper.GrainQuantization", name: "Film Grain", options: toggleOptions },
  { cvar: "r.Tonemapper.Sharpen", name: "Image Sharpening", options: toggleOptionsFlt},
  { cvar: "r.TonemapperFilm", name: "Filmic Tonemapper", options: toggleOptions},
  { cvar: "r.Tonemapper.Quality", name: "Vignette", options: toggleOptions },
  { cvar: "r.EyeAdaptationQuality", name: "Adaptive Exposure", options: toggleOptions },

  // --- OTHER ---
  //{ cvar: "r.MaxAnisotropy", name: "Anisotropic Filtering", options: ["1", "2", "4", "8", "16"] },
  { cvar: "r.Fog", name: "Fog", options: toggleOptions},
  //{ cvar: "r.SSGI.Enable", name: "SSGI Enable"},
  //{ cvar: "r.SSGI.Quality", name: "SSGI Quality"},
  //{ cvar: "r.DisableDistortion", name: "Distortion"},
  { cvar: "r.PostProcessOutline", name: "Outlines", options: toggleOptions},
  { cvar: "r.VSync", name: "VSync", options: toggleOptions},
  //{ cvar: "t.MaxFPS", name: "Max FPS", options: ''},
  { cvar: "r.Streaming.FullyLoadUsedTextures", name: "Fully Load Textures ASAP", options: toggleOptions},
  { cvar: "r.RefractionQuality", name: "Refraction Quality", options: toggleOptions },
  { cvar: "r.MaxQualityMode", name: "Max Quality Override", options: toggleOptions},
  { cvar: "r.Mobile.ShadingPath", name: "Mobile Shading Path", options: toggleOptions },
  //{ cvar: "r.GTSyncType", name: ""}
]