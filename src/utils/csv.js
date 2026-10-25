// Parses a whole CSV document into rows of trimmed cells, honouring
// "quoted, cells", "" escapes and line breaks inside quoted cells
// (Alt+Enter in a Google Sheets cell)
export const parseCsv = (csv) => {
  const rows = []
  let row = []
  let cell = ''
  let inQuotes = false

  const endCell = () => {
    row.push(cell.trim())
    cell = ''
  }
  const endRow = () => {
    endCell()
    rows.push(row)
    row = []
  }

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i]
    if (inQuotes) {
      if (char === '"' && csv[i + 1] === '"') {
        cell += '"'
        i++
      } else if (char === '"') {
        inQuotes = false
      } else if (char !== '\r') {
        cell += char
      }
    } else if (char === '"') {
      inQuotes = true
    } else if (char === ',') {
      endCell()
    } else if (char === '\n') {
      endRow()
    } else if (char !== '\r') {
      cell += char
    }
  }
  if (cell || row.length) endRow()
  return rows
}

// Data rows of a CSV as arrays of cells (header row dropped)
export const parseCsvRows = (csv) => parseCsv(csv).slice(1)

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
