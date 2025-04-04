<script setup>
import { RouterLink } from 'vue-router';
import logo from '@/assets/icons/logo.png';
import hamburgerIcon from '@/assets/icons/HAMBURGER.png';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

const windowWidth = ref(window.innerWidth);
const isMenuOpened = ref(false);

const isMobile = computed(() => windowWidth.value <= 1200)

const navClass = computed(() => {
    return isMenuOpened.value && isMobile.value
    ? 'flex justify-center flex-col items-center gap-4' 
    : 'flex justify-between';
});

const categoreisStyle = computed(() => {
    return isMenuOpened.value && isMobile.value
    ? 'flex flex-col justify-center gap-4'
    : 'categories'
});

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

function toggleMenu(){
    isMenuOpened.value = !isMenuOpened.value;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<template>
    <div class="nav-container fixed top-0 left-0 h-[90px] w-full z-50" >
        <div :class="isMenuOpened && isMobile ? 'open-navbar' : 'navbar'" >
            <router-link to="/" class="logo-container">
                <img class="h-[28px] max-w-sm" :src="logo" alt="logo">
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
                <router-link to="/reservation" class="px-[100px] flex justify-center items-center">
                    <button class="res-btn px-6 py-2 flex items-center justify-center">
                        Book an appointment
                    </button>
                </router-link>
                <div v-if="isMobile && isMenuOpened" @click="toggleMenu">
                    <img :src="hamburgerIcon" alt="" class="h-[25px] mt-4">
                </div>
            </div>
            <div v-else>
                <div @click="toggleMenu">
                    <img :src="hamburgerIcon" alt="hamburger icon" class="h-[25px]">
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
        background-color: #F2F2F2;
        justify-content: space-between;
        align-items: center;
    }
    .open-navbar{
        width: 100%;
        padding-top: 5%;
        padding-bottom: 5%;
        display: flex;
        background-color: #F2F2F2;
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
    }
    .categories {
        display: flex;
        gap: 45px;
        align-items: center;
        justify-content: space-evenly;
        padding: 1rem;
        flex-wrap: wrap;
    }
    .nav {
        display: block;
        padding: 10px;
        color: #3F3F3F;
        transition: text-decoration-color 0.3s ease;
    }
    .nav:hover {
        text-decoration: underline solid 10%;
        text-decoration-color: #3F3F3F;
    }
    .res-btn {
        text-transform: uppercase;
        font-size: 12px;
        min-height: 25px;
        max-width: fit-content;
        background-color: #FFBF00;
        border-radius: 5px;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
        transition: all 0.3s ease;
    }
    .res-btn:hover {
        background-color: #FF9D00;
        color: #F2F2F2; 
    }

    /* @media only screen and (max-width: 1200px) {
        .categories {
            flex-direction: column;
            gap: 45px;
        }
        .navbar {
            flex-direction: column;
        }
    } */
</style>