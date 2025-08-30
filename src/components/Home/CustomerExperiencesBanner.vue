<script setup>
import Carousel from '@/components/Carousel.vue'
import { REVIEWS } from '@/constants'

const reviews = REVIEWS
</script>

<template>
  <div class="banner-container">
    <div class="exterior-banner">
      <div class="interior-banner">
        <div
          class="content-container flex flex-col justify-center items-center w-full"
        >
          <div class="header-container pt-[55px] mb-[20px]">
            <h2 class="header-text">Experience At K-Beauty</h2>
          </div>
          <div class="w-full">
            <Carousel :items="reviews" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  min-height: 500px;
  display: flex;
  width: 100%;
  margin-bottom: 40px;
}
.exterior-banner {
  width: 100%;
  background-color: #3f3f3f;
  display: flex;
  justify-content: center;
  align-items: center;
}
.interior-banner {
  background-color: #2b2b2b;
  max-width: 810px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-container {
  width: 470px;
  display: flex;
}
.header-text {
  width: 270px;
  font-size: 32px;
  color: #ffbf00;
}
@media only screen and (max-width: 700px) {
  .interior-banner {
    width: 100%;
  }
  .header-container {
    width: 100%;
    padding: 0 40px;
  }
}
</style>
