<template>
  <BannerSkeleton :image-url="imageUrl">
    <template #banner-content>
      <div class="w-full">
        <h2 class="banner-title">K-Beauty<br />Hair Salon</h2>
        <h5 class="banner-subtitle">Find the beauty you deserve</h5>
        <router-link to="/reservation">
          <button class="resBtn px-6 py-4 mt-4">Book an appointment</button>
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
.banner-title {
  font-size: 48px;
}
.banner-subtitle {
  font-size: 36px;
  font-weight: 300;
}
.resBtn {
  text-transform: uppercase;
  font-size: 15px;
  height: 54px;
  background-color: #ffbf00;
  border-radius: 5px;
  color: #2b2b2b;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
}
.resBtn:hover {
  background-color: #ff9d00;
  color: #f2f2f2;
}

@media only screen and (max-width: 370px) {
  .banner-title {
    font-size: 30px;
  }
  .banner-subtitle {
    font-size: 24px;
    font-weight: 300;
  }
  .resBtn {
    font-size: 10px;
  }
}
</style>
