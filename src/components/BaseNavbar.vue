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
const menuBtnRef = ref(null)

const isMobile = computed(() => windowWidth.value <= 1250)

const navClass = computed(() => {
  return isMenuOpened.value && isMobile.value
    ? 'flex justify-center flex-col items-center gap-4'
    : 'flex justify-between items-center min-w-[70vw]'
})

const categoreisStyle = computed(() => {
  return isMenuOpened.value && isMobile.value
    ? 'flex flex-col justify-center gap-4'
    : 'categories'
})

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
  <div
    ref="navRef"
    class="nav-container fixed top-0 left-0 h-[90px] w-full z-50"
  >
    <div :class="isMenuOpened && isMobile ? 'open-navbar' : 'navbar'">
      <router-link to="/" class="logo-container">
        <img class="h-[28px] max-w-sm" :src="logo" alt="logo" />
      </router-link>
      <div v-if="!isMobile || isMenuOpened" :class="navClass">
        <nav :class="categoreisStyle">
          <div class="nav">
            <router-link to="/stylists">Stylists</router-link>
          </div>
          <div class="nav">
            <router-link to="/services">Services</router-link>
          </div>
          <div class="nav">
            <router-link to="/gallery">Gallery</router-link>
          </div>
          <div class="nav">
            <router-link to="/about">About</router-link>
          </div>
        </nav>
        <div class="w-full flex justify-center">
          <button class="flex justify-center">
            <a
              href="https://booking.cojilio.com/3881/online"
              class="res-btn px-6 py-2 flex items-center justify-center"
            >
              Book an appointment
            </a>
          </button>
        </div>
        <div
          v-if="isMobile && isMenuOpened"
          ref="menuBtnRef"
          @click="toggleMenu"
        >
          <img :src="closeIcon" alt="" class="h-[25px] mt-6" />
        </div>
      </div>
      <div v-else>
        <div ref="menuBtnRef" @click="toggleMenu">
          <img :src="hamburgerIcon" alt="hamburger icon" class="h-[25px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  min-height: 6rem;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  background-color: #f2f2f2;
  justify-content: space-between;
  align-items: center;
}
.open-navbar {
  width: 100%;
  padding-top: 3%;
  padding-bottom: 4%;
  display: flex;
  background-color: #f2f2f2;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}
.logo-container {
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  width: 30vw;
}
.categories {
  display: flex;
  gap: 45px;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100vw;
}
.nav {
  display: block;
  padding: 10px;
  color: #3f3f3f;
  transition: text-decoration-color 0.3s ease;
}
.nav:hover {
  text-decoration: underline solid 10%;
  text-decoration-color: #3f3f3f;
}
.res-btn {
  width: 100vw;
  text-transform: uppercase;
  font-size: 12px;
  min-height: 38px;
  max-width: fit-content;
  background-color: #ffbf00;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
  white-space: nowrap;
}
.res-btn:hover {
  background-color: #ff9d00;
  color: #f2f2f2;
}

@media only screen and (max-width: 786px) {
  a {
    font-size: 14px;
  }
}
</style>
