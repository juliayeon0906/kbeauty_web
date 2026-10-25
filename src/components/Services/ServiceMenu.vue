<template>
  <div class="menu-container">
    <section
      v-for="category in priceMenu"
      :key="category.title"
      class="menu-item"
    >
      <header class="menu-header">
        <h2 class="menu-title">{{ category.title }}</h2>
        <p v-if="category.subtitle" class="menu-subtitle">
          {{ category.subtitle }}
        </p>
      </header>
      <div class="menu-divider" />

      <ul v-for="(group, g) in category.groups" :key="g" class="menu-group">
        <li
          v-for="(row, r) in group"
          :key="r"
          :class="['menu-row', `menu-row--${row.type}`]"
        >
          <span class="menu-label">
            <span class="menu-label-text">{{ row.item }}</span>
          </span>
          <template v-if="row.type !== 'heading'">
            <span v-if="row.type === 'note'" class="menu-price">
              {{ noteParts(row.price).head }}
              <span class="menu-gold">{{ noteParts(row.price).last }}</span>
            </span>
            <span v-else class="menu-price">{{ row.price }}</span>
          </template>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { PRICE_MENU_CSV_URL, DEFAULT_PRICE_MENU } from '@/constants'
import { fetchPriceMenu } from '@/utils/priceMenu'

const priceMenu = ref(DEFAULT_PRICE_MENU)

// "*By consultation only" → last word ("only") is shown in gold
const noteParts = (text) => {
  const split = text.lastIndexOf(' ')
  if (split === -1) return { head: '', last: text }
  return { head: text.slice(0, split), last: text.slice(split + 1) }
}

onMounted(async () => {
  if (!PRICE_MENU_CSV_URL) return
  try {
    priceMenu.value = await fetchPriceMenu()
  } catch (error) {
    console.warn('Using default price menu:', error)
  }
})
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;
  justify-content: center;
  padding: 0 5% 100px;
  margin-top: -100px;
  position: relative;
  z-index: 2;
}

/* Height follows the rows, so adding/removing services in the sheet just
   grows or shrinks the card; a 4th category wraps onto a centred new row */
.menu-item {
  flex: 1 1 300px;
  max-width: 380px;
  min-width: 0;
  background-color: #2b2b2b;
  padding: 40px 28px;
  display: flex;
  flex-direction: column;
  color: #f2f2f2;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.menu-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45);
}

/* ── Header ── */
.menu-header {
  text-align: center;
}

.menu-title {
  font-size: clamp(24px, 2.4vw, 28px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #f2f2f2;
}

.menu-subtitle {
  margin-top: 4px;
  font-size: 15px;
  font-weight: 500;
  color: #f2f2f2;
}

.menu-divider {
  height: 1px;
  background-color: #ffbf00;
  margin: 20px 0 36px;
}

/* ── Rows ── */
.menu-group + .menu-group {
  margin-top: 24px;
}

.menu-row {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.45;
}

.menu-row + .menu-row {
  margin-top: 8px;
}

/* Dot leader runs along the last text line; the label text and price mask it
   with the card colour, so a wrapped name gets dots right after its last word */
.menu-row:not(.menu-row--heading)::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.4em;
  border-bottom: 2px dotted rgba(242, 242, 242, 0.75);
}

.menu-label {
  min-width: 0;
  padding-right: 24px;
  text-transform: uppercase;
}

.menu-label-text,
.menu-price {
  position: relative;
  background-color: #2b2b2b;
}

.menu-label-text {
  padding-right: 6px;
}

.menu-price {
  flex-shrink: 0;
  padding-left: 6px;
  /* keep "M $90+  W $110+" spacing and never break a price */
  white-space: pre;
  text-align: right;
}

.menu-row--heading .menu-label {
  font-weight: 700;
}

.menu-row--note .menu-price {
  font-weight: 600;
  white-space: nowrap;
}

.menu-gold {
  color: #ffbf00;
}

/* ── Responsive ── */
@media only screen and (max-width: 1200px) {
  .menu-container {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 20px;
    padding: 0 5% 80px;
    margin-top: -80px;
  }

  .menu-item {
    flex: none;
    width: 100%;
    max-width: 560px;
    padding: 32px 24px;
  }
}

@media only screen and (max-width: 600px) {
  .menu-container {
    padding: 0 4% 60px;
    gap: 16px;
    margin-top: -60px;
  }

  .menu-item {
    padding: 24px 16px;
  }

  .menu-subtitle {
    font-size: 14px;
  }

  .menu-divider {
    margin: 16px 0 28px;
  }

  .menu-row {
    font-size: 14px;
  }

  .menu-group + .menu-group {
    margin-top: 20px;
  }
}
</style>
