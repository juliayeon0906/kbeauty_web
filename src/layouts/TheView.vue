<template>
    <div class="view-layout">
        <RouterView />
    </div>
    <footer class="h-[50px] flex justify-center items-center bg-[#1E1E1E]">
        <p class="text-white font-[300] text-[9px]">Copyright @ 2025 - K BEAUTY HAIR SALON POLICY - Site Designed by Julia Yeon, Hyeonsu Kim</p>
    </footer>
</template>

<script setup>
import { RouterView } from 'vue-router';

</script>

<style>
    .view-layout {
        width: 100%;
        min-height: 100vh;
    }
</style>