<template>
    <div class="content-wrapper">
        <AboutContent/>
        <AboutImage/>
    </div>
</template>

<script setup>
import AboutContent from './AboutContent.vue';
import AboutImage from './AboutImage.vue';
</script>


<style scoped>
.content-wrapper {
  display: flex;
  justify-content: center;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

@media only screen and (max-width: 1200px) {
    .content-wrapper{
        flex-direction: column-reverse;
        justify-content: center;
        width: 100%;
        align-content: center;
    }
}
</style>