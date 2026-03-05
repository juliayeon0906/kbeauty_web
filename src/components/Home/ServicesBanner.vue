<template>
  <div class="services-container">
    <div class="section-header">
      <p class="section-eyebrow">K-Beauty Halifax</p>
      <div class="gold-line" />
      <h2 class="service-header">Our Services</h2>
    </div>
    <div class="card-container">
      <router-link
        v-for="(service, index) in services"
        :key="index"
        to="/services"
        class="service-card"
      >
        <div
          class="service-bg"
          :style="{ backgroundImage: `url(${service.img})` }"
        />
        <div class="card-overlay" />
        <div class="card-content">
          <span class="card-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3 class="service-name">{{ service.name }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import img1 from '@/assets/images/services/Perm.webp'
import img2 from '@/assets/images/services/Cut.webp'
import img3 from '@/assets/images/services/Treatment.webp'
import img4 from '@/assets/images/services/Colour.webp'
import img5 from '@/assets/images/services/Styling.webp'

const services = computed(() => [
  { name: 'Perm', img: img1 },
  { name: 'Cut', img: img2 },
  { name: 'Treatment', img: img3 },
  { name: 'Colour', img: img4 },
  { name: 'Styling', img: img5 },
])
</script>

<style scoped>
/* ── Section ── */
.services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 5% 100px;
  width: 100%;
  gap: 48px;
}

/* ── Header ── */
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.section-eyebrow {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #ffbf00;
}

.gold-line {
  width: 36px;
  height: 2px;
  background-color: #ffbf00;
}

.service-header {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #1a1a1a;
}

/* ── Card Row ── */
.card-container {
  display: flex;
  gap: 8px;
  align-items: stretch;
  justify-content: center;
  width: 100%;
}

/* ── Card ── */
.service-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 52vh;
  flex: 1;
  max-width: 220px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
}

.service-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.service-card:hover .service-bg {
  transform: scale(1.07);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.18) 55%,
    rgba(0, 0, 0, 0.04) 100%
  );
  transition: background 0.4s ease;
}

.service-card:hover .card-overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.3) 60%,
    rgba(0, 0, 0, 0.06) 100%
  );
}

/* ── Card Content ── */
.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 0 16px 24px;
  width: 100%;
}

.card-number {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.24em;
  color: rgba(255, 191, 0, 0.65);
  transition: color 0.3s ease;
}

.service-name {
  color: #f2f2f2;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.service-card:hover .card-number {
  color: #ffbf00;
}

.service-card:hover .service-name {
  color: #ffbf00;
}

/* ── Desktop Responsive ── */
@media only screen and (max-width: 1400px) {
  .service-card {
    max-width: 200px;
  }
}

/* ── Mobile: 2-column grid layout ── */
@media only screen and (max-width: 1200px) {
  .services-container {
    padding: 64px 0 80px;
    gap: 36px;
  }

  .section-header {
    padding: 0 5%;
  }

  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
    width: 100%;
    padding: 0;
  }

  .service-card {
    height: 50vw;
    width: 100%;
    max-width: none;
    min-height: unset;
    flex: unset;
    align-items: flex-end;
  }

  /* Last card spans full width */
  .service-card:last-child {
    grid-column: 1 / -1;
    height: 38vw;
  }

  .card-content {
    padding: 0 20px 20px;
    align-items: flex-start;
  }

  .card-number {
    font-size: 9px;
  }

  .service-name {
    font-size: 14px;
    letter-spacing: 0.18em;
  }
}

@media only screen and (max-width: 600px) {
  .services-container {
    padding: 56px 0 72px;
    gap: 28px;
  }

  .service-header {
    font-size: 28px;
  }

  .card-container {
    gap: 3px;
  }

  .service-card {
    height: 54vw;
  }

  .service-card:last-child {
    height: 42vw;
  }

  .card-content {
    padding: 0 14px 16px;
    gap: 4px;
  }

  .service-name {
    font-size: 13px;
    letter-spacing: 0.14em;
  }
}
</style>
