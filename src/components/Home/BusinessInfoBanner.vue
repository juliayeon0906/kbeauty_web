<script setup>
import { ref } from 'vue'
import ContactUsContainer from './ContactUsContainer.vue'
import businessHourBg from '@/assets/images/business_hour/Business_Hour.jpg'

const businessHour = ref([
  { day: 'Monday', hour: '10AM - 8PM' },
  { day: 'Tuesday', hour: '10AM - 7PM' },
  { day: 'Wednesday', hour: '10AM - 7PM' },
  { day: 'Thursday', hour: '10AM - 7PM' },
  { day: 'Friday', hour: '10AM - 8PM' },
  { day: 'Saturday', hour: '10AM - 7PM' },
  { day: 'Sunday', hour: '10AM - 6PM' },
])
</script>

<template>
  <div class="info-container px-10 py-8">
    <div
      class="business-hour-container"
      :style="{ backgroundImage: `url(${businessHourBg})` }"
    >
      <div class="hour-text-container flex flex-col items-center">
        <h2 class="business-title text-white">Business Hour</h2>
        <div class="hour-container flex gap-10">
          <ul class="hour-info">
            <li v-for="{ day, index } in businessHour" :key="index">
              {{ day }}
            </li>
          </ul>
          <ul class="hour-info">
            <li v-for="{ hour, index } in businessHour" :key="index">
              {{ hour }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ContactUsContainer />
  </div>
</template>

<style scoped>
.info-container {
  height: 430px;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 28px;
  justify-content: center;
  padding: 32px 40px 32px 40px;
  background-color: #2b2b2b;
}
.business-hour-container {
  width: 35%;
  height: 100%;
  border-radius: 4.5px;
  background: #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.hour-text-container {
  gap: 21px;
}
.hour-info {
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 700;
  gap: 14px;
  font-size: 16px;
}
.business-title {
  font-size: 32px;
}

/* @media only screen and (min-width: 1900px) {
    .hour-info {
        font-size: 16px;
    }
} */

@media only screen and (max-width: 1200px) {
  .info-container {
    height: 30vh;
    gap: 14px;
    padding: 32px 20px 32px 20px;
  }
  .hour-text-container {
    gap: 8px;
  }
  .hour-container {
    gap: 29px;
  }
  .business-hour-container {
    width: 100%;
    min-height: 202px;
  }
  .hour-info {
    font-size: 8px;
    gap: 10px;
  }
  .business-title {
    font-size: 16px;
  }
}

@media only screen and (max-width: 530px) {
  .info-container {
    flex-direction: column;
    align-items: center;
    padding: 0px;
    height: fit-content;
    overflow: visible;
    gap: 0px;
  }
  .hour-container {
    gap: 64px;
  }
  .business-hour-container {
    height: 460px;
  }
  .hour-info {
    font-size: 18px;
  }
  .business-title {
    font-size: 36px;
  }
}
</style>
