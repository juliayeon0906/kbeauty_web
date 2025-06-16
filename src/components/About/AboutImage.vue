<template>
  <div class="image-content">
    <img 
      src="@/assets/images/about/about.jpg" 
      alt="About Image"
      class="about-image"
    />
  </div>
</template>

<style scoped>
.about-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
}

@media only screen and (max-width: 1200px) {
    .about-image{
        max-height: 500px;
    }
}
</style>