<script setup>
import { ref } from 'vue';
import ContactUsContainer from './ContactUsContainer.vue';

const businessHour = ref([
        {day: 'Monday', hour: '10AM - 7PM'},
        {day: 'Tuesday', hour: '10AM - 7PM'},
        {day: 'Wednesday', hour: '10AM - 7PM'},
        {day: 'Thursday', hour: '10AM - 7PM'},
        {day: 'Friday', hour: '10AM - 7PM'},
        {day: 'Saturday', hour: '10AM - 7PM'},
        {day: 'Sunday', hour: '10AM - 6PM'}
    ]
);

</script>

<template>
    <div class="info-container px-10 py-8">
        <div class="business-hour-container">
           <div class="hour-text-container flex flex-col gap-6 items-center">
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
    min-height: 60vh;
    width: 100%;
    display: flex;
    gap: 28px;
    justify-content: center;
    padding: 32px 40px 32px 40px;
}
.business-hour-container{
    width: 35%;
    border-radius: 4.5px;
    background: #2B2B2B;
    display: flex;
    justify-content: center;
    align-items: center;
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
        gap: 10%;
    }
    .business-hour-container {
        width: 100%;
        height: 440px;
    }
}
</style>