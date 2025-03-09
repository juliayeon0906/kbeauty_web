<script setup>
import Carousel from '@/components/Carousel.vue';

const reviews = [
    {id: '100', content: '“Last week, I gave my child a hair styling session as a birthday gift. Lucy calmly discussed with my child the hairstyle they wanted and recreated it perfectly. Lucy is truly the best, and I will definitely book and visit again. Thank you so much"' },
    {id: '101', content: '“Joy was my stylist and she did an amazing job 💗🥰”'},
    {id: '102', content: '“My hairstylist was Esther. She was super nice and patient, I really like the haircut she gave me. The staff at K-Beauty Salon were all very welcoming and passionate, definitely recommend :)”'},
    {id: '103', content: '“지난주 여기서 아들의 머리를 잘랐는데 너무 좋았어요. 스텝분들도 친철하고 따뜻하게 반겨주는 분위기 최고입니다. 무엇보다 아들이 헤어스타일을 너무 좋아합니다.”'},
]
</script>

<template>
    <div class="banner-container">
        <div class="exterior-banner">
            <div class="interior-banner py-8">
                <div class="content-container flex flex-col px-20">
                    <div class="header-container p-3">
                    <h2 class="header-text">Experience At K-Beauty</h2>
                    </div>
                    <div class="w-full">
                        <Carousel :items="reviews"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .banner-container {
        height: 50vh;
        display: flex;
    }
    .exterior-banner {
        width: 100%;
        background-color: #3f3f3f;  
        display: flex;
        justify-content: center;
        align-items: center;      
    }
    .interior-banner {
        background-color: #2B2B2B;
        width: 60%;
        height: 100%;
    }
    .header-container{
        width: 100%;
        display: flex;
    }
    .header-text{
        width: 270px;
        font-size: 32px;
        color: #FFBF00;
    }
</style>