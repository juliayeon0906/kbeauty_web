<template>
  <div
    class="page-wrapper"
    :style="{ backgroundImage: `url(${stylistBg})` }"
  >
    <div class="stylists-grid">
      <div
        v-for="(stylist, index) in STYLISTS_INFO[0].STYLISTS"
        :key="index"
        class="stylist-card"
        :class="{ reverse: index % 2 !== 0 }"
      >
        <div class="image-wrap">
          <img :src="stylist.image" :alt="stylist.name" class="stylist-image" />
        </div>
        <div class="info-wrap">
          <div class="gold-line" />
          <h3 class="stylist-name">{{ stylist.name }}</h3>
          <p class="stylist-position">{{ stylist.position }}</p>
          <div class="divider" />
          <p class="stylist-desc">{{ stylist.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { STYLISTS_INFO } from '@/constants.js'
import stylistBg from '@/assets/images/STYLISTS/Stylist_background_image.webp'
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
