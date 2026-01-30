<template>
  <div class="home-wrapper">
    <img :src="backgroundImage" alt="background" class="background-image" />
    <div class="content-layer">
      <Banner />
      <DescriptionsBanner />
      <ServicesBanner />
      <CustomerExperiencesBanner />
      <BusinessInfoBanner />
    </div>
  </div>
</template>

<script setup>
import backgroundImage from '@/assets/images/Landing_page_background_image.webp'
import Banner from '@/components/Home/Banner.vue'
import DescriptionsBanner from '@/components/Home/DescriptionsBanner.vue'
import ServicesBanner from '@/components/Home/ServicesBanner.vue'
import CustomerExperiencesBanner from '@/components/Home/CustomerExperiencesBanner.vue'
import BusinessInfoBanner from '@/components/Home/BusinessInfoBanner.vue'
</script>

<style>
.home-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-layer {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
}
</style>
