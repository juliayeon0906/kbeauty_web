<script setup>
import { RouterLink } from 'vue-router';
import logo from '@/assets/icons/logo.png';
</script>

<template>
    <nav class="navbar bg-gray-300 border-4">
        <div class="flex items-center justify-between mx-5 h-20">
            <div class="logo border-4 items-center">
                <img class="h-10 w-auto" :src="logo" alt="logo">
            </div>
            <div class="categories flex md:ml-auto space-x-4 items-center justify-center font-semibold text-base">
                <div class="btn">
                    <router-link to="/">Home</router-link>
                </div>
                <div class="btn">
                    <router-link to="/stylists">Stylists</router-link>
                </div>
                <div class="btn">
                    <router-link to="/services">Services</router-link>
                </div>
                <div class="btn">
                    <router-link to="/gallery">Gallery</router-link>
                </div>
                <div class="btn">
                    <router-link to="/about">About</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>


<style>
    .btn{
        padding: 10px 20px 10px 20px;
        background-color: #A3A3A3;
        border-radius: 0.5rem;

    }
</style>