<script setup>
import BannerSkeleton from '../BannerSkeleton.vue'

const imageUrl = new URL(
  '@/assets/images/Services_Banner_Background.webp',
  import.meta.url
).href
</script>

<template>
  <BannerSkeleton :image-url="imageUrl">
    <template #banner-content>
      <div class="banner-content">
        <div class="gold-line" />
        <h2 class="banner-title">Our Services</h2>
      </div>
    </template>
  </BannerSkeleton>
</template>

<style scoped>
.banner-content {
  display: flex;
  flex-direction: column;
  gap: 0;
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
  color: #f2f2f2;
}

@media only screen and (max-width: 700px) {
  .banner-content {
    gap: 12px;
  }

  .gold-line {
    width: 32px;
    margin-bottom: 4px;
  }

  .banner-title {
    font-size: 40px;
  }
}
</style>
