<template>
  <div class="gallery-page">
    <!-- Header -->
    <div class="gallery-header">
      <p class="gallery-eyebrow">K-Beauty Halifax</p>
      <h1 class="gallery-title">Gallery</h1>
      <div class="gold-rule">
        <span class="gold-dot" />
      </div>
      <p class="gallery-subtitle">{{ images.length }} photos of our work</p>
    </div>

    <!-- Masonry Grid -->
    <div class="gallery-masonry">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        :class="{ 'gallery-item--portrait': isPortrait(index) }"
        @click="openLightbox(index)"
      >
        <img
          :src="image"
          alt="K-Beauty Gallery"
          class="gallery-img"
          loading="lazy"
        />
        <div class="gallery-overlay">
          <svg
            class="gallery-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <transition name="lb-fade">
        <div
          v-if="lightboxIndex !== null"
          class="lightbox"
          @click.self="closeLightbox"
        >
          <button class="lb-close" aria-label="Close" @click="closeLightbox">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button
            class="lb-nav lb-prev"
            aria-label="Previous"
            @click="prevImage"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div class="lb-img-wrap">
            <img
              :src="images[lightboxIndex]"
              class="lb-img"
              alt="Gallery image"
            />
          </div>
          <button class="lb-nav lb-next" aria-label="Next" @click="nextImage">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div class="lb-counter">
            {{ lightboxIndex + 1 }} / {{ images.length }}
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const images = ref([])
const lightboxIndex = ref(null)

onMounted(() => {
  const imageModules = import.meta.glob('@/assets/images/GALLERY/*.webp', {
    eager: true,
  })
  images.value = Object.entries(imageModules)
    .map(([path, mod]) => ({ name: path.split('/').pop(), url: mod.default }))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    .map((item) => item.url)

  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})

const isPortrait = (index) => index % 5 === 0

const openLightbox = (index) => {
  lightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxIndex.value = null
  document.body.style.overflow = ''
}

const prevImage = () => {
  lightboxIndex.value =
    (lightboxIndex.value - 1 + images.value.length) % images.value.length
}

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % images.value.length
}

const handleKey = (e) => {
  if (lightboxIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}
</script>

<style scoped>
/* ── Page ── */
.gallery-page {
  min-height: 100vh;
  background-color: #f2f2f2;
  padding-bottom: 100px;
}

/* ── Header ── */
.gallery-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 110px 5% 64px;
  text-align: center;
}

.gallery-eyebrow {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #ffbf00;
  margin-bottom: 16px;
}

.gallery-title {
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1;
}

.gold-rule {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.gold-rule::before,
.gold-rule::after {
  content: '';
  display: block;
  width: 48px;
  height: 1px;
  background-color: #ffbf00;
}

.gold-dot {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #ffbf00;
}

.gallery-subtitle {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #aaa;
}

/* ── Grid ── */
.gallery-masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  grid-auto-flow: dense;
  gap: 6px;
  padding: 0 3%;
}

.gallery-item {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: #111;
}

.gallery-item--portrait {
  grid-row: span 2;
}

.gallery-img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition:
    transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.45s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.07);
  opacity: 0.6;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-icon {
  width: 40px;
  height: 40px;
  color: #fff;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
}

/* ── Lightbox ── */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lb-img-wrap {
  max-width: 88vw;
  max-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lb-img {
  max-width: 100%;
  max-height: 88vh;
  object-fit: contain;
  display: block;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);
}

.lb-close {
  position: fixed;
  top: 24px;
  right: 28px;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  z-index: 10000;
}

.lb-close svg {
  width: 18px;
  height: 18px;
}

.lb-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lb-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  z-index: 10000;
}

.lb-nav svg {
  width: 22px;
  height: 22px;
}

.lb-nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lb-prev {
  left: 20px;
}

.lb-next {
  right: 20px;
}

.lb-counter {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
}

/* ── Lightbox Transition ── */
.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}

/* ── Responsive ── */

/* Navbar switches to mobile (70px) at 1250px */
@media only screen and (max-width: 1250px) {
  .gallery-header {
    padding: 80px 5% 56px;
  }
}

@media only screen and (max-width: 900px) {
  .gallery-title {
    font-size: 44px;
  }

  .gallery-header {
    padding: 76px 5% 44px;
  }

  .gallery-masonry {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 260px;
  }

  .lb-prev {
    left: 10px;
  }
  .lb-next {
    right: 10px;
  }
}

@media only screen and (max-width: 560px) {
  .gallery-title {
    font-size: 34px;
  }

  .gallery-header {
    padding: 72px 5% 36px;
  }

  .gallery-masonry {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
    gap: 4px;
    padding: 0 2%;
  }

  .gallery-item--portrait {
    grid-row: span 2;
  }

  .lb-img-wrap {
    max-width: 96vw;
  }

  .lb-nav {
    width: 40px;
    height: 40px;
  }
}
</style>
