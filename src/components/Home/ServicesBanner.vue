<template>
    <div class="services-container">
        <h2 class="service-header p-6 text-[48px] text-[#FFBF00] drop-shadow-[0.5px_0.5px_rgba(0,0,0,0.7)]">Our services</h2>
        <div class="card-container">
            <div v-for="(service, index) in services" :key="index" class="service-card">
                <div class="service-bg" :style="{backgroundImage: `url(${service.img})`}"></div>
                <h3 class="service-name">{{ service.name }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import img1 from '@/assets/images/services/11.jpg';
import img2 from '@/assets/images/services/22.jpg';
import img3 from '@/assets/images/services/33.jpg';
import img4 from '@/assets/images/services/44.jpg';
import img5 from '@/assets/images/services/55.jpg';

const services = computed(() => {
    return [
        {name: 'extensions', img: img1},
        {name: 'cut', img: img2},
        {name: 'treatment', img: img3},
        {name: 'colour', img: img4},
        {name: 'styling', img: img5},
    ]
});

</script>

<style scoped>
    .services-container {
        display: flex;
        align-items: center;
        min-height: 75vh;
        flex-direction: column;
        padding: 20px;
        width: 100%;
    }
    .card-container {
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .service-card {
        display: flex;
        position: relative;
        text-transform: uppercase;
        justify-content: center;
        align-items: center;
        background-size: cover;
        min-height: 50vh;
        min-width: 15vw;
        border-radius: 4.5px;
        overflow: hidden;
        transition: transform 0.5s ease;
    }
    .service-bg{
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        filter: brightness(50%);
    }
    .service-name{
        position: relative;
        color: #F2F2F2;
        font-size: 20px;
    }
    .service-card:hover{
        transform: scale(1.05);
    }
    @media only screen and (max-width: 1200px) {
        .card-container {
            flex-direction: column;
            gap: 45px;
        }
        .service-card {
            height: 360px;
            width: 80%;
        }
        .service-header {
            font-size: 48px;
        }
    }
</style>