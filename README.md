# ue4cheatcreator
Create cheats FPS, GFX and more for Unreal Engine using files from ue4cfgdumper

## How to use 
1. Create cfg dump using [UE4cfgdumper](https://github.com/masagrator/UE4cfgdumper)
2. Copy the .txt file from folder with the game ID in ue4cfgdumper's directory 
3. Visit [UE4cheatcreator](https://ue4cheatcreator.vercel.app)
4. Upload .txt file from step 2 
5. Download
6. Copy to console and Enjoy 

## Cheats Supported by the Default config
- [x] FPS - 30, 60
- [x] Dynamic Resolution 
- [x] Dynamic Resolution Target FPS - 30 FPS, 45 FPS, 60 FPS
- [x] Anti Aliasing Method - Off, FXAA, TAA
- [x] Anti Aliasing Levels - Off, Very Low, Low, Medium, High, Very High, Max
- [x] Render Resolution Scale - 50%, 66.66%, 70%, 71.11%, 75%, 83.33%, 85%, 90%, 100%, 125%
- [x] 2nd Render Resolution Scale - 50%, 75%, 100%, Max (Might Cause Crashes)
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
- [x] MSAA

## How to Create Custom Configs
All custom configs require a `config` key. This key controls global settings for the configuration and currently supports:

- **`categories` (boolean):** Determines if options are grouped into categories.
  - `true`: Enables category grouping.
  - `false`: Disables category grouping.
- **`defaultIndicator` (string):** Specifies the symbol or value used to mark the default option.

### Example Configurations

#### **With Category Support**
When `categories` is set to `true`, options are grouped into categories. For example:

```yml
config: 
  - categories: true
    defaultIndicator: 'Default'
Framerate:
  - name: '30 FPS'
    options:
      - 'r.DynamicRes.FrameTimeBudget': '420551EC 420551EC'
      - 'rhi.SyncInterval': '00000002 00000002'
      - 'r.VSync': '00000000 00000000'
      - 't.MaxFPS': '41F00000 41F00000'
      - 'r.GTSyncType': '00000001 00000001'
  - name: '60 FPS'
    options:
      - 'r.DynamicRes.FrameTimeBudget': '41855555 41855555'
      - 'rhi.SyncInterval': '00000001 00000001'
      - 'r.VSync': '00000000 00000000'
      - 't.MaxFPS': '00000000 00000000'
      - 'r.GTSyncType': '00000001 00000001'
```
##### Expected Output
```
[--SectionStart:Framerate--]
00000000 00000000 00000000
[30 FPS]
580F0000 0A0CA138
680F0000 420551EC 420551EC
580F0000 09FC9628
680F0000 00000002 00000002
580F0000 090FC980
680F0000 00000000 00000000
580F0000 0A104AE0
680F0000 41F00000 41F00000
580F0000 09FD9A20
680F0000 00000001 00000001
[60 FPS]
580F0000 0A0CA138
680F0000 41855555 41855555
580F0000 09FC9628
680F0000 00000001 00000001
580F0000 090FC980
680F0000 00000000 00000000
580F0000 0A104AE0
680F0000 00000000 00000000
580F0000 09FD9A20
680F0000 00000001 00000001
[--SectionEnd:Framerate--]
00000000 00000000 00000000
```

#### **Without Category Support**
If you prefer not to create categories, you can group all options under a single key (e.g., cheats) instead of naming individual categories like Framerate. This simplifies the structure while maintaining functionality
```yml
config: 
  - categories: false
    defaultIndicator: 'Default'
cheats:
  - name: '30 FPS'
    options:
      - 'r.DynamicRes.FrameTimeBudget': '420551EC 420551EC'
      - 'rhi.SyncInterval': '00000002 00000002'
      - 'r.VSync': '00000000 00000000'
      - 't.MaxFPS': '41F00000 41F00000'
      - 'r.GTSyncType': '00000001 00000001'
  - name: '60 FPS'
    options:
      - 'r.DynamicRes.FrameTimeBudget': '41855555 41855555'
      - 'rhi.SyncInterval': '00000001 00000001'
      - 'r.VSync': '00000000 00000000'
      - 't.MaxFPS': '00000000 00000000'
      - 'r.GTSyncType': '00000001 00000001'
```
##### Expected Output
```
[30 FPS]
580F0000 0A0CA138
680F0000 420551EC 420551EC
580F0000 09FC9628
680F0000 00000002 00000002
580F0000 090FC980
680F0000 00000000 00000000
580F0000 0A104AE0
680F0000 41F00000 41F00000
580F0000 09FD9A20
680F0000 00000001 00000001
[60 FPS]
580F0000 0A0CA138
680F0000 41855555 41855555
580F0000 09FC9628
680F0000 00000001 00000001
580F0000 090FC980
680F0000 00000000 00000000
580F0000 0A104AE0
680F0000 00000000 00000000
580F0000 09FD9A20
680F0000 00000001 00000001
```

## Special Thanks
This project wouldn't be possible without:
- The tutorials and documentation of UE4 cheats on the switch by Hazerou 
- [`UE4cfgdumper`](https://github.com/masagrator/UE4cfgdumper) by Masagrator
- [Unreal Engine 5.1 Console Variables and Commands](https://framedsc.com/GeneralGuides/ue5_commands.htm)
