<script setup>
import BannerSkeleton from '../BannerSkeleton.vue'

const imageUrl = new URL(
  '@/assets/images/Services_Banner_Background.webp',
  import.meta.url
).href
</script>

<template>
  <BannerSkeleton :image-url="imageUrl" class="service-banner">
    <template #banner-content>
      <h2 class="banner-title px-6 z-10">Our Services</h2>
    </template>
  </BannerSkeleton>
</template>

<style scoped>
.banner-title {
  font-size: 64px;
}
.service-banner {
  position: absolute;
}
@media only screen and (max-width: 370px) {
  .banner-title {
    font-size: 48px;
  }
}
</style>
