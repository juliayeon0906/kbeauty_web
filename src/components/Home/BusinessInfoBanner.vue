<script setup>
import { ref } from 'vue';
import ContactUsContainer from './ContactUsContainer.vue';
import businessHourBg from '@/assets/images/Business_Hour.jpg';

const businessHour = ref([
        {day: 'Monday', hour: '10AM - 8PM'},
        {day: 'Tuesday', hour: '10AM - 8PM'},
        {day: 'Wednesday', hour: '10AM - 8PM'},
        {day: 'Thursday', hour: '10AM - 8PM'},
        {day: 'Friday', hour: '10AM - 8PM'},
        {day: 'Saturday', hour: '10AM - 7PM'},
        {day: 'Sunday', hour: '10AM - 6PM'}
    ]
);

</script>

<template>
    <div class="info-container px-10 py-8">
        <div class="business-hour-container relative overflow-hidden" :style="{ backgroundImage: `url(${businessHourBg})` }">
           <div class="hour-text-container flex flex-col gap-[40px] items-center">
                <h2 class="text-white text-[32px]">Business Hour</h2>
                <div class="flex gap-7">
                    <ul class="hour-info">
                        <li v-for="{day, index} in businessHour" :key="index">
                            {{ day }}
                        </li>
                    </ul>
                    <ul class="hour-info">
                        <li v-for="{hour, index} in businessHour" :key="index">
                            {{ hour }}
                        </li> 
                    </ul>  
                </div>
           </div> 
        </div>
        <ContactUsContainer/>
    </div>
</template>

<style scoped>
.info-container{
    height: 700px;
    align-items: center;
    width: 100%;
    display: flex;
    gap: 28px;
    justify-content: center;
    padding: 32px 40px 32px 40px;
}
.business-hour-container{
    width: 35%;
    height: 100%;
    border-radius: 4.5px;
    background: #2B2B2B;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
}
.hour-info {
    display: flex;
    flex-direction: column;
    color: white;
    font-weight: 700;
    gap: 14px;
}

@media only screen and (min-width: 1900px) {
    .hour-info {
        font-size: 24px;
    }
}

@media only screen and (max-width: 1200px) {
    .info-container {
        flex-direction: column;
        align-items: center;
        padding: 4%;
        height: auto;
        overflow: visible;
    }
    .business-hour-container {
        width: 100%;
        height: 440px;
    }
    .hour-info {
        font-size: 14px;
    }
}
</style>