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
    <div class="banner-overlay" />
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
  height: 680px;
  width: 100%;
  overflow: hidden;
}
.banner-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  object-position: center center;
}
.banner-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.55) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
}
.banner-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2;
  width: 100%;
  padding: 0 8%;
}

@media only screen and (max-width: 700px) {
  .banner {
    height: 100svh;
    padding: 0;
    /* Push content to bottom for cinematic feel */
    align-items: flex-end;
    justify-content: flex-start;
    padding-bottom: 64px;
    padding-top: 70px; /* mobile navbar */
  }

  .banner-items {
    padding: 0 6%;
  }

  .banner-overlay {
    /* Gradient from bottom — text readable against dark base */
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.82) 0%,
      rgba(0, 0, 0, 0.36) 48%,
      rgba(0, 0, 0, 0.08) 100%
    );
  }
}
</style>
