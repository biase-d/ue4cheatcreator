Why? Well it takes a really long time to configure for both fps and gfx and this will try to reduce that time

# Progress Tracker
## In-Progress 
- [ ] Create FPS codes (_r.Vsync, rhi.SyncInterval, t.MaxFPS, FixedFrameRate, CustomTimeStep_)
- [ ] Option for fps only and gfx only (_and both ofc_)
- [ ] Toggles for cheats before creation of txt
- [ ] Order cheats according to usefulness
- [ ] Preview cheats before downloading
- [ ] Show which one was the default option
- [ ] Download with txt in the directory atmosphere/content/[GameID]/cheats/
## Done 
- [x] Create the usual gfx cheats and their different levels
- [x] Scaffold a UI
- [x] Uploading of .txt files

# Supported Cheats
- Dynamic Resolution 
- Dynamic Resolution Target FPS
- Anti Aliasing 
- Render Resolution
- 2nd Render Resolution 
- Upscale Quality 
- View Distance Scale 
- LOD Distance Scale 
- SSAO 
- Shadow Quality 
- Shadow Distance
- Motion Blur Quality 
- Lens Flare Quality 
- Bloom
- Chromatic Aberration 
- Depth of Field 
- Sky Lighting Quality 
- Light Function Quality 
- Film Grain 
- Image Sharpening 
- Filmic Tonemapper
- Vignette 
- Adaptive Exposure
- Anisotropic Filtering 
- Fog 
- Outlines 
- Fully Load Textures ASAP
- Refraction Quality 
- Max Quality Override 
- Mobile Shading Path 
- TAAU

And the following need more work to function well: 
- [ ] FPS 
- [ ] SSGI
- [ ] SSR
- [ ] MSAA
- [ ] MIN/MAX/DEFAULT GFX Settings

# How to use 
1. Create cfg dump using [UE4cfgdumper](https://github.com/masagrator/UE4cfgdumper)
2. Copy the .txt file from folder with the game ID in ue4cfgdumper's directory 
3. Visit [UE4cheatcreator](https://ue4cheatcreator.vercel.app)
4. Upload .txt file from step 2 
5. Download
6. Copy to Switch and Enjoy 

After all the work has been done I might begin work on creating an overlay for this for Ultrahand 

# Special Thanks
This project wouldn't be possible without:
- The tutorials and documentation of UE4 cheats on the switch by Hazerou 
- [`UE4cfgdumper`](https://github.com/masagrator/UE4cfgdumper) by Masagrator 