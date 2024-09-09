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
