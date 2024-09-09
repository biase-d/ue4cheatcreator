# ue4cheatcreator
Create cheats FPS, GFX and more for Unreal Engine using files from ue4cfgdumper

## How to use 
1. Create cfg dump using [UE4cfgdumper](https://github.com/masagrator/UE4cfgdumper)
2. Copy the .txt file from folder with the game ID in ue4cfgdumper's directory 
3. Visit [UE4cheatcreator](https://ue4cheatcreator.vercel.app)
4. Upload .txt file from step 2 
5. Download
6. Copy to console and Enjoy 

## Supported Cheats
- [x] FPS - 30, 45, 60
- [x] Dynamic Resolution 
- [x] Dynamic Resolution Target FPS
- [x] Anti Aliasing 
- [x] Render Resolution Scale - 50%, 66.66%, 70%, 71.11%, 75%, 83.33%, 85%, 90%, 100%
- [x] 2nd Render Resolution Scale - 50%, 75%, 100%
- [x] Upscale Quality 
- [x] View Distance Scale 
- [x] Foliage 
- [x] SSAO 
- [x] Shadow Quality 
- [x] Shadow Distance
- [x] Motion Blur
- [x] Lens Flare Quality 
- [x] Bloom
- [x] Chromatic Aberration 
- [x] Depth of Field 
- [x] Sky Lighting Quality 
- [ ] Light Function Quality 
- [x] Film Grain 
- [x] Image Sharpening 
- [x] Filmic Tonemapper
- [x] Vignette 
- [x] Adaptive Exposure
- [x] Anisotropic Filtering 
- [x] Fog 
- [x] Outlines 
- [x] Fully Load Textures ASAP
- [x] Refraction Quality 
- [x] Max Quality Override 
- [x] Mobile Shading Path 
- [?] TAAU
- [ ] SSGI
- [ ] SSR
- [ ] MSAA
- [ ] MIN/MAX/DEFAULT GFX Settings

## Progress Tracker
- [ ]  Download fps or gfx only (_or both ofc_)
- [ ]  Toggles for cheats before creation of txt
- [ ]  Order cheats according to usefulness
- [ ]  Preview cheats before downloading
- [ ]  Show which one was the default option
- [ ]  Download with txt in the directory atmosphere/content/[GameID]/cheats/
- [x] Create FPS codes (_r.Vsync, rhi.SyncInterval, t.MaxFPS, FixedFrameRate, CustomTimeStep_)
- [x] Create the usual gfx cheats and their different levels
- [x] Scaffold a UI
- [x] Uploading of .txt files

After all the work has been done I might begin work on creating an overlay for this for Ultrahand 

## Special Thanks
This project wouldn't be possible without:
- The tutorials and documentation of UE4 cheats on the switch by Hazerou 
- [`UE4cfgdumper`](https://github.com/masagrator/UE4cfgdumper) by Masagrator
