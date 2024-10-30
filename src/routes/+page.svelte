<script>
  import Download from './Download.svelte'

  const config = {"CheatOptions":[{"name":"30 FPS","options":[{"r.DynamicRes.FrameTimeBudget":"420551EC 420551EC"},{"rhi.SyncInterval":"00000002 00000002"},{"r.VSync":"00000000 00000000"},{"t.MaxFPS":"41F00000 41F00000"},{"r.GTSyncType":"00000001 00000001"}]},{"name":"60 FPS","options":[{"r.DynamicRes.FrameTimeBudget":"41855555 41855555"},{"rhi.SyncInterval":"00000001 00000001"},{"r.VSync":"00000000 00000000"},{"t.MaxFPS":"00000000 00000000"},{"r.GTSyncType":"00000001 00000001"}]},{"name":"Disable DRS","options":[{"r.DynamicRes.OperationMode":"00000000 00000000"}]},{"name":"Enable DRS","options":[{"r.DynamicRes.OperationMode":"00000002 00000002"}]},{"name":"DR Target 30 FPS","options":[{"r.DynamicRes.FrameTimeBudget":"420551EC 420551EC"}]},{"name":"DR Target 45 FPS","options":[{"r.DynamicRes.FrameTimeBudget":"41B1C28F 41B1C28F"}]},{"name":"DR Target 60 FPS","options":[{"r.DynamicRes.FrameTimeBudget":"41855555 41855555"}]},{"name":"RRS 50%","options":[{"r.ScreenPercentage":"42480000 42480000"}]},{"name":"RRS 66.66%","options":[{"r.ScreenPercentage":"42855555 42855555"}]},{"name":"RRS 70%","options":[{"r.ScreenPercentage":"428E38E4 428E38E4"}]},{"name":"RRS 71.11%","options":[{"r.ScreenPercentage":"428E38E4 428E38E4"}]},{"name":"RRS 75%","options":[{"r.ScreenPercentage":"42960000 42960000"}]},{"name":"RRS 83.33%","options":[{"r.ScreenPercentage":"42A6A8F6 42A6A8F6"}]},{"name":"RRS 85%","options":[{"r.ScreenPercentage":"42AA0000 42AA0000"}]},{"name":"RRS 90%","options":[{"r.ScreenPercentage":"42B40000 42B40000"}]},{"name":"RRS 100%","options":[{"r.ScreenPercentage":"42C80000 42C80000"}]},{"name":"RRS 125%","options":[{"r.ScreenPercentage":"42FA0000 42FA0000"}]},{"name":"2nd Render Resolution 50%","options":[{"r.SecondaryScreenPercentage.GameViewport":"42480000 42480000"}]},{"name":"2nd Render Resolution 75%","options":[{"r.SecondaryScreenPercentage.GameViewport":"42960000 42960000"}]},{"name":"2nd Render Resolution MAX","options":[{"r.SecondaryScreenPercentage.GameViewport":"00000000 00000000"}]},{"name":"Filtering Type-0 (Nearest)","options":[{"r.Upscale.Quality":"00000000 00000000"}]},{"name":"Filtering Type-1 (Simple Bilinear)","options":[{"r.Upscale.Quality":"00000001 00000001"}]},{"name":"Filtering Type-2 (Directional Blur)","options":[{"r.Upscale.Quality":"00000002 00000002"}]},{"name":"Filtering Type-3 (Catmull-Rom)","options":[{"r.Upscale.Quality":"00000003 00000003"}]},{"name":"Filtering Type-4 (Lanczos 3)","options":[{"r.Upscale.Quality":"00000004 00000004"}]},{"name":"Filtering Type-5 (Gaussian)","options":[{"r.Upscale.Quality":"00000005 00000005"}]},{"name":"Outlines Off","options":[{"r.PostProcessOutline":"00000000 00000000"}]},{"name":"Outlines On","options":[{"r.PostProcessOutline":"00000001 00000001"}]},{"name":"Adaptive Exposure Off","options":[{"r.EyeAdaptationQuality":"00000000 00000000"}]},{"name":"Adaptive Exposure On","options":[{"r.EyeAdaptationQuality":"00000001 00000001"}]},{"name":"Film Grain Off","options":[{"r.Tonemapper.GrainQuantization":"00000000 00000000"}]},{"name":"Film Grain On","options":[{"r.Tonemapper.GrainQuantization":"00000001 00000001"}]},{"name":"Vignette Off","options":[{"r.Tonemapper.Quality":"00000000 00000000"}]},{"name":"Vignette On","options":[{"r.Tonemapper.Quality":"00000002 00000002"}]},{"name":"Foggy Scene Off","options":[{"r.Fog":"00000000 00000000"}]},{"name":"Foggy Scene On","options":[{"r.Fog":"00000001 00000001"}]},{"name":"Depth of Field Off","options":[{"r.DepthOfFieldQuality":"00000000 00000000"}]},{"name":"Depth of Field On","options":[{"r.DepthOfFieldQuality":"00000001 00000001"}]},{"name":"Chromatic Aberration Off","options":[{"r.SceneColorFringeQuality":"00000000 00000000"}]},{"name":"Chromatic Aberration On","options":[{"r.SceneColorFringeQuality":"00000001 00000001"}]},{"name":"Lens Flare Off","options":[{"r.LensFlareQuality":"00000000 00000000"}]},{"name":"Lens Flare On","options":[{"r.LensFlareQuality":"00000001 00000001"}]},{"name":"Sky Lighting Quality Off","options":[{"r.SkyLightingQuality":"00000000 00000000"}]},{"name":"Sky Lighting Quality On","options":[{"r.SkyLightingQuality":"00000001 00000001"}]},{"name":"Filmic Tonemapper Off","options":[{"r.TonemapperFilm":"00000000 00000000"}]},{"name":"Filmic Tonemapper On","options":[{"r.TonemapperFilm":"00000001 00000001"}]},{"name":"Image Sharpening Off","options":[{"r.Tonemapper.Sharpen":"00000000 00000000"}]},{"name":"Image Sharpening On","options":[{"r.Tonemapper.Sharpen":"3F800000 3F800000"}]},{"name":"Foliage Off","options":[{"foliage.LODDistanceScale":"00000000 00000000"}]},{"name":"Foliage On","options":[{"foliage.LODDistanceScale":"3F800000 3F800000"}]},{"name":"Motion Blur Off","options":[{"r.MotionBlurQuality":"00000000 00000000"}]},{"name":"Motion Blur On","options":[{"r.MotionBlurQuality":"00000001 00000001"}]},{"name":"AA Method OFF","options":[{"r.DefaultFeature.AntiAliasing":"00000000 00000000"},{"r.AntiAliasingMethod":"00000000 00000000"}]},{"name":"AA Method FXAA","options":[{"r.DefaultFeature.AntiAliasing":"00000001 00000001"},{"r.AntiAliasingMethod":"00000001 00000001"}]},{"name":"AA Method TAA","options":[{"r.DefaultFeature.AntiAliasing":"00000002 00000002"},{"r.AntiAliasingMethod":"00000002 00000002"}]},{"name":"Disable TAAU","options":[{"r.DefaultFeature.AntiAliasing":"00000001 00000001"},{"r.AntiAliasingMethod":"00000001 00000001"},{"r.TemporalAA.Upsampling":"00000000 00000000"},{"r.PostProcessAAQuality":"00000002 00000002"},{"r.TemporalAA.Algorithm":"00000000 00000000"},{"r.DynamicRes.MaxScreenPercentage":"42C80000 42C80000"}]},{"name":"Enable TAAU","options":[{"r.DefaultFeature.AntiAliasing":"00000002 00000002"},{"r.AntiAliasingMethod":"00000002 00000002"},{"r.TemporalAA.Upsampling":"00000001 00000001"},{"r.PostProcessAAQuality":"00000003 00000003"},{"r.TemporalAA.Algorithm":"00000001 00000001"},{"r.DynamicRes.MaxScreenPercentage":"428E38E4 428E38E4"}]},{"name":"AA Off","options":[{"r.PostProcessAAQuality":"00000000 00000000"}]},{"name":"AA Very Low","options":[{"r.PostProcessAAQuality":"00000001 00000001"}]},{"name":"AA Low","options":[{"r.PostProcessAAQuality":"00000002 00000002"}]},{"name":"AA Medium","options":[{"r.PostProcessAAQuality":"00000003 00000003"}]},{"name":"AA High","options":[{"r.PostProcessAAQuality":"00000004 00000004"}]},{"name":"AA Very High","options":[{"r.PostProcessAAQuality":"00000005 00000005"}]},{"name":"AA Max","options":[{"r.PostProcessAAQuality":"00000006 00000006"}]},{"name":"Shadows Off","options":[{"r.ShadowQuality":"00000000 00000000"}]},{"name":"Shadows Very Low","options":[{"r.ShadowQuality":"00000001 00000001"}]},{"name":"Shadows Low","options":[{"r.ShadowQuality":"00000002 00000002"}]},{"name":"Shadows Medium","options":[{"r.ShadowQuality":"00000003 00000003"}]},{"name":"Shadows High","options":[{"r.ShadowQuality":"00000004 00000004"}]},{"name":"Shadow Distance Off","options":[{"r.Shadow.DistanceScale":"00000000 00000000"}]},{"name":"Shadow Distance x0.5","options":[{"r.Shadow.DistanceScale":"3F000000 3F000000"}]},{"name":"Shadow Distance x0.75","options":[{"r.Shadow.DistanceScale":"3F400000 3F400000"}]},{"name":"Shadow Distance x1","options":[{"r.Shadow.DistanceScale":"3F800000 3F800000"}]},{"name":"Shadow Distance x1.5","options":[{"r.Shadow.DistanceScale":"3FC00000 3FC00000"}]},{"name":"Shadow Distance x2","options":[{"r.Shadow.DistanceScale":"40000000 40000000"}]},{"name":"Disable SSGI","options":[{"r.SSGI.Enable":"00000000 00000000"}]},{"name":"Enable SSGI","options":[{"r.SSGI.Enable":"00000001 00000001"},{"r.SSGI.Quality":"00000004 00000004"}]},{"name":"Disable SSR","options":[{"r.SSR.Quality":"00000000 00000000"}]},{"name":"Enable SSR","options":[{"r.SSR.Quality":"00000001 00000001"}]},{"name":"SSAO Off","options":[{"r.AmbientOcclusionRadiusScale":"00000000 00000000"}]},{"name":"SSAO x0.5","options":[{"r.AmbientOcclusionRadiusScale":"3F000000 3F000000"}]},{"name":"SSAO x0.75","options":[{"r.AmbientOcclusionRadiusScale":"3F400000 3F400000"}]},{"name":"SSAO x1","options":[{"r.AmbientOcclusionRadiusScale":"3F800000 3F800000"}]},{"name":"SSAO x1.5","options":[{"r.AmbientOcclusionRadiusScale":"3FC00000 3FC00000"}]},{"name":"SSAO x2","options":[{"r.AmbientOcclusionRadiusScale":"40000000 40000000"}]},{"name":"View Distance Scale Off","options":[{"r.ViewDistanceScale":"00000000 00000000"}]},{"name":"View Distance Scale x0.5","options":[{"r.ViewDistanceScale":"3F000000 3F000000"}]},{"name":"View Distance Scale x0.75","options":[{"r.ViewDistanceScale":"3F400000 3F400000"}]},{"name":"View Distance Scale x1","options":[{"r.ViewDistanceScale":"3F800000 3F800000"}]},{"name":"View Distance Scale x1.5","options":[{"r.ViewDistanceScale":"3FC00000 3FC00000"}]},{"name":"Bloom Off","options":[{"r.BloomQuality":"00000000 00000000"}]},{"name":"Bloom Very Low","options":[{"r.BloomQuality":"00000001 00000001"}]},{"name":"Bloom Low","options":[{"r.BloomQuality":"00000002 00000002"}]},{"name":"Bloom Medium","options":[{"r.BloomQuality":"00000003 00000003"}]},{"name":"Bloom High","options":[{"r.BloomQuality":"00000004 00000004"}]},{"name":"Bloom Very High","options":[{"r.BloomQuality":"00000005 00000005"}]},{"name":"Bloom Max","options":[{"r.BloomQuality":"00000006 00000006"}]},{"name":"Anisotropic Filtering Off","options":[{"r.MaxAnisotropy":"00000000 00000000"}]},{"name":"Anisotropic Filtering 1x","options":[{"r.MaxAnisotropy":"00000001 00000001"}]},{"name":"Anisotropic Filtering 2x","options":[{"r.MaxAnisotropy":"00000002 00000002"}]},{"name":"Anisotropic Filtering 4x","options":[{"r.MaxAnisotropy":"00000004 00000004"}]},{"name":"Anisotropic Filtering 8x","options":[{"r.MaxAnisotropy":"00000008 00000008"}]},{"name":"Anisotropic Filtering 16x","options":[{"r.MaxAnisotropy":"00000016 00000016"}]},{"name":"Fully Load Textures ASAP Off","options":[{"r.Streaming.FullyLoadUsedTextures":"00000000 00000000"}]},{"name":"Fully Load Textures ASAP On","options":[{"r.Streaming.FullyLoadUsedTextures":"00000001 00000001"}]},{"name":"Max Quality Mode Off","options":[{"r.MaxQualityMode":"00000000 00000000"}]},{"name":"Max Quality Mode On","options":[{"r.MaxQualityMode":"00000001 00000001"}]},{"name":"Disable Distortion Effects","options":[{"r.DisableDistortion":"00000001 00000001"}]},{"name":"Enable Distortion Effects","options":[{"r.DisableDistortion":"00000000 00000000"}]}]}

  export function parseData (data) {
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

  /**
   * @type {HTMLInputElement}
   */
  let file;
  let cheats = "";
  let size = '';
  let name = ''
  let loading = false

  const handleCFGfile = async () => {
    loading = true
    const formData = new FormData()

    if (file.files){
      formData.append('cfg', file.files[0])
    } else {
      alert('Select a file to start')
    }

    const INSTRUCTION = '680F0000'
    const cfg = formData.get('cfg')
    const { CheatOptions } = config

    if (!(cfg instanceof File && cfg.type === 'text/plain' && cfg.size < 5000)) {
      return new Response('Please make sure you are using the correct file', { status: 500 })
    }

    const cheat = parseData(await cfg.text())

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
        // Add the cheat name
          contentParts.push(`[${item.name}]`)

          // Process each valid option
          setting.forEach(options => {
            const [name, value] = Object.entries(options)[0]
            contentParts.push(`${cheat[name].offset}`)
            contentParts.push(INSTRUCTION + ' ' + value)
          })

          // Add a newline after each section
          contentParts.push('')
        } else {
          console.warn('No offsets for:', item.name)
        }
      } else {
        console.warn('Not Implemented: Skipped', item.name)
      }
    }

    // Join all content parts with newlines
    const content = contentParts.join('\n')

    if (content){
      // Prevent duplicate entries on multiple uploads
      cheats = "";
      size = "";
      name = "";

      name = cfg.name
      cheats += content
      size = Buffer.byteLength(content, 'utf8') / 1000

    } else if (!content){
      alert('Something went wrong. Make sure you are selecting the correct .txt file')
    }
  }

  function recreate() {
    loading = false
    cheats = ""
  }
  
</script>

{#if cheats === ""}
  <form on:submit|preventDefault= {handleCFGfile}>
    <div>
      <!--
      <Icon icon="pixelarticons:article" width=96/>
      -->
    </div>
    <span>Max Size: 5KB</span>
    <input type='file' bind:this={file} accept='.txt' required/>
    {#if !loading}
      <button type='submit'> Create Cheats </button>
    {:else}
      <button disabled><span class='animate-spin'></span></button>
    {/if}
  </form>
{:else}
  <div>
    <span></span>
    <Download { cheats } { name } {size}/>
    <button on:click={recreate}> Create for another game </button>
  </div>
{/if}
