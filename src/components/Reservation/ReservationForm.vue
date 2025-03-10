<template>
    <div class="reservation-form">
        <div class="flex items-start">
            <ReservationDetail/>
            <ReservationFormFormat/>
        </div>
    </div>
</template>

<script setup>
import ReservationDetail from "@/components/Reservation/ReservationDetail.vue";
import ReservationFormFormat from "@/components/Reservation/RservationFormFormat.vue";
</script>

<style>
.reservation-form {
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
}
</style>