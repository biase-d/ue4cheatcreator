export const toHex = (val, type) => {
  try {
    if (type === 'float') {
      const view = new DataView(new ArrayBuffer(4))
      view.setFloat32(0, parseFloat(val))
      return view.getUint32(0).toString(16).toUpperCase().padStart(8, '0')
    } else if (type === 'int') {
      return parseInt(val).toString(16).toUpperCase().padStart(8, '0')
    }
    return val
  } catch (e) {
    return '00000000'
  }
}

export const fromHex = (hex, type) => {
  try {
    const intVal = parseInt(hex, 16)
    if (type === 'float') {
      const view = new DataView(new ArrayBuffer(4))
      view.setUint32(0, intVal)
      let f = view.getFloat32(0)
      // Clean up float precision artifacts (e.g. 59.99999 -> 60)
      return parseFloat(f.toFixed(5)).toString()
    } else if (type === 'int') {
      return intVal.toString()
    }
    return hex
  } catch (e) {
    return '0'
  }
}

export const commonCvars = [
  't.MaxFPS',
  'r.ScreenPercentage',
  'r.DynamicRes.OperationMode',
  'r.DynamicRes.FrameTimeBudget',
  'r.VSync',
  'r.MotionBlurQuality',
  'r.BloomQuality',
  'r.DepthOfFieldQuality',
  'r.AntiAliasingMethod'
]