<template>
  <div class="input-container flex flex-col">
    <form
      ref="form"
      action="post"
      method="POST"
      name="contact"
      class="form-container mb-4"
      @submit.prevent="sendForm"
    >
      <label for="name">Your Full Name</label>
      <input type="text" name="name" required />
      <label for="phoneNum">Phone Number</label>
      <input type="number" name="phoneNum" required />
      <label for="email">Email Address</label>
      <input type="email" name="email" required />
      <label for="date">Preferred Date and Time</label>
      <!-- <DatePicker showTime hourFormat="12" showIcon fluid showButtonBar v-model="selectedDate" /> -->
      <VueDatePicker
        v-model="selectedDate"
        :month-change-on-scroll="false"
        :clearable="false"
        required
        :is-24="false"
      ></VueDatePicker>
      <input type="hidden" name="date" :value="formattedDate" />
      <div class="flex flex-row gap-3">
        <div class="flex flex-col">
          <label for="gender">Gender</label>
          <input type="text" name="gender" required />
        </div>
        <div class="flex flex-col">
          <label for="treated">Is Your Hair Colour Treated?</label>
          <select
            name="treated"
            required
            class="h-[35px] rounded-[10px] bg-[#D9D9D9] px-2"
          >
            <option value="" disabled selected>Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <label for="hairType">Your Hair Type</label>
      <select
        name="hairType"
        required
        class="h-[35px] rounded-[10px] bg-[#D9D9D9] px-2"
      >
        <option value="" disabled selected>Select</option>
        <option value="straight">Straight</option>
        <option value="wavy">Wavy</option>
        <option value="curly">Curly</option>
        <option value="coily">Coily</option>
      </select>
      <label for="service">Service Required</label>
      <select
        v-model="formData.service"
        name="service"
        required
        class="h-[35px] rounded-[10px] bg-[#D9D9D9] px-2"
      >
        <option value="" disabled selected>Select</option>
        <option value="haircut">Haircut</option>
        <option value="colour">Colour (x Highlight)</option>
        <option value="highlightColour">Colour (w/ Highlight)</option>
        <option value="perm">Perm</option>
        <option value="heatingPerm">Heating Perm (Korean Style)</option>
        <option value="treatment">Treatment</option>
        <option value="other">Other</option>
      </select>
      <textarea
        v-if="isCustomService"
        v-model="message"
        type="text"
        rows="5"
        class="comment-area"
        name="customService"
        :placeholder="otherServicePlaceholder"
        :required="isCustomService"
      ></textarea>
      <label for="comment">Other Comment</label>
      <textarea rows="3" class="comment-area" name="comment"></textarea>
      <input type="submit" name="submit" value="Submit" class="submitBtn" />
    </form>
    <span class="text-[10px]">
      <span class="text-red-500">*</span> Confirmation email will be sent once
      we approve your reservation.
    </span>
  </div>
</template>
<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import emailjs from '@emailjs/browser'
import { ref, computed, watch } from 'vue'

const form = ref(null)
const message = ref('')
const selectedDate = ref(new Date())
const formData = ref({
  service: '',
})

const formattedDate = computed(() => {
  const option = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }
  if (!selectedDate.value) return ''
  return selectedDate.value.toLocaleString('en-US', option)
})

const isCustomService = computed(() => {
  const service = formData.value.service
  return (
    service === 'other' || service === 'colour' || service === 'highlightColour'
  )
})

const otherServicePlaceholder = computed(() => {
  const service = formData.value.service
  if (isCustomService.value && service === 'other') {
    return 'Please Specify'
  }
  return null
})

const sendForm = () => {
  if (!form.value) {
    console.error('Form not found')
    return
  }

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.value,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        console.log('SUCCESS!')

        form.value.reset()
        formData.value.service = ''
        selectedDate.value = null
        window.alert('✅ Your reservation request has been sent successfully!')
      },
      (error) => {
        console.log('FAILED', error)
        window.alert('❌ Failed to send. Please try again later.')
      }
    )
}

watch(
  () => formData.value.service,
  (newVal) => {
    if (newVal === 'colour' || newVal === 'highlightColour') {
      message.value = 'Wish Colour: \n\nColour History: \n'
    } else {
      message.value = ''
    }
  }
)
</script>

<style>
/* ── Form Container ── */
.input-container {
  width: 100%;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 560px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 40px;
}

/* ── Labels ── */
label {
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #999;
  display: block;
  margin-top: 20px;
  margin-bottom: 6px;
}

/* ── Text / Number / Email Inputs ── */
input[type='text'],
input[type='number'],
input[type='email'] {
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid #ddd;
  border-radius: 0;
  padding: 0 2px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  color: #1a1a1a;
  width: 100%;
  transition: border-color 0.2s ease;
  outline: none;
}

input[type='text']:focus,
input[type='number']:focus,
input[type='email']:focus {
  border-bottom-color: #ffbf00;
}

/* ── Select ── */
select {
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid #ddd;
  border-radius: 0;
  padding: 0 2px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  color: #1a1a1a;
  width: 100%;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 6px center;
  transition: border-color 0.2s ease;
  outline: none;
}

select:focus {
  border-bottom-color: #ffbf00;
}

/* ── Textarea ── */
.comment-area {
  background: transparent;
  border: none;
  border-bottom: 1.5px solid #ddd;
  border-radius: 0;
  padding: 10px 2px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  color: #1a1a1a;
  width: 100%;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s ease;
  display: block;
}

.comment-area:focus {
  border-bottom-color: #ffbf00;
}

/* ── Date Picker ── */
:root {
  --dp-border-radius: 0px;
  --dp-border-color: transparent;
  --dp-border-color-hover: transparent;
  --dp-font-family: 'Noto Sans', sans-serif;
  --dp-font-size: 14px;
  --dp-input-padding: 0 2px;
}

.dp__theme_light {
  --dp-background-color: transparent;
  --dp-border-color: transparent;
  --dp-text-color: #1a1a1a;
  --dp-hover-color: rgba(255, 191, 0, 0.1);
  --dp-hover-text-color: #1a1a1a;
  --dp-primary-color: #ffbf00;
  --dp-primary-text-color: #1a1a1a;
}

.dp__outer_menu_wrap {
  background-color: #fff !important;
}

/* Add bottom border to datepicker input */
:deep(.dp__input) {
  border: none;
  border-bottom: 1.5px solid #ddd;
  border-radius: 0;
  padding: 0 2px;
  height: 40px;
  font-size: 14px;
  background: transparent;
  transition: border-color 0.2s ease;
}

:deep(.dp__input:focus) {
  border-bottom-color: #ffbf00;
  box-shadow: none;
}

:deep(.dp__input_icon) {
  display: none;
}

/* ── Row groups (gender + treated) ── */
.flex.flex-row {
  gap: 24px;
}

/* ── Submit ── */
.submitBtn {
  margin-top: 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 14px 36px;
  background-color: #ffbf00;
  color: #1a1a1a;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 10px rgba(255, 191, 0, 0.3);
}

.submitBtn:hover {
  background-color: #ff9d00;
  color: #fff;
  box-shadow: 0 4px 20px rgba(255, 157, 0, 0.45);
}

/* ── Confirm note ── */
.text-\[10px\] {
  font-family: 'Noto Sans', sans-serif;
  font-size: 11px;
  color: #bbb;
  letter-spacing: 0.04em;
  margin-top: 12px;
}

/* ── Responsive ── */
@media only screen and (max-width: 786px) {
  .form-container {
    width: 100%;
    padding: 28px 20px;
  }

  label {
    font-size: 9px;
  }

  input[type='text'],
  input[type='number'],
  input[type='email'],
  select,
  .comment-area {
    font-size: 13px;
  }

  :root {
    --dp-font-size: 13px;
  }

  .submitBtn {
    width: 100%;
    text-align: center;
    padding: 14px 0;
  }
}

@media only screen and (max-width: 480px) {
  .form-container {
    padding: 24px 16px;
  }

  .flex.flex-row {
    flex-direction: column;
    gap: 0;
  }
}
</style>
