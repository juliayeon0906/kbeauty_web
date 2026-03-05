<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/icons/logo.png'
import hamburgerIcon from '@/assets/icons/HAMBURGER.png'
import closeIcon from '@/assets/icons/close_button_highres.png'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useClickOutside } from '@/composables/useClickOutside'
import { useRoute } from 'vue-router'

const route = useRoute()

const windowWidth = ref(window.innerWidth)
const isMenuOpened = ref(false)
const navRef = ref(null)

const isMobile = computed(() => windowWidth.value <= 1250)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

function toggleMenu() {
  isMenuOpened.value = !isMenuOpened.value
}

useClickOutside(navRef, () => {
  if (isMenuOpened.value === true) {
    isMenuOpened.value = false
  }
})

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

watch(
  () => route.fullPath,
  () => {
    if (isMobile.value) {
      isMenuOpened.value = false
    }
  }
)
</script>

<template>
  <div ref="navRef" class="nav-container">
    <!-- Desktop -->
    <div v-if="!isMobile" class="navbar">
      <router-link to="/" class="logo-container">
        <img class="logo-img" :src="logo" alt="logo" />
      </router-link>
      <nav class="categories">
        <router-link to="/stylists" class="nav-link">Stylists</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/gallery" class="nav-link">Gallery</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </nav>
      <div class="book-wrap">
        <router-link to="/reservation">
          <button class="res-btn">Book an appointment</button>
        </router-link>
      </div>
    </div>

    <!-- Mobile -->
    <div v-else class="navbar-mobile">
      <router-link to="/" class="logo-container">
        <img class="logo-img" :src="logo" alt="logo" />
      </router-link>
      <button class="hamburger-btn" @click="toggleMenu" aria-label="Toggle menu">
        <img v-if="!isMenuOpened" :src="hamburgerIcon" alt="menu" class="h-[22px]" />
        <img v-else :src="closeIcon" alt="close" class="h-[22px]" />
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="menu-slide">
      <div v-if="isMobile && isMenuOpened" class="mobile-menu">
        <nav class="mobile-nav">
          <router-link to="/stylists" class="mobile-nav-link">Stylists</router-link>
          <router-link to="/services" class="mobile-nav-link">Services</router-link>
          <router-link to="/gallery" class="mobile-nav-link">Gallery</router-link>
          <router-link to="/about" class="mobile-nav-link">About</router-link>
        </nav>
        <router-link to="/reservation">
          <button class="res-btn-mobile">Book an appointment</button>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* ── Container ── */
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08), 0 2px 12px rgba(0, 0, 0, 0.06);
}

/* ── Desktop Navbar ── */
.navbar {
  height: 90px;
  width: 100%;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  border-bottom: 2px solid #ffbf00;
}

.logo-container {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.logo-img {
  height: 28px;
  width: auto;
}

/* ── Nav Links ── */
.categories {
  display: flex;
  align-items: center;
  gap: 44px;
}

.nav-link {
  position: relative;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #3f3f3f;
  text-decoration: none;
  padding-bottom: 4px;
  transition: color 0.25s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ffbf00;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #1a1a1a;
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  width: 100%;
}

.nav-link.router-link-exact-active {
  color: #1a1a1a;
  font-weight: 600;
}

/* ── Book Button ── */
.book-wrap {
  flex: 0 0 auto;
}

.res-btn {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 10px 22px;
  background-color: #ffbf00;
  color: #1a1a1a;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(255, 191, 0, 0.35);
  transition: background-color 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;
  white-space: nowrap;
  cursor: pointer;
}

.res-btn:hover {
  background-color: #ff9d00;
  color: #fff;
  box-shadow: 0 4px 16px rgba(255, 157, 0, 0.45);
}

/* ── Mobile Navbar bar ── */
.navbar-mobile {
  height: 70px;
  width: 100%;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  border-bottom: 2px solid #ffbf00;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
}

/* ── Mobile Dropdown Menu ── */
.mobile-menu {
  background-color: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px 5% 36px;
  border-bottom: 2px solid #ffbf00;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.mobile-nav-link {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #3f3f3f;
  text-decoration: none;
  padding-bottom: 4px;
  position: relative;
  transition: color 0.25s ease;
}

.mobile-nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #ffbf00;
  transition: width 0.3s ease;
}

.mobile-nav-link.router-link-exact-active::after {
  width: 100%;
}

.mobile-nav-link.router-link-exact-active {
  color: #1a1a1a;
  font-weight: 600;
}

.res-btn-mobile {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 12px 32px;
  background-color: #ffbf00;
  color: #1a1a1a;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(255, 191, 0, 0.35);
  cursor: pointer;
  transition: background-color 0.25s ease, color 0.25s ease;
  white-space: nowrap;
}

.res-btn-mobile:hover {
  background-color: #ff9d00;
  color: #fff;
}

/* ── Slide transition ── */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
