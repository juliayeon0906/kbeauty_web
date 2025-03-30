<template>
    <div class="input-container flex flex-col ">
        <form action="post" method="POST" name="contact" class="form-container mb-4" @submit.prevent="submitForm">
            <label for="name">Your Name</label>
            <input type="text" name="name" required>
            <label for="phoneNum">Phone Number</label>
            <input type="text" name="phoneNum" required>
            <label for="email">Email Address</label>
            <input type="text" name="email" required>
            <label for="date">Preferred Date and Time</label>
            <DatePicker id="date" v-model="dateTime" showTime hourFormat="12" showIcon fluid showButtonBar />
            <label for="file" class="text-gray-700">Choose an image:</label>
            <button type="button" class="bg-[#2B2B2B] text-white py-2 px-4 h-[40px] w-[119px] rounded-[10px] cursor-pointer" onclick="document.getElementById('file').click()">Choose</button>
            <input type="file" id="file" accept="image/*" required class="hidden" />
            <label for="comment">Comment</label>
            <textarea rows="5" class="comment-area"></textarea>
            <input type="button" name="submit" value="Submit" class="submitBtn">
        </form>
        <span class="text-[10px]">
            <span class="text-red-500">*</span> Confirmation mail will be sent once we approve your reservation.
        </span>
    </div>
</template>
<script setup>
import DatePicker from 'primevue/datepicker';
import axios from 'axios';
import { ref } from 'vue';
 

const dateTime = ref();

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://kbeautysalonhfx.netlify.app' : 'https://localhost:5173';

async function submitForm() {
    try {
        const response = await axios.post(
            `${baseUrl}/sendEmail`, postData
        )
        return response.datal
    }catch(error){
        throw error;
    }
}

</script>

<style>
.form-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
label {
    font-family: 'Noto Sans', serif;
    font-weight: 700;
    font-size: 16px;
    color: #3F3F3F;
    font-style: normal;
}

input {
    height: 40px;
    border-radius: 10px;
    background: #D9D9D9;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.comment-area{
    border-radius: 10px;
    background: #D9D9D9;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.p-datepicker {
    border-radius: 10px;
}
.p-datepicker-panel {
    background-color: white !important;
}
.p-inputtext {
    background-color: #D9D9D9 !important;
}
.submitBtn {
    background-color: #FFBF00;
    width: 121.9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-transform: uppercase;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
    transition: all 0.3s ease;
}
.submitBtn:hover {
    background-color: #FF9D00;
    color: #F2F2F2; 
}
</style>