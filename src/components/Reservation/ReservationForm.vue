<template>
  <div class="reservation-form">
    <ReservationDetail />
    <ReservationFormFormat />
  </div>
</template>

<script setup>
import ReservationDetail from '@/components/Reservation/ReservationDetail.vue'
import ReservationFormFormat from '@/components/Reservation/RservationFormFormat.vue'
</script>

<style>
.reservation-form {
  min-height: 100vh;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 0;
}

/* Left panel: detail */
.reservation-form > :first-child {
  padding: 140px 7% 80px;
  position: sticky;
  top: 0;
}

/* Right panel: form */
.reservation-form > :last-child {
  padding: 140px 7% 100px;
  background-color: #f9f9f7;
  border-left: 1px solid rgba(0, 0, 0, 0.06);
  min-height: 100vh;
}

/* Navbar switches to mobile (70px) at 1250px — reduce top padding for both panels */
@media only screen and (max-width: 1250px) {
  .reservation-form > :first-child {
    padding: 80px 7% 80px;
  }

  .reservation-form > :last-child {
    padding: 80px 7% 100px;
  }
}

@media only screen and (max-width: 960px) {
  .reservation-form {
    grid-template-columns: 1fr;
    align-content: start;
  }

  .reservation-form > :first-child {
    padding: 74px 6% 32px;
    position: static;
  }

  .reservation-form > :last-child {
    padding: 28px 6% 72px;
    border-left: none;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    min-height: unset;
  }
}

@media only screen and (max-width: 480px) {
  .reservation-form > :first-child {
    padding: 72px 5% 28px;
  }

  .reservation-form > :last-child {
    padding: 24px 5% 56px;
  }
}
</style>
