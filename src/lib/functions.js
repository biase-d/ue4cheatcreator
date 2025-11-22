export function parseLogFile (logFile) {
  const parsed = {}
  parsed.uploadedFile = 'log'
  logFile = logFile.trim().split(/\n+/)
  logFile.forEach((data) => {
    try {
      data = data.split(', ')
      const cvar = data[0]
      data = {
        main_offset: data[1].split(': ')[1].split(' ')[0],
        offset: [data[1].split(': ')[1].split(' ')[1], data[1].split(': ')[1].split(' ')[2]],
        type: data[2].split(': ')[1].split(' ')[0],
        value: data[2].split(': ')[1].split(' ')[1],
        hexValue: data[2].split(': ')[1].split(' ')[3]
      }
      parsed[cvar] = data
    } catch (err) {
      parsed.engineVersion = data
    }
  })
  return parsed
}

export function generateCheats (parsedLogFile, config, overrideConfig) {
  let txt = []
  const warning = []
  let configuration = {}
  const instruction = '680F0000'

  const keys = Object.keys(config);

  for (const i of keys) {
    if (i === 'config') {
      configuration = config[i][0]
      if (overrideConfig) {
        configuration.categories = Boolean(overrideConfig.categories)
        configuration.defaultIndicator = overrideConfig.defaultIndicator || configuration.defaultIndicator
      }
      continue
    }

    if (configuration.categories) {
      txt.push(`[--SectionStart:${i}--]`)
      txt.push('00000000 00000000 00000000')
    }

    config[i].forEach((setting, index) => {
      const filtered = setting.options.filter(option => {
        const [name] = Object.entries(option)[0]
        return parsedLogFile[name]
      })

      if (filtered.length > 0) {
        const cheatName = config[i][index].name
        txt.push(`[${cheatName}]`)
        
        filtered.forEach(options => {
          const [name, value] = Object.entries(options)[0]
          // Value comes in as "HEX HEX" from the editor export
          const actualHex = value.split(' ')[0]; 

          if (parsedLogFile[name] && parsedLogFile[name].offset) {
            txt.push(`580F0000 ${parsedLogFile[name].main_offset.split('x')[1].padStart(8, '0')}`)
            txt.push(`${instruction} ${actualHex.padStart(8, '0')}`)
          }
        })
      } else {
        warning.push(i)
      }
    })

    if (configuration.categories) {
      txt.push(`[--SectionEnd:${i}--]`)
      txt.push('00000000 00000000 00000000')
    }
  }

  txt = txt.join('\n')
  return {
    cheats: txt,
    warning
  }
}