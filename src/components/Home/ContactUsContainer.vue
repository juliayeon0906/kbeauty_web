<script setup>
import { CONTACT_OPTIONS } from '@/constants';

</script>

<template>
<div class="contact-us-container">
    <h2 class="text-white text-[36px] p-5 h-[20%] flex justify-center items-center">Contact Us</h2>
    <div class="contact-option-container">
        <div v-for="{text, icon, index} in CONTACT_OPTIONS" :key="index" class="option-item">
            <img :src="icon" alt="Option Icon" class="contact-icon">
            <div class="whitespace-pre-line text-white flex justify-center">
                {{ text }}
            </div>
        </div>
    </div>
</div>

</template>

<style>
.contact-us-container {
    width: 65%;
    min-height: 100%;
    border-radius: 4.5px;
    background: #2B2B2B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vh;
}
.contact-option-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    min-height: 80%;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
    align-items: center;
    gap: 4%;
}
.option-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.contact-icon {
    height: 80px;
}

@media only screen and (max-width: 1600px) {
    .contact-option-container {
        grid-template-columns: 1fr 1fr;
    }
    .option-item {
        height: 30%;
    }
}
@media only screen and (max-width: 1200px) {
    .contact-us-container {
        width: 100%;
        overflow: visible;
        height: 100vh;
    }
    .contact-option-container {
        grid-template-columns: 1fr;
    }
    .contact-icon {
        height: 40px;
    }
}
@media only screen and (min-width: 1900px) {
    /* .contact-icon {
        height: 60%; */
    /* } */
}
</style>