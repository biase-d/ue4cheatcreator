export const toggleOptions = [
  {
    name: 'Enable',
    value: '3F800000 3F800000'
   },
   {
    name: 'Disable',
    value: '00000000 00000000'
   }
]

export const fpsTargetOptions = [
  {
  name: '60 FPS',
  value: '41855555 41855555'
  },
  {
    name: '30 FPS',
    value: '420551EC 420551EC'
  }
]

export const levels = [
  {
    name: 'Off',
    value: `${toggleOptions[1].value}`,
  },
  {
    name: 'Very Low',
    value: '00000001 00000001'
  },
  {
    name: 'Low',
    value: '00000002 00000002'
  },
  {
    name: 'Medium',
    value: `00000003 00000003`
  },
  {
    name: 'High',
    value: '00000004 00000004'
  },
  {
    name: 'Very High',
    value: '00000005 00000005'
  },
  {
    name: 'Max',
    value: '00000006 00000006'
  }
]

export const resPercentageOptions = [
  {
    name: '50%',
    value: '42480000 42480000'
  },
  {
    name: '66.66%',
    value: '42855555 42855555'
  },
  {
    name: '75%',
    value: '42960000 42960000'
  },
  {
    name: '85%',
    value: '42AA0000 42AA0000'
  },
  {
    name: '100%',
    value: '42C80000 42C80000'
  }
]

export const levelOptions = [
  {
    name: 'x0.5',
    value: '3F000000 3F000000'
  },
  {
    name: 'x0.75',
    value: '3F400000 3F400000'
  },
  {
    name: 'x1',
    value: '3F800000 3F800000'
  },
  {
    name: 'x1.5',
    value: '3FC00000 3FC00000'
  },
  {
    name: 'x2',
    value: '40000000 40000000'
  }
]

/**
 * @type {{ name: string; value: string; }[]}
 */
export let upscaleOptions = []
let upscaleNames = ["Nearest", "Bilinear", "Blur", "Catmull-Rom", "Lanczos 3", "Gaussian"]
for (let i = 0; i < upscaleNames.length; i++){
  upscaleOptions.push({name: upscaleNames[i], value: levels[i].value})
}
