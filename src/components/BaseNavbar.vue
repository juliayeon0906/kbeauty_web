<script setup>
import { RouterLink } from 'vue-router';
import logo from '@/assets/icons/logo.png';
</script>

<template>
    <div class="nav-container fixed top-0 left-0 h-[90px] w-full">
        <div class="navbar">
        <router-link to="/" class="logo-container px-[100px]">
            <img class="h-10 max-w-sm" :src="logo" alt="logo">
        </router-link>
        <nav class="categories">
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
            <button class="resBtn px-6 py-2">
                Book an appointment
            </button>
        </router-link>
    </div>
    </div>
    
</template>


<style scoped>
    .navbar {
        min-height: 6rem;
        width: 100%;
        padding: 10px;
        display: flex;
        background-color: #F2F2F2;
        justify-content: space-between;
        align-content: center;
        flex-wrap: wrap;
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
    .resBtn {
        text-transform: uppercase;
        font-size: 12px;
        min-height: 38px;
        max-width: fit-content;
        background-color: #FFBF00;
        border-radius: 5px;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
        transition: all 0.3s ease;
    }
    .resBtn:hover {
        background-color: #FF9D00;
        color: #F2F2F2; 
    }

    @media only screen and (max-width: 1200px) {
        .categories {
            flex-direction: column;
            gap: 45px;
        }
        .navbar {
            flex-direction: column;
        }
    }
</style>