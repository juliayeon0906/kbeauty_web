import { PRICE_MENU_CSV_URL } from '@/constants'
import { fetchCsv, parseCsvRows } from '@/utils/csv'

// "" → section heading, "*By consultation only" → note, anything else → price
const rowType = (price) => {
  if (!price) return 'heading'
  if (price.startsWith('*')) return 'note'
  return 'item'
}

// Sheet columns: Category, Subtitle, Item, Price (see docs/prices.md).
// Returns [{ title, subtitle, groups: [[{ item, price, type }]] }]
export const parsePriceMenu = (csv) => {
  const menu = []
  let category = null
  let startNewGroup = true

  for (const [title = '', subtitle = '', item = '', price = ''] of parseCsvRows(
    csv
  )) {
    // A blank Category cell means "same as the row above"
    if (title && title !== category?.title) {
      category = { title, subtitle: '', groups: [] }
      menu.push(category)
      startNewGroup = true
    }
    if (!category) continue
    if (subtitle && !category.subtitle) category.subtitle = subtitle

    // A fully blank row separates groups; repeated blanks collapse into one gap
    if (!title && !subtitle && !item && !price) {
      startNewGroup = true
      continue
    }
    if (!item) continue

    if (startNewGroup) {
      category.groups.push([])
      startNewGroup = false
    }
    category.groups.at(-1).push({ item, price, type: rowType(price) })
  }

  // Drop categories whose rows were all deleted
  return menu.filter((category) => category.groups.length)
}

export async function fetchPriceMenu() {
  const menu = parsePriceMenu(await fetchCsv(PRICE_MENU_CSV_URL, 'Price menu'))
  if (!menu.length) {
    throw new Error('Price menu sheet has no rows')
  }
  return menu
}
