<template>
  <div class="about-page">

    <!-- ── Split Hero ── -->
    <section class="about-split">
      <!-- Image Panel -->
      <div class="split-image">
        <img
          src="@/assets/images/about/about.webp"
          alt="K-Beauty Salon Halifax"
          class="split-img"
        />
        <div class="image-tag">Est. 2020</div>
      </div>

      <!-- Content Panel -->
      <div class="split-content">
        <div class="content-inner">
          <p class="content-eyebrow">Halifax, Nova Scotia</p>
          <h1 class="content-title">About<br>K-Beauty</h1>
          <div class="content-rule">
            <div class="rule-line" />
            <div class="rule-dot" />
            <div class="rule-line" />
          </div>
          <p class="content-text">
            K-Beauty is a hair salon established in 2020 on Quinpool Road,
            specializing in top-quality hair care and premium Korean cosmetics.
            Combining expert styling with cutting-edge K-beauty products, we
            offer personalized services that bring out your natural beauty.
          </p>
          <p class="content-text">
            Our team of skilled professionals is dedicated to providing exceptional
            care in a welcoming, modern space, ensuring every client leaves feeling
            confident and refreshed. Style and sophistication — always.
          </p>
          <router-link to="/reservation">
            <button class="content-btn">Book an Appointment</button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ── Values ── -->
    <section class="about-values">
      <div class="values-grid">
        <div v-for="val in values" :key="val.title" class="value-card">
          <div class="value-accent" />
          <h3 class="value-title">{{ val.title }}</h3>
          <p class="value-desc">{{ val.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="about-cta">
      <p class="cta-eyebrow">Ready for a transformation?</p>
      <h2 class="cta-title">Visit Us Today</h2>
      <p class="cta-address">6299 Quinpool Road, Halifax, NS B3L 1A4</p>
      <router-link to="/reservation">
        <button class="cta-btn">Reserve Your Spot</button>
      </router-link>
    </section>

  </div>
</template>

<script setup>
const values = [
  {
    title: 'Expert Styling',
    desc: 'Our master stylists bring decades of experience from Korea, Japan, and beyond — trained in precision cuts, perms, and colour.',
  },
  {
    title: 'Premium Products',
    desc: 'We use only the finest K-beauty products to nourish, protect, and transform your hair with every visit.',
  },
  {
    title: 'Client First',
    desc: 'Every service is tailored to your unique needs. We listen, advise, and deliver results that exceed expectations.',
  },
]
</script>

<style scoped>
/* ── Page ── */
.about-page {
  background-color: #f2f2f2;
  min-height: 100vh;
}

/* ── Split Hero ── */
.about-split {
  display: flex;
  min-height: 90vh;
  /* No top padding — image is full-bleed from the top */
}

/* ── Image Panel ── */
.split-image {
  flex: 0 0 42%;
  position: relative;
  overflow: hidden;
  background: #111;
}

.split-img {
  /* Image file is landscape, rotate to show portrait content */
  position: absolute;
  top: 50%;
  left: 50%;
  /* After rotate(90deg): element height → visual width, element width → visual height */
  height: 42vw;   /* visual width after rotate = 42% of viewport = container width */
  width: 90vh;    /* visual height after rotate ≥ container height */
  max-width: none;
  max-height: none;
  transform: translate(-50%, -50%) rotate(90deg);
  object-fit: cover;
  object-position: center;
}

.image-tag {
  position: absolute;
  bottom: 36px;
  left: 36px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(255, 191, 0, 0.9);
  color: #1a1a1a;
  padding: 8px 18px;
  backdrop-filter: blur(4px);
}

/* ── Content Panel ── */
.split-content {
  flex: 1;
  display: flex;
  align-items: center;
  /* Top padding accounts for fixed navbar (90px) + breathing room */
  padding: 120px 7% 80px 8%;
  background-color: #f2f2f2;
}

.content-inner {
  max-width: 520px;
}

.content-eyebrow {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #ffbf00;
  margin-bottom: 18px;
}

.content-title {
  font-size: 58px;
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  margin-bottom: 28px;
}

.content-rule {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
}

.rule-line {
  width: 32px;
  height: 1px;
  background-color: #ffbf00;
}

.rule-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #ffbf00;
  flex-shrink: 0;
}

.content-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.85;
  color: #555;
  margin-bottom: 20px;
}

.content-btn {
  margin-top: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 14px 36px;
  background-color: #ffbf00;
  color: #1a1a1a;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 10px rgba(255, 191, 0, 0.3);
}

.content-btn:hover {
  background-color: #ff9d00;
  color: #fff;
  box-shadow: 0 4px 20px rgba(255, 157, 0, 0.45);
}

/* ── Values ── */
.about-values {
  padding: 80px 7%;
  background-color: #1a1a1a;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto;
}

.value-card {
  display: flex;
  flex-direction: column;
}

.value-accent {
  width: 28px;
  height: 2px;
  background-color: #ffbf00;
  margin-bottom: 22px;
}

.value-title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 14px;
}

.value-desc {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.5);
}

/* ── CTA ── */
.about-cta {
  padding: 100px 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cta-eyebrow {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #ffbf00;
  margin-bottom: 16px;
}

.cta-title {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #1a1a1a;
  margin-bottom: 14px;
}

.cta-address {
  font-size: 13px;
  color: #999;
  letter-spacing: 0.08em;
  margin-bottom: 40px;
}

.cta-btn {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 14px 40px;
  background-color: transparent;
  color: #1a1a1a;
  border: 1.5px solid #1a1a1a;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.cta-btn:hover {
  background-color: #1a1a1a;
  color: #fff;
}

/* ── Responsive ── */

/* Navbar switches to mobile (70px) at 1250px */
@media only screen and (max-width: 1250px) {
  .split-content {
    padding: 82px 7% 80px 8%;
  }
}

@media only screen and (max-width: 1100px) {
  .content-title {
    font-size: 46px;
  }

  .split-content {
    padding: 80px 5% 64px 6%;
  }
}

@media only screen and (max-width: 800px) {
  .about-split {
    flex-direction: column;
    min-height: unset;
    /* Push the image below the mobile navbar (70px) */
    padding-top: 70px;
  }

  .split-image {
    flex: 0 0 auto;
    width: 100%;
    height: 65vw;
  }

  .split-img {
    /* Recalculate for mobile: container is 100vw wide × 65vw tall */
    height: 100vw;  /* visual width after rotate = 100vw = container width */
    width: 65vw;    /* visual height after rotate = 65vw = container height */
  }

  .image-tag {
    bottom: 20px;
    left: 20px;
  }

  .split-content {
    /* No navbar offset needed — content is below the image */
    padding: 48px 6% 60px;
  }

  .content-title {
    font-size: 40px;
  }

  .content-inner {
    max-width: 100%;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .about-values {
    padding: 60px 6%;
  }

  .cta-title {
    font-size: 36px;
  }

  .about-cta {
    padding: 72px 6%;
  }
}

@media only screen and (max-width: 480px) {
  .about-split {
    padding-top: 70px;
  }

  .split-image {
    height: 80vw;
  }

  .split-img {
    height: 100vw;
    width: 80vw;
  }

  .split-content {
    padding: 36px 5% 52px;
  }

  .content-title {
    font-size: 34px;
  }

  .content-text {
    font-size: 14px;
  }

  .cta-title {
    font-size: 30px;
  }
}
</style>
