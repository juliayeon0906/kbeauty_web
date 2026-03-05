<template>
  <BannerSkeleton :image-url="imageUrl">
    <template #banner-content>
      <div class="hero-content">
        <div class="gold-line" />
        <h2 class="banner-title">K-Beauty<br />Hair Salon</h2>
        <p class="banner-subtitle">Find the beauty you deserve</p>
        <router-link to="/reservation">
          <button class="resBtn">Book an appointment</button>
        </router-link>
      </div>
    </template>
  </BannerSkeleton>
</template>

<script setup>
import BannerSkeleton from '@/components/BannerSkeleton.vue'

const imageUrl = new URL('@/assets/images/HERO_BANNER.webp', import.meta.url)
  .href
</script>

<style scoped>
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 560px;
}

.gold-line {
  width: 48px;
  height: 3px;
  background-color: #ffbf00;
  margin-bottom: 24px;
}

.banner-title {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.1;
  margin-bottom: 20px;
}

.banner-subtitle {
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #d9d9d9;
  margin-bottom: 36px;
}

.resBtn {
  display: inline-block;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  padding: 14px 30px;
  background-color: #ffbf00;
  border-radius: 2px;
  color: #1a1a1a;
  border: none;
  box-shadow: 0 2px 12px rgba(255, 191, 0, 0.4);
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.resBtn:hover {
  background-color: #ff9d00;
  color: #fff;
  box-shadow: 0 4px 20px rgba(255, 157, 0, 0.5);
}

@media only screen and (max-width: 700px) {
  .hero-content {
    max-width: 100%;
  }

  .gold-line {
    width: 36px;
    height: 2px;
    margin-bottom: 18px;
  }

  .banner-title {
    font-size: 42px;
    line-height: 1.05;
    margin-bottom: 14px;
  }

  .banner-subtitle {
    font-size: 11px;
    letter-spacing: 0.2em;
    margin-bottom: 28px;
  }

  .resBtn {
    padding: 12px 28px;
    font-size: 10px;
  }
}

@media only screen and (max-width: 370px) {
  .banner-title {
    font-size: 34px;
  }
}
</style>
