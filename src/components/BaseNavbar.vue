<script setup>
import { RouterLink } from 'vue-router';
import logo from '@/assets/icons/logo.png';
</script>

<template>
    <div class="navbar">
        <router-link to="/" class="logo-container">
            <img class="h-10 w-sm" :src="logo" alt="logo">
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
        <router-link to="/reservation" class="flex justify-center items-center">
            <button class="resBtn px-6 py-2">
                Book an appointment
            </button>
        </router-link>
    </div>
</template>


<style scoped>
    .navbar {
        height: 6rem;
        width: 100%;
        padding: 10px;
        display: flex;
        background-color: #F2F2F2;
    }
    .logo-container {
        display: flex;
        height: 100%;
        width: 20%;
        align-items: center;
        justify-content: right;
        padding: 1rem;
    }
    .categories {
        display: flex;
        width: 60%;
        gap: 45px;
        align-items: center;
        justify-items: center;
        justify-content: center;
        padding: 1rem;
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
        height: 38px;
        background-color: #FFBF00;
        border-radius: 5px;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
        transition: all 0.3s ease;
    }
    .resBtn:hover {
        background-color: #FF9D00;
        color: #F2F2F2; 
    }
</style>