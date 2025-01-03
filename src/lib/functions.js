/*
const isValid = {
  titleID: (titleID) => {
    return /^01[0-9A-Fa-f]{11}000$/.test(titleID)
  },
  BID: (bid) => {
    return /^[0-9A-Fa-f]{16}$/.test(bid)
  },
  config: (config) => {
    if (!config.cheatOptions || !Array.isArray(config.cheatOptions)) {
      console.error('❌ Invalid config: missing or invalid "cheatOptions"')
      return false
    }
    console.log('✅ Valid config')
    return true
  }
}
*/

// Function to parse the log file (for cheat generation)
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
// Function to generate cheats
export function generateCheats (parsedLogFile, config, overrideConfig) {
  let txt = []
  const warning = []
  let configuration = {}
  const instruction = '680F0000'

  for (const i of Object.keys(config)) {
    if (i === 'config') {
      configuration = config[i][0]
      if (overrideConfig) {
        configuration.categories = Boolean(overrideConfig.categories) || configuration.categories

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
        const isDefault = filtered.every(setting => {
          const [name, value] = Object.entries(setting)[0]
          const parsedSetting = parsedLogFile[name]

          if (!parsedSetting) {
            console.log(`Skipped: ${name} not found in user input`)
            return false // If a setting is missing, treat it as non-matching
          }

          switch (parsedSetting.type) {
            case 'int': {
              const configValue = value.slice(-parsedSetting.value.length)
              const matches = parsedSetting.value === configValue
              // console.log(`Comparing int for ${name}:`, { matches, parsed: parsedSetting.value, config: configValue });
              return matches
            }
            case 'float': {
              const configHex = value.split(' ')[1]
              const matches = parsedSetting.hexValue === `0x${configHex}`
              // console.log(`Comparing float for ${name}:`, { matches, parsed: parsedSetting.hexValue, config: `0x${configHex}` });
              return matches
            }
            default:
              console.log(`Unknown type for ${name}`)
              return false // Unknown types are treated as non-matching
          }
        })

        const cheatName = isDefault ? configuration.defaultIndicator + ' ' + config[i][index].name : config[i][index].name
        txt.push(`[${cheatName}]`)
        filtered.forEach(options => {
          const [name, value] = Object.entries(options)[0]
          if (parsedLogFile[name] && parsedLogFile[name].offset) {
            txt.push(`580F0000 ${parsedLogFile[name].main_offset.split('x')[1].padStart(8, '0')}`)
            txt.push(`${instruction} ${value.padStart(8, '0')}`)
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
