<script setup>
import { CONTACT_OPTIONS } from '@/constants';

</script>

<template>
<div class="contact-us-container">
    <h2 class="contact-title text-[#FFBF00] p-5 h-[20%] flex justify-center items-center">Contact Us</h2>
    <div class="contact-option-container">
        <div v-for="{text, icon, index} in CONTACT_OPTIONS" :key="index" class="option-item">
            <img :src="icon" alt="Option Icon" class="contact-icon">
            <div class="text whitespace-pre-line text-white flex justify-center p-4">
                {{ text }}
            </div>
        </div>
    </div>
</div>

</template>

<style>
.contact-us-container {
    width: 65%;
    height: 100%;
    border-radius: 4.5px;
    background: #3F3F3F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 61px;
}
.contact-option-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
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
}
.contact-title{
    font-size: 32px;
}
.text {
    font-size: 13px;
}
.contact-icon {
    height: 41px;
}

@media only screen and (max-width: 1200px) {
    .contact-us-container {
        width: 100%;
        overflow: visible;
        min-height: 202px;
        gap: 32px;
    }
    .contact-option-container {
        grid-template-columns: 1fr 1fr;
    }
    .contact-title{
        font-size: 20px;
    }
    .text {
        font-size: 8px;
    }
    .contact-icon {
        height: 24px;
    }
}
@media only screen and (max-width: 530px) {
    .contact-option-container {
        grid-template-columns: 1fr;
        height: 750px;
    }
    .contact-title{
        font-size: 32px;
    }
    .text {
        font-size: 18px;
    }
    .contact-icon {
        height: 59px;
    }
}
</style>