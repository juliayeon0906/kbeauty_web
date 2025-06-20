<template>
  <div class="content-wrapper">
    <AboutImage />
    <AboutContent />
  </div>
</template>

<script setup>
import AboutContent from './AboutContent.vue'
import AboutImage from './AboutImage.vue'
</script>

<style scoped>
.content-wrapper {
  display: flex;
  justify-content: center;
  gap: 60px;
  align-items: center;
  margin: 0 auto;
  padding: 93px 20px;
  padding-bottom: 0px;
}

@media only screen and (max-width: 1200px) {
  .content-wrapper {
    padding: 130px 40px;
    gap: 30px;
  }
}

@media only screen and (max-width: 650px) {
  .content-wrapper {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-content: center;
  }
}
</style>
