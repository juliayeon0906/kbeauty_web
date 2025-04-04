<template>
    <div class="description-container">
        <div class="text-container">
            <h2 class="desc-header">Our <span class="highlight">Value</span></h2>
            <h5 class="description">At K-Beauty, customer satisfaction and exceptional service are our top priorities. Our dedicated team 
            in Halifax is here to provide you with a welcoming and personalized experience.</h5>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
    .description-container {
        min-height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 20px;
    }
    .text-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
        width: 100%;
        flex-wrap: wrap;
    }
    .desc-header{
        font-size: 64px;
        text-shadow: 0.5px 0.5px rgba(0,0,0,0.7);
        max-width: 209px;
        line-height: 1;
    }
    .highlight {
        color: #FFBF00;
    }
    .description {
        font-family: 'Noto Sans', serif;
        font-style: normal;
        font-size: 18px;
        font-optical-sizing: auto;
        font-weight: 500;
        font-variation-settings: "wdth" 100;
        width: 494px;
        line-height: 1.8;
    }

    @media only screen and (max-width: 500px) {
        .desc-header {
            font-size: 48px;
        }
        .description {
            font-size: 16px;
            padding-right: 10%;
            padding-left: 10%;
        }
    }
</style>