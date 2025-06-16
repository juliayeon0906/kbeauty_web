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
            <!-- <DatePicker showTime hourFormat="12" showIcon fluid showButtonBar v-model="selectedDate" /> -->
            <VueDatePicker v-model="selectedDate" :month-change-on-scroll="false" :clearable="false" required :is-24="false"></VueDatePicker>
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
                <option value="highlightColour">Colour (w/ Highlight)</option>
                <option value="perm">Perm</option>
                <option value="heatingPerm">Heating Perm (Korean Style)</option>
                <option value="treatment">Treatment</option>
                <option value="other">Other</option>
            </select>
            <textarea v-model="message" type="text" rows="5" class="comment-area" v-if="isCustomService" name="customService" :placeholder="otherServicePlaceholder" :required="isCustomService"></textarea>
            <label for="comment">Other Comment</label>
            <textarea rows="3" class="comment-area" name="comment"></textarea>
            <input type="submit" name="submit" value="Submit" class="submitBtn">
        </form>
        <span class="text-[10px]">
            <span class="text-red-500">*</span> Confirmation email will be sent once we approve your reservation.
        </span>
    </div>
</template>
<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import emailjs from '@emailjs/browser';
import { ref, computed, watch } from 'vue';

const form = ref(null);
const message = ref('');
const selectedDate = ref(new Date());
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

const isCustomService = computed(() => {
    const service = formData.value.service;
    return service === 'other' || service === 'colour' || service === 'highlightColour';
});

const otherServicePlaceholder = computed(() => {
    const service = formData.value.service;
    if (isCustomService && service === 'other'){
        return 'Please Specify'
    }
    return null;
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
            formData.value.service = '';
            selectedDate.value = null;
            window.alert('✅ Your reservation request has been sent successfully!');
        },
        (error) => {
            console.log('FAILED', error);
            window.alert('❌ Failed to send. Please try again later.');
        }
    )
};

watch(() => formData.value.service, (newVal) => {
    if (newVal === 'colour' || newVal === 'highlightColour') {
        message.value = 'Wish Colour: \n\nColour History: \n';
    } else {
        message.value = '';
    }
});
</script>

<style>
.form-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 550px;
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

/* Date Picker Style */
:root {
    --dp-border-radius: 10px;
}
.dp__theme_light {
    --dp-background-color: #D9D9D9;
}
.dp__outer_menu_wrap{
    background-color: #fff !important;
}

.submitBtn {
    background-color: #FFBF00;
    width: 121.9px;
    font-weight: 700;
    text-transform: uppercase;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
    transition: all 0.3s ease;
    padding: 5px 0;
    margin-top: 10px;
}
.submitBtn:hover {
    background-color: #FF9D00;
    color: #F2F2F2; 
}

@media only screen and (max-width: 786px) {
    .input-container {
        padding: 0 10px;
    }
    .form-container {
        width: 100%;
    }
    input {
        height: 30px;
        font-size: 12px;
    }
    select, label, textarea {
        font-size: 12px;
    }
    .submitBtn {
        width: 100px;
        font-size: 12px;
    }
    textarea {
        resize: vertical;
    }
    :root {
        --dp-font-size: 12px;
    }
}
</style>