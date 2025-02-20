<template>
  <div class="about-page">
    <div class="content-section">
      <div class="content-wrapper">
        <AboutImage />
        <AboutContent />
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutImage from '@/components/About/AboutImage.vue';
import AboutContent from '@/components/About/AboutContent.vue';
</script>

<style scoped>
.content-section {
  padding: 40px 0;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>