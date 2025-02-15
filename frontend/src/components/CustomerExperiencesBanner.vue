<template>
    <div class="banner-container my-3">
        <div class="exterior-banner">
            <div class="interior-banner">
                <h2 class="header-text">Experience At K-Beauty</h2>
                <Slider/>
            </div>
        </div>
    </div>
</template>

<script setup>
import Slider from './Slider.vue';
</script>

<style scoped>
    .banner-container {
        height: 40vh;
    }
    .exterior-banner {
        position: absolute;
        width: 100%;
        height: 40vh;
        background-color: #3f3f3f;  
        display: flex;
        justify-content: center;
        align-items: center;      
    }
    .interior-banner {
        position: relative;
        background-color: #2B2B2B;
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-text{
        width: 270px;
        font-size: 32px;
        color: #FFBF00;
    }
</style>