<template>
  <div class="page-wrapper" :style="{ backgroundImage: `url(${stylistBg})` }">
    <div class="stylists-grid">
      <div
        v-for="(stylist, index) in stylists"
        :key="`${index}-${stylist.name}`"
        class="stylist-card"
        :class="{ reverse: index % 2 !== 0 }"
      >
        <div class="image-wrap">
          <img
            v-if="imageSrc(stylist)"
            :src="imageSrc(stylist)"
            :alt="stylist.name"
            class="stylist-image"
            loading="lazy"
            referrerpolicy="no-referrer"
            @error="onImageError(stylist)"
          />
          <div v-else class="image-placeholder" aria-hidden="true">
            {{ stylist.name.charAt(0) }}
          </div>
        </div>
        <div class="info-wrap">
          <div class="gold-line" />
          <h3 class="stylist-name">{{ stylist.name }}</h3>
          <p v-if="stylist.position" class="stylist-position">
            {{ stylist.position }}
          </p>
          <template v-if="stylist.description">
            <div class="divider" />
            <p class="stylist-desc">{{ stylist.description }}</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { STYLISTS_CSV_URL, DEFAULT_STYLISTS } from '@/constants'
import { fetchStylists } from '@/utils/stylists'
import stylistBg from '@/assets/images/STYLISTS/Stylist_background_image.webp'

const stylists = ref(DEFAULT_STYLISTS)
// Image URLs that failed to load (e.g. a Drive photo that isn't shared publicly)
const brokenImages = ref(new Set())

// Sheet photo → bundled photo of the same stylist → monogram placeholder
const imageSrc = ({ image, fallbackImage }) => {
  if (image && !brokenImages.value.has(image)) return image
  if (fallbackImage && !brokenImages.value.has(fallbackImage)) {
    return fallbackImage
  }
  return ''
}

const onImageError = (stylist) => {
  brokenImages.value.add(imageSrc(stylist))
}

onMounted(async () => {
  if (!STYLISTS_CSV_URL) return
  try {
    stylists.value = await fetchStylists()
  } catch (error) {
    console.warn('Using default stylists:', error)
  }
})
</script>

<style scoped>
.page-wrapper {
  padding: 80px 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.stylists-grid {
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
}

/* ── Card ── */
.stylist-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f2f2f2;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  overflow: hidden;
}

.stylist-card.reverse {
  direction: rtl;
}
.stylist-card.reverse > * {
  direction: ltr;
}

/* ── Image ── */
.image-wrap {
  overflow: hidden;
  aspect-ratio: 3 / 4;
  /* shown while a photo loads, so the card keeps its shape */
  background-color: #e4e4e4;
}

.stylist-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.6s ease;
}

.stylist-card:hover .stylist-image {
  transform: scale(1.04);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2b2b2b;
  color: #ffbf00;
  font-family: 'Noto Sans', serif;
  font-size: clamp(64px, 10vw, 120px);
  font-weight: 700;
  text-transform: uppercase;
}

/* ── Info ── */
.info-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 56px;
}

.gold-line {
  width: 40px;
  height: 3px;
  background-color: #ffbf00;
  margin-bottom: 24px;
}

.stylist-name {
  font-family: 'Noto Sans', serif;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.stylist-position {
  font-family: 'Noto Sans', serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 28px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin-bottom: 28px;
}

.stylist-desc {
  font-family: 'Noto Sans', serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.85;
  color: #444;
  white-space: pre-line;
}

/* ── Tablet ── */
@media only screen and (max-width: 1024px) {
  .stylist-card {
    grid-template-columns: 1fr;
    direction: ltr !important;
  }
  .stylist-card > * {
    direction: ltr;
  }

  .image-wrap {
    aspect-ratio: 16 / 9;
  }

  .info-wrap {
    padding: 40px 36px;
  }

  .stylist-name {
    font-size: 28px;
  }
}

/* ── Mobile ── */
@media only screen and (max-width: 600px) {
  .page-wrapper {
    padding: 50px 0;
  }

  .stylists-grid {
    gap: 40px;
    padding: 0 4%;
  }

  .image-wrap {
    aspect-ratio: 4 / 3;
  }

  .info-wrap {
    padding: 28px 24px;
  }

  .stylist-name {
    font-size: 22px;
  }

  .stylist-position {
    font-size: 11px;
  }

  .stylist-desc {
    font-size: 14px;
  }
}
</style>
