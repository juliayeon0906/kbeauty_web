<template>
  <div class="description-container">
    <div class="inner">
      <div class="text-left">
        <div class="gold-line" />
        <h2 class="desc-header">Our<br /><span class="highlight">Values</span></h2>
      </div>
      <div class="divider-v" />
      <p class="description">
        At K-Beauty, customer satisfaction and exceptional service are our top
        priorities. Our dedicated team in Halifax is here to provide you with a
        welcoming and personalized experience.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.description-container {
  padding: 100px 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 64px;
  max-width: 1100px;
  width: 100%;
}

.text-left {
  flex: 0 0 auto;
}

.gold-line {
  width: 36px;
  height: 3px;
  background-color: #ffbf00;
  margin-bottom: 20px;
}

.desc-header {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.05;
  text-shadow: 0.5px 0.5px rgba(0, 0, 0, 0.15);
}

.highlight {
  color: #ffbf00;
}

.divider-v {
  width: 1px;
  height: 120px;
  background-color: #e0e0e0;
  flex-shrink: 0;
}

.description {
  font-family: 'Noto Sans', serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.9;
  color: #3f3f3f;
  max-width: 500px;
}

@media only screen and (max-width: 800px) {
  .description-container {
    padding: 72px 7%;
  }

  .inner {
    flex-direction: column;
    gap: 28px;
    align-items: flex-start;
  }

  .divider-v {
    display: none;
  }

  .desc-header {
    font-size: 48px;
  }

  .description {
    font-size: 15px;
    max-width: 100%;
    line-height: 1.85;
  }
}

@media only screen and (max-width: 480px) {
  .description-container {
    padding: 60px 6%;
  }

  .desc-header {
    font-size: 40px;
  }

  .description {
    font-size: 14px;
  }
}
</style>
