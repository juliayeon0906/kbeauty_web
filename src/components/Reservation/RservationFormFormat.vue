<template>
    <div class="input-container flex flex-col ">
        <form action="post" method="POST" name="contact" class="form-container mb-4" @submit.prevent="submitForm">
            <label for="name">Your Name</label>
            <input type="text" name="name" v-model="formData.name" required>
            <label for="phoneNum">Phone Number</label>
            <input type="text" name="phoneNum" v-model="formData.phoneNum" required>
            <label for="email">Email Address</label>
            <input type="text" name="email" v-model="formData.email" required>
            <label for="date">Preferred Date and Time</label>
            <DatePicker id="date" v-model="formData.dateTime" showTime hourFormat="12" showIcon fluid showButtonBar />
            <label for="file" class="text-gray-700">Preferred Hair Picture:</label>
            <button type="button" class="bg-[#2B2B2B] text-white py-2 px-4 h-[40px] w-[119px] rounded-[10px] cursor-pointer" @click="triggerFileInput">Choose</button>
            <input type="file" id="file" accept="image/*" class="hidden" @change="handleFileChange" />
            <div class="flex flex-row gap-3">
                <div class="flex flex-col">
                    <label for="gender">Gender</label>
                    <input type="text" name="gender" v-model="formData.gender" required>
                </div>
                <div class="flex flex-col">
                    <label for="treated">Is Your Hair Colour Treated?</label>
                    <input type="text" name="treated" v-model="formData.treated" placeholder="Yes / No" required>
                </div>
            </div>
            <label for="hairType">Your Hair Type</label>
            <input type="text" name="hairType" v-model="formData.hairType" placeholder="Straight / Wavy / Curly / Coiled" required>
            <label for="service">Service Required</label>
            <input type="text" name="service" v-model="formData.service" placeholder="Haircut / Colour / Highlight / Perm / etc." required>
            <label for="comment">Other Comment</label>
            <textarea rows="3" class="comment-area" v-model="formData.comment"></textarea>
            <input type="submit" name="submit" value="Submit" class="submitBtn">
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

const formData = ref({
    name: '',
    phoneNum: '',
    email: '',
    dateTime: '',
    file: null,
    gender: '',
    treated: '',
    hairType: '',
    service: '',
    comment: '',
});

function triggerFileInput() {
    document.getElementById('file').click();
}

function handleFileChange(event) {
    formData.file = event.target.files[0];
}

async function submitForm() {
    let postData = new FormData();
    console.log('submit', Object.entries(formData.value))

    for(const [key, value] of Object.entries(formData.value)){
        postData.append('key','value');
    }
    console.log(postData);
    try {
        const response = await axios.post(
            `/api/sendEmail`, postData
        );
    }catch(error){
        throw error;
    }
};

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
    height: 35px;
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