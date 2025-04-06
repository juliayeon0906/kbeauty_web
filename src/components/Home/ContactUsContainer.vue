<script setup>
import { CONTACT_OPTIONS } from '@/constants';

</script>

<template>
<div class="contact-us-container">
    <h2 class="text-white text-[36px]">Contact Us</h2>
    <div class="contact-option-container">
        <div v-for="{text, icon, index} in CONTACT_OPTIONS" :key="index" class="option-item">
            <img :src="icon" alt="Option Icon" class="h-10">
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
    border-radius: 4.5px;
    background: #2B2B2B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10%;
}
.contact-option-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 40%;
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
    height: 40%;
}

@media only screen and (max-width: 1600px) {
    .contact-option-container {
        grid-template-columns: 1fr 1fr;
    }
}
@media only screen and (max-width: 1200px) {
    .contact-us-container {
        width: 100%;
        height: 759px;
    }
    .contact-option-container {
        grid-template-columns: 1fr;
        height: 70%;
    }
}
</style>