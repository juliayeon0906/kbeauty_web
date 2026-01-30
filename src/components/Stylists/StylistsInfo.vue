<template>
  <div
    class="info-card-container my-10"
    :style="{ backgroundImage: `url(${stylistBg})` }"
  >
    <div
      v-for="(stylist, index) in STYLISTS_INFO[0].STYLISTS"
      :key="index"
      class="stylist-info-card"
    >
      <img :src="stylist.image" alt="Stylist Image" class="stylist-image" />
      <div class="stylist-info px-[5%]">
        <div class="info-title flex gap-[20px] items-center">
          <h3 class="stylist-name font-bold text-[32px]">{{ stylist.name }}</h3>
          <p class="stylist-position font-light text-[24px]">
            {{ stylist.position }}
          </p>
        </div>
        <p class="stylist-desc font-medium text-[17px]">
          {{ stylist.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { STYLISTS_INFO } from '@/constants.js'
import stylistBg from '@/assets/images/STYLISTS/Stylist_background_image.webp'
</script>
<style scoped>
.info-card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.stylist-info-card {
  height: 70vh;
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 6px;
  background-color: #f2f2f2;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}
.stylist-info {
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans', serif;
  font-style: normal;
  justify-content: center;
  gap: 15px;
  min-height: fit-content;
}
.stylist-image {
  max-height: 100%;
  object-fit: contain;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

@media only screen and (max-width: 1250px) {
  .stylist-info-card {
    flex-direction: column;
    gap: 5%;
    min-height: 70vh;
    height: auto;
    padding: 10px;
  }
  .stylist-image {
    height: 50vh;
    margin-bottom: 10px;
  }
  .stylist-name {
    font-size: 25px;
  }
  .stylist-position {
    font-size: 20px;
  }
  .stylist-desc {
    font-size: 18px;
  }
}

@media only screen and (max-width: 768px) {
  .stylist-name {
    font-size: 20px;
  }
  .stylist-position {
    font-size: 15px;
  }
  .stylist-desc {
    font-size: 14px;
  }
}
</style>
