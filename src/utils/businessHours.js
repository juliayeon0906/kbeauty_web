import { BUSINESS_HOURS_CSV_URL } from '@/constants'
import { fetchCsv, parseCsvRows } from '@/utils/csv'

export const parseBusinessHours = (csv) =>
  parseCsvRows(csv) // header row: Day, Hours
    .filter(([day, hour]) => day && hour)
    // "10AM - 7PM" typed in the sheet → "10AM – 7PM" to match the site's style
    .map(([day, hour]) => ({ day, hour: hour.replace(/\s+-\s+/g, ' – ') }))

export async function fetchBusinessHours() {
  const hours = parseBusinessHours(
    await fetchCsv(BUSINESS_HOURS_CSV_URL, 'Business hours')
  )
  if (!hours.length) {
    throw new Error('Business hours sheet has no rows')
  }
  return hours
}
