<template>
  <div class="menu-container">
    <div
      v-for="{ image, index } in MENU_OPTIONS"
      :key="index"
      class="menu-item"
    >
      <img :src="image" alt="menu" />
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
  gap: 5%;
  justify-content: center;
  padding-right: 5%;
  padding-left: 5%;
  position: relative;
  margin-top: 60vh;
  padding-bottom: 20px;
}

.menu-item {
  background-color: #2b2b2b;
  opacity: 0.95;
  padding: 5% 3% 5%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: start;
  transition: transform ease 0.5s;
}

.menu-item:hover {
  transform: scale(1.05);
}

@media only screen and (max-width: 1200px) {
  .menu-container {
    flex-direction: column;
    gap: 15px;
  }
  .menu-item {
    height: fit-content;
  }
  img {
    width: 60%;
  }
}

@media only screen and (min-height: 1000px) {
  .menu-container {
    margin-top: 40vh;
  }
}

@media only screen and (max-height: 850px) {
  .menu-container {
    margin-top: 70vh;
  }
}

@media only screen and (max-height: 650px) {
  .menu-container {
    margin-top: 110vh;
  }
}
</style>
