<template>
  <div class="gallery">
    <h2 class="gal-header">Gallery</h2>
    <div class="gallery-container">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-card-container"
      >
        <img :src="image" alt="Image" class="gallery-card" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue'

const images = ref([])

onMounted(() => {
  const imageModules = import.meta.glob('@/assets/images/GALLERY/*.webp', {
    eager: true,
  })
  images.value = Object.entries(imageModules)
    .map(([path, mod]) => ({
      name: path.split('/').pop(), // Extract the file name
      url: mod.default,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })) // Sort alphabetically by name
    .map((image) => image.url)
})
</script>

<style scoped>
.gallery {
  padding-top: 60px;
  padding-right: 3%;
  padding-left: 3%;
  margin-bottom: 20vh;
}
.gal-header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  margin-bottom: 50px;
}
.gallery-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-content: center;
  gap: 20px;
}
.gallery-card-container {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: transform 0.5s ease;
}
.gallery-card-container:hover {
  transform: scale(1.05);
}
.gallery-card {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 1250px) {
  .gallery-container {
    grid-template-columns: repeat(3, 30%);
  }
}

@media only screen and (max-width: 700px) {
  .gal-header {
    font-size: 40px;
  }
  .gallery-container {
    grid-template-columns: repeat(2, 45%);
  }
  .gallery {
    margin-bottom: 20vh;
  }
}
</style>
