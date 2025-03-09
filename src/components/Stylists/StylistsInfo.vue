<template>
    <div class="info-card-container my-10">
        <div v-for="(stylist, index) in STYLISTS_INFO[0].STYLISTS" :key="index" class="stylist-info-card">
            <img :src="stylist.image" alt="Stylist Image" class="stylist-image"/>
            <div class="stylist-info px-[120px]">
                <div class="info-title flex gap-[20px] items-center">
                    <h3 class="stylist-name font-bold text-[32px]">{{ stylist.name }}</h3>
                    <p class="sytlist-position font-light text-[24px]">{{ stylist.position }}</p>
                </div>   
                <p class="font-medium text-[17px]">{{ stylist.description }}</p>
            </div>
        </div>
    </div>  
</template>
<script setup>
  import { STYLISTS_INFO } from '@/constants.js';
</script>
<style scoped>
.info-card-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
.stylist-info-card{
    height: 70vh;
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 6px;
    background-color: #F2F2F2;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.7);
    flex-wrap: wrap;
    flex-direction: column;
}
.stylist-info {
    display: flex;
    flex-direction: column;
    font-family: 'Noto Sans', serif;
    font-style: normal;
    justify-content: center;
    gap: 15px;
    
}
.stylist-image{
    max-height: 100%; /* Ensure the image doesn't exceed half of the card's height */
    object-fit: contain; /* Ensures the entire image fits inside without overflowing */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
</style>