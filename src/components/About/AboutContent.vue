<template>
  <div class="text-content">
    <div class="header-section">
      <h1 class="header-text">ABOUT US</h1>
    </div>
    <p class="about-text">
      K-Beauty is a hair salon in Halifax, established in 2020 by Quinpool Road,
      specializing in top-quality hair care and premium Korean cosmetics.
      Combining expert styling with cutting-edge K-beauty products, we offer
      personalized services that bring out your natural beauty while keeping
      your hair healthy and vibrant. Our team of skilled professionals is
      dedicated to providing exceptional care in a welcoming, modern space,
      ensuring every client leaves feeling confident and refreshed. At K-Beauty,
      our core value is delivering great service with complete customer
      satisfaction. Whether you're looking for a bold new look or subtle
      enhancements, K-Beauty delivers the perfect blend of style and
      sophistication.
    </p>
    <router-link to="/">
      <button class="learn-more-btn">Learn More</button>
    </router-link>
  </div>
</template>

<style scoped>
.header-section {
  margin-bottom: 20px;
}

.header-text {
  color: #000000;
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0;
}

.about-text {
  font-family: 'Noto Sans', sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  color: #000000;
  width: 300px;
  white-space: normal;
  margin-bottom: 20px;
}

.learn-more-btn {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  background: #ffbf00;
  color: #171717;
  width: 151px;
  height: 36px;
  padding: 6px 30px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow:
    1px 1px 2px rgba(0, 0, 0, 1),
    -1px -1px 2px rgba(255, 255, 255, 1);
}

.learn-more-btn:hover {
  background-color: #ff9d00;
  color: #f2f2f2;
}
@media only screen and (max-width: 1200px) {
  .header-section {
    margin-bottom: 20px;
  }
  .about-text {
    font-size: 10px;
    line-height: 18px;
    width: 204px;
  }
}
@media only screen and (max-width: 650px) {
  .text-content {
    padding: 0 15%;
  }
  .about-text {
    width: 100%;
  }
}
@media only screen and (max-width: 370px) {
  .header-text {
    font-size: 34px;
  }
}
</style>
