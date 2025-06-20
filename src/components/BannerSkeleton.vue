<script setup>
import { defineProps } from 'vue'

defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="banner">
    <img :src="imageUrl" alt="banner background" class="banner-image" />
    <div class="banner-items">
      <slot name="banner-content"></slot>
    </div>
  </div>
</template>
<style scoped>
.banner {
  color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 620px;
  width: 100%;
  overflow: hidden;
}
.banner-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(30%);
  object-position: center center;
  overflow: hidden;
}
.banner-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1;
}

@media only screen and (max-width: 700px) {
  .banner {
    padding: 0 40px;
  }
}
</style>
