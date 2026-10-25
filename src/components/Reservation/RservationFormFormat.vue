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
      <label class="required" for="name">Your Full Name</label>
      <input id="name" type="text" name="name" autocomplete="name" required />
      <label class="required" for="phoneNum">Phone Number</label>
      <input
        id="phoneNum"
        type="tel"
        name="phoneNum"
        inputmode="tel"
        autocomplete="tel"
        required
      />
      <label class="required" for="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        autocomplete="email"
        required
      />

      <label class="required" for="dateMonth">Preferred Date</label>
      <div class="date-row">
        <select id="dateMonth" v-model="dateMonth" aria-label="Month" required>
          <option value="" disabled selected>Month</option>
          <option v-for="(month, i) in MONTHS" :key="month" :value="i + 1">
            {{ month }}
          </option>
        </select>
        <input
          ref="dayInput"
          v-model.trim="dateDay"
          type="text"
          inputmode="numeric"
          pattern="(0?[1-9]|[12][0-9]|3[01])"
          maxlength="2"
          placeholder="DD"
          aria-label="Day"
          title="Day (1 - 31)"
          required
        />
        <input
          v-model.trim="dateYear"
          type="text"
          inputmode="numeric"
          pattern="[0-9]{4}"
          maxlength="4"
          placeholder="YYYY"
          aria-label="Year"
          title="Year (YYYY)"
          required
        />
      </div>

      <label class="required" for="timeHour">Preferred Time</label>
      <div class="time-row">
        <input
          id="timeHour"
          v-model.trim="timeHour"
          type="text"
          inputmode="numeric"
          pattern="(0?[1-9]|1[0-2])"
          maxlength="2"
          placeholder="HH"
          aria-label="Hour"
          title="Hour (1 - 12)"
          required
        />
        <span class="time-colon">:</span>
        <input
          v-model.trim="timeMinute"
          type="text"
          inputmode="numeric"
          pattern="[0-5][0-9]"
          maxlength="2"
          placeholder="MM"
          aria-label="Minute"
          title="Minute (00 - 59)"
          required
        />
        <select v-model="timePeriod" aria-label="AM or PM" required>
          <option value="" disabled selected>AM/PM</option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      <input type="hidden" name="date" :value="formattedDate" />

      <div class="field-row">
        <div class="flex flex-col">
          <label class="required" for="gender">Gender</label>
          <input id="gender" type="text" name="gender" required />
        </div>
        <div class="flex flex-col">
          <label class="required" for="treated"
            >Is Your Hair Colour Treated?</label
          >
          <select id="treated" name="treated" required>
            <option value="" disabled selected>Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <label class="required" for="hairType">Your Hair Type</label>
      <select id="hairType" name="hairType" required>
        <option value="" disabled selected>Select</option>
        <option value="straight">Straight</option>
        <option value="wavy">Wavy</option>
        <option value="curly">Curly</option>
        <option value="coily">Coily</option>
      </select>
      <label class="required" for="service">Service Required</label>
      <select id="service" v-model="formData.service" name="service" required>
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
      <textarea
        id="comment"
        rows="3"
        class="comment-area"
        name="comment"
      ></textarea>
      <input type="submit" name="submit" value="Submit" class="submitBtn" />
    </form>
    <span class="form-note">
      <span class="text-red-500">*</span> Confirmation email will be sent once
      we approve your reservation.
    </span>
  </div>
</template>
<script setup>
import emailjs from '@emailjs/browser'
import { ref, computed, watch, watchEffect } from 'vue'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const form = ref(null)
const dayInput = ref(null)
const message = ref('')
const dateMonth = ref('')
const dateDay = ref('')
const dateYear = ref('')
const timeHour = ref('')
const timeMinute = ref('')
const timePeriod = ref('')
const formData = ref({
  service: '',
})

const isFilled = (value) => value !== '' && value !== null

const selectedDate = computed(() => {
  const month = Number(dateMonth.value)
  const day = Number(dateDay.value)
  const year = Number(dateYear.value)
  if (!month || !day || !/^\d{4}$/.test(dateYear.value)) return null

  const hour12 = Number(timeHour.value)
  const minute = Number(timeMinute.value)
  const hasTime =
    isFilled(timeHour.value) && isFilled(timeMinute.value) && timePeriod.value
  const hour24 = hasTime
    ? (hour12 % 12) + (timePeriod.value === 'PM' ? 12 : 0)
    : 0

  const date = new Date(year, month - 1, day, hour24, hasTime ? minute : 0)
  // Reject overflowed dates such as February 30
  if (date.getMonth() !== month - 1 || date.getDate() !== day) return 'invalid'
  return date
})

const dateError = computed(() => {
  if (selectedDate.value === 'invalid') return 'Please enter a valid date.'
  if (selectedDate.value instanceof Date) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate.value < today) return 'Please choose a future date.'
  }
  return ''
})

watchEffect(() => {
  dayInput.value?.setCustomValidity(dateError.value)
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
  if (!(selectedDate.value instanceof Date)) return ''
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

const resetDateTime = () => {
  dateMonth.value = ''
  dateDay.value = ''
  dateYear.value = ''
  timeHour.value = ''
  timeMinute.value = ''
  timePeriod.value = ''
}

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
        resetDateTime()
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

<style scoped>
/* ── Form Container ── */
.input-container {
  width: 100%;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 560px;
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

label.required::after {
  content: ' *';
  color: #ef4444;
}

/* ── Text / Tel / Email Inputs ── */
input[type='text'],
input[type='tel'],
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
  min-width: 0;
  -webkit-appearance: none;
  appearance: none;
  transition: border-color 0.2s ease;
  outline: none;
}

input[type='text']:focus,
input[type='tel']:focus,
input[type='email']:focus {
  border-bottom-color: #ffbf00;
}

input::placeholder {
  color: #bbb;
}

/* ── Select ── */
select {
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid #ddd;
  border-radius: 0;
  padding: 0 22px 0 2px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  color: #1a1a1a;
  width: 100%;
  min-width: 0;
  cursor: pointer;
  -webkit-appearance: none;
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

select:invalid {
  color: #bbb;
}

select option {
  color: #1a1a1a;
}

/* ── Date / Time ── */
.date-row {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1.3fr);
  gap: 16px;
}

.time-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.time-row input[type='text'] {
  width: 56px;
  flex: 0 0 56px;
  text-align: center;
}

.time-row select {
  width: 104px;
  flex: 0 0 104px;
  margin-left: 8px;
}

.time-colon {
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #999;
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

/* ── Row group (gender + treated) ── */
.field-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
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
  -webkit-appearance: none;
  appearance: none;
  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease;
  box-shadow: 0 2px 10px rgba(255, 191, 0, 0.3);
}

.submitBtn:hover {
  background-color: #ff9d00;
  color: #fff;
  box-shadow: 0 4px 20px rgba(255, 157, 0, 0.45);
}

/* ── Confirm note ── */
.form-note {
  font-family: 'Noto Sans', sans-serif;
  font-size: 11px;
  color: #bbb;
  letter-spacing: 0.04em;
  margin-top: 12px;
}

/* ── Responsive ── */
@media only screen and (max-width: 786px) {
  .form-container {
    max-width: none;
    padding: 28px 20px;
  }

  label {
    font-size: 10px;
  }

  /* 16px keeps iOS Safari from zooming in when a field is focused */
  input[type='text'],
  input[type='tel'],
  input[type='email'],
  select,
  .comment-area {
    font-size: 16px;
  }

  .submitBtn {
    width: 100%;
    text-align: center;
    padding: 16px 0;
  }
}

@media only screen and (max-width: 480px) {
  .form-container {
    padding: 24px 16px;
  }

  .date-row {
    gap: 10px;
  }

  .time-row select {
    flex: 1 1 auto;
    width: auto;
  }

  .field-row {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }
}
</style>
