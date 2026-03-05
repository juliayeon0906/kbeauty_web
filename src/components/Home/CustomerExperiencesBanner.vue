<script setup>
import Carousel from '@/components/Carousel.vue'
import { REVIEWS } from '@/constants'

const reviews = REVIEWS
</script>

<template>
  <div class="reviews-section">
    <div class="reviews-inner">
      <div class="section-label">
        <div class="gold-line" />
        <span class="label-text">Client Experiences</span>
        <h2 class="section-title">What Our Clients Say</h2>
      </div>
      <div class="quote-mark">"</div>
      <div class="carousel-wrap">
        <Carousel :items="reviews" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.reviews-section {
  width: 100%;
  background-color: #2b2b2b;
  display: flex;
  justify-content: center;
  padding: 90px 5% 100px;
  margin-bottom: 80px;
}

.reviews-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  max-width: 760px;
  width: 100%;
  text-align: center;
}

.section-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.gold-line {
  width: 36px;
  height: 2px;
  background-color: #ffbf00;
}

.label-text {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #ffbf00;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #fff;
  margin-top: 4px;
}

.quote-mark {
  font-size: 96px;
  line-height: 0.6;
  color: #ffbf00;
  font-family: Georgia, serif;
  opacity: 0.6;
  margin-bottom: 32px;
  user-select: none;
}

.carousel-wrap {
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .reviews-section {
    padding: 70px 6% 80px;
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 26px;
  }

  .quote-mark {
    font-size: 72px;
  }
}
</style>
