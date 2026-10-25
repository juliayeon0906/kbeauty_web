// Splits one CSV line into cells, honouring "quoted, cells" and "" escapes
export const parseCsvLine = (line) => {
  const cells = []
  let cell = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (inQuotes) {
      if (char === '"' && line[i + 1] === '"') {
        cell += '"'
        i++
      } else if (char === '"') {
        inQuotes = false
      } else {
        cell += char
      }
    } else if (char === '"') {
      inQuotes = true
    } else if (char === ',') {
      cells.push(cell)
      cell = ''
    } else {
      cell += char
    }
  }
  cells.push(cell)
  return cells.map((value) => value.trim())
}

// Data rows of a CSV as arrays of cells (header row dropped)
export const parseCsvRows = (csv) =>
  csv.split(/\r?\n/).slice(1).map(parseCsvLine)

// Fetches a Google Sheets "Publish to web" CSV, bypassing the browser cache
export async function fetchCsv(url, label) {
  if (!url) {
    throw new Error(`${label} CSV URL is not set`)
  }

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`${label} sheet returned ${response.status}`)
  }
  return response.text()
}
