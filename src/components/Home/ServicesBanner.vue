<template>
  <div class="services-container">
    <h2
      class="service-header p-6 text-[48px] text-[#FFBF00] drop-shadow-[0.5px_0.5px_rgba(0,0,0,0.7)]"
    >
      Our services
    </h2>
    <div class="card-container">
      <router-link
        v-for="(service, index) in services"
        :key="index"
        :to="'/services'"
        class="service-card"
      >
        <div
          class="service-bg"
          :style="{ backgroundImage: `url(${service.img})` }"
        ></div>
        <h3 class="service-name">{{ service.name }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import img1 from '@/assets/images/services/Perm.webp'
import img2 from '@/assets/images/services/Cut.webp'
import img3 from '@/assets/images/services/Treatment.webp'
import img4 from '@/assets/images/services/Colour.webp'
import img5 from '@/assets/images/services/Styling.webp'

const services = computed(() => {
  return [
    { name: 'perm', img: img1 },
    { name: 'cut', img: img2 },
    { name: 'treatment', img: img3 },
    { name: 'colour', img: img4 },
    { name: 'styling', img: img5 },
  ]
})
</script>

<style scoped>
.services-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  margin-bottom: 40px;
}
.card-container {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.service-card {
  display: flex;
  position: relative;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  background-size: cover;
  min-height: 50vh;
  min-width: 15vw;
  border-radius: 4.5px;
  overflow: hidden;
  transition: transform 0.5s ease;
  text-decoration: none;
}
.service-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(50%);
}
.service-name {
  position: relative;
  color: #f2f2f2;
  font-size: 20px;
}
.service-card:hover {
  transform: scale(1.05);
}
@media only screen and (max-width: 1200px) {
  .card-container {
    flex-direction: column;
    gap: 45px;
  }
  .service-card {
    height: 360px;
    width: 80%;
  }
}
</style>
