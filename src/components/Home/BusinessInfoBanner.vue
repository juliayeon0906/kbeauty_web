<script setup>
import { ref, onMounted } from 'vue'
import ContactUsContainer from './ContactUsContainer.vue'
import businessHourBg from '@/assets/images/business_hour/Business_Hour.webp'
import { BUSINESS_HOURS_CSV_URL, DEFAULT_BUSINESS_HOURS } from '@/constants'
import { fetchBusinessHours } from '@/utils/businessHours'

const businessHour = ref(DEFAULT_BUSINESS_HOURS)

onMounted(async () => {
  if (!BUSINESS_HOURS_CSV_URL) return
  try {
    businessHour.value = await fetchBusinessHours()
  } catch (error) {
    console.warn('Using default business hours:', error)
  }
})
</script>

<template>
  <div class="info-container">
    <div
      class="business-hour-container"
      :style="{ backgroundImage: `url(${businessHourBg})` }"
    >
      <div class="hour-overlay" />
      <div class="hour-text-container">
        <div class="gold-line" />
        <h2 class="business-title">Business Hours</h2>
        <div class="hour-table">
          <ul class="hour-col">
            <li v-for="(item, i) in businessHour" :key="i">{{ item.day }}</li>
          </ul>
          <ul class="hour-col hour-col--gold">
            <li v-for="(item, i) in businessHour" :key="i">
              {{ item.hour }}
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
  width: 100%;
  display: flex;
  gap: 2px;
  background-color: #1a1a1a;
}

/* ── Business Hours ── */
.business-hour-container {
  position: relative;
  width: 38%;
  min-height: 460px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.hour-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.62);
}

.hour-text-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
}

.gold-line {
  width: 32px;
  height: 2px;
  background-color: #ffbf00;
}

.business-title {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 4px;
}

.hour-table {
  display: flex;
  gap: 40px;
}

.hour-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #ccc;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  /* Day and hour columns are separate lists, so a wrapped line would misalign rows */
  white-space: nowrap;
}

.hour-col--gold {
  color: #ffbf00;
  font-weight: 500;
}

/* ── Responsive ── */
@media only screen and (max-width: 900px) {
  .info-container {
    flex-direction: column;
    gap: 0;
  }

  .business-hour-container {
    width: 100%;
    min-height: 360px;
  }

  .hour-text-container {
    padding: 48px 10%;
  }
}

@media only screen and (max-width: 500px) {
  .business-title {
    font-size: 18px;
  }

  .hour-col {
    font-size: 13px;
  }
}
</style>
