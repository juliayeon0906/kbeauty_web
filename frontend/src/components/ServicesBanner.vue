<template>
    <div class="services-container">
        <h2 class="p-6 text-[48px] text-[#FFBF00] drop-shadow-[0.5px_0.5px_rgba(0,0,0,0.7)]">Our services</h2>
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

const services = computed(() => {
    return [
        {name: 'extensions', img: '/src/assets/images/services/11.jpg'},
        {name: 'cut', img: '/src/assets/images/services/22.jpg' },
        {name: 'treatment', img: '/src/assets/images/services/33.jpg' },
        {name: 'colour', img: '/src/assets/images/services/44.jpg'},
        {name: 'styling', img: '/src/assets/images/services/55.jpg' },
    ]
});

</script>

<style scoped>
    .services-container {
        display: flex;
        align-items: center;
        height: 70vh;
        flex-direction: column;
        padding: 20px;
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
</style>