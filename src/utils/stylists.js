import { STYLISTS_CSV_URL, DEFAULT_STYLISTS } from '@/constants'
import { fetchCsv, parseCsvRows } from '@/utils/csv'

// Google Drive share links ("…/file/d/<id>/view", "…open?id=<id>") point to a
// viewer page, not an image, so turn them into a direct, resized image link.
// Google Photos share links open an album page that can't be embedded, so
// they're ignored (the bundled photo or monogram is shown instead).
// Any other https link is used as is.
export const toImageUrl = (link) => {
  if (!link || /photos\.app\.goo\.gl|photos\.google\.com/.test(link)) return ''
  const driveId = link.includes('drive.google.com')
    ? link.match(/\/d\/([\w-]+)|[?&]id=([\w-]+)/)
    : null
  if (driveId) {
    return `https://lh3.googleusercontent.com/d/${driveId[1] || driveId[2]}=w1000`
  }
  return /^https?:\/\//.test(link) ? link : ''
}

// Bundled photo of a stylist with the same name, used when the sheet has no
// photo or the photo link is broken
const bundledImage = (name) =>
  DEFAULT_STYLISTS.find((s) => s.name.toLowerCase() === name.toLowerCase())
    ?.image ?? ''

// Sheet columns: Name, Position, Description, Photo (see docs/stylists.md)
export const parseStylists = (csv) =>
  parseCsvRows(csv)
    .filter(([name]) => name)
    .map(([name, position = '', description = '', photo = '']) => {
      const fallbackImage = bundledImage(name)
      return {
        name,
        position,
        description,
        image: toImageUrl(photo) || fallbackImage,
        fallbackImage,
      }
    })

export async function fetchStylists() {
  const stylists = parseStylists(await fetchCsv(STYLISTS_CSV_URL, 'Stylists'))
  if (!stylists.length) {
    throw new Error('Stylists sheet has no rows')
  }
  return stylists
}
