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
- [x] FPS - 30, 60
- [x] Dynamic Resolution 
- [x] Dynamic Resolution Target FPS - 30 FPS, 45 FPS, 60 FPS
- [x] Anti Aliasing Method - Off, FXAA, TAA
- [x] Anti Aliasing Levels - Off, Very Low, Low, Medium, High, Very High, Max
- [x] Render Resolution Scale - 50%, 66.66%, 70%, 71.11%, 75%, 83.33%, 85%, 90%, 100%
- [x] 2nd Render Resolution Scale - 50%, 75%, MAX
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
- [x] Film Grain 
- [x] Image Sharpening 
- [x] Filmic Tonemapper
- [x] Vignette 
- [x] Adaptive Exposure
- [x] Anisotropic Filtering 
- [x] Fog 
- [x] Outlines 
- [x] Fully Load Textures ASAP
- [x] Max Quality Override 
- [x] TAAU
- [x] SSGI
- [x] SSR
- [ ] MSAA
- [ ] MIN/MAX/DEFAULT GFX Settings

## Disabled
- Light Function Quality 
- Mobile Shading Path 
- Refraction Quality 

## Notes
### FPS 
Use FPSLocker for unlocking Framerate

### TAAU 
Some combination of AA options will make the game crash

## Progress Tracker
### In-Progress
- [ ] Updating UI to expose new functionality
### Planned
- [ ]  Toggles for cheats before creation of txt
- [ ]  Preview cheats before downloading
- [ ]  Download with txt in the directory atmosphere/content/[GameID]/cheats/
- [ ]  Make cheat creation page offline-friendly
### Done
- [x] Custom Configs (these will cover cheats order and generation of only fps or gfx options) - 20250103
- [x] Toggle Categories - 20250103
- [x] Mark Default Values
- [x] Create FPS codes (_r.Vsync, rhi.SyncInterval, t.MaxFPS, FixedFrameRate, CustomTimeStep_)
- [x] Create the usual gfx cheats and their different levels
- [x] Scaffold a UI
- [x] Uploading of .txt files

After all the work has been done I might begin work on creating an overlay for this for Ultrahand

## Special Thanks
This project wouldn't be possible without:
- The tutorials and documentation of UE4 cheats on the switch by Hazerou 
- [`UE4cfgdumper`](https://github.com/masagrator/UE4cfgdumper) by Masagrator
- [Unreal Engine 5.1 Console Variables and Commands](https://framedsc.com/GeneralGuides/ue5_commands.htm)
