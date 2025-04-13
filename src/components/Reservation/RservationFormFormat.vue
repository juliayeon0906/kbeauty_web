<template>
    <div class="input-container flex flex-col ">
        <form ref="form" action="post" method="POST" name="contact" class="form-container mb-4" @submit.prevent="sendForm">
            <label for="name">Your Full Name</label>
            <input type="text" name="name" required>
            <label for="phoneNum">Phone Number</label>
            <input type="number" name="phoneNum" required>
            <label for="email">Email Address</label>
            <input type="email" name="email" required>
            <label for="date">Preferred Date and Time</label>
            <DatePicker showTime hourFormat="12" showIcon fluid showButtonBar v-model="selectedDate" />
            <input type="hidden" name="date" :value="formattedDate" />
            <div class="flex flex-row gap-3">
                <div class="flex flex-col">
                    <label for="gender">Gender</label>
                    <input type="text" name="gender" required>
                </div>
                <div class="flex flex-col">
                    <label for="treated">Is Your Hair Colour Treated?</label>
                    <select name="treated" required class="h-[35px] rounded-[10px] bg-[#D9D9D9] px-2">
                        <option value="" disabled selected>Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <label for="hairType">Your Hair Type</label>
            <select name="hairType" required class="h-[35px] rounded-[10px] bg-[#D9D9D9] px-2">
                <option value="" disabled selected>Select</option>
                <option value="straight">Straight</option>
                <option value="wavy">Wavy</option>
                <option value="curly">Curly</option>
                <option value="coily">Coily</option>
            </select>
            <label for="service">Service Required</label>
            <select name="service" v-model="formData.service" required class="h-[35px] rounded-[10px] bg-[#D9D9D9] px-2">
                <option value="" disabled selected>Select</option>
                <option value="haircut">Haircut</option>
                <option value="colour">Colour (x Highlight)</option>
                <option value="highlight colour">Colour (w/ Highlight)</option>
                <option value="perm">Perm</option>
                <option value="heating perm">Heating Perm (Korean Style)</option>
                <option value="treatment">Treatment</option>
                <option value="other">Other</option>
            </select>
            <input type="text" v-if="formData.service === 'other'" name="customService" placeholder="Please specify" :required="formData.service==='other'">
            <label for="comment">Other Comment</label>
            <textarea rows="3" class="comment-area" name="comment"></textarea>
            <input type="submit" name="submit" value="Submit" class="submitBtn">
        </form>
        <span class="text-[10px]">
            <span class="text-red-500">*</span> Confirmation mail will be sent once we approve your reservation.
        </span>
    </div>
</template>
<script setup>

import DatePicker from 'primevue/datepicker';
import emailjs from '@emailjs/browser';
import { ref, computed } from 'vue';

const form = ref(null);
const selectedDate = ref(null);
const formData = ref({
    service: '',
});

const formattedDate = computed(() => {
    const option = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }
    if (!selectedDate.value) return '';
    return selectedDate.value.toLocaleString('en-US', option);
});

const sendForm = () => {
    if (!form.value) {
        console.error("Form not found");
        return;
    }

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.value, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }).then(
        () => {
            console.log('SUCCESS!');

            form.value.reset();
            formData.service = '';
            selectedDate.value = null;
            window.alert('✅ Your reservation request has been sent successfully!');
        },
        (error) => {
            console.log('FAILED', error);
            window.alert('❌ Failed to send. Please try again later.');
        }
    )
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