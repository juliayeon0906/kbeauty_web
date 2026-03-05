<template>
  <div class="menu-container">
    <div
      v-for="(option, index) in MENU_OPTIONS"
      :key="index"
      class="menu-item"
    >
      <img :src="option.image" alt="menu" class="menu-img" />
    </div>
  </div>
</template>

<script setup>
import { MENU_OPTIONS } from '@/constants'
</script>

<style scoped>
.menu-container {
  display: flex;
  width: 100%;
  gap: 24px;
  justify-content: center;
  padding: 0 5% 100px;
  margin-top: -100px;
  position: relative;
  z-index: 2;
}

.menu-item {
  flex: 1;
  max-width: 380px;
  background-color: #2b2b2b;
  padding: 40px 28px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.menu-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45);
}

.menu-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

@media only screen and (max-width: 1200px) {
  .menu-container {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0 5% 80px;
    margin-top: -80px;
  }

  .menu-item {
    width: 100%;
    max-width: 560px;
    padding: 32px 24px;
  }
}

@media only screen and (max-width: 600px) {
  .menu-container {
    padding: 0 4% 60px;
    gap: 16px;
    margin-top: -60px;
  }

  .menu-item {
    padding: 24px 16px;
  }
}
</style>
