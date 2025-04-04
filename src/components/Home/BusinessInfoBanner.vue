<script setup>
import { ref } from 'vue';

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
           <div class="hour-text-container flex flex-col gap-5 items-center">
                <h2 class="text-white text-[28px]">Business Hour</h2>
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
        <div class="contact-us-container">
            <h2 class="text-white text-[36px]">Contact Us</h2>
            <div class="contact-option">

            </div>
        </div>
    </div>
</template>

<style scoped>
.info-container{
    min-height: 60vh;
    width: 100%;
    display: flex;
    gap: 28px;
    justify-content: center;
}
.business-hour-container{
    width: 35%;
    height: 100%;
    border-radius: 4.5px;
    background: #2B2B2B;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contact-us-container {
    width: 65%;
    height: 100%;
    border-radius: 4.5px;
    background: #2B2B2B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.contact-option {
    display: flex;
    height: 40%;
}
.hour-info {
    display: flex;
    flex-direction: column;
    color: white;
    font-weight: 700;
    gap: 14px;
}
</style>