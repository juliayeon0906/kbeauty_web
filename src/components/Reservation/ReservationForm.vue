<template>
    <div class="reservation-form">
        <ReservationDetail/>
        <ReservationFormFormat/>
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
    flex-direction: row;
    gap: 49.5px;
}

@media only screen and (max-width: 700px) {
    .reservation-form {
        display: flex;
        flex-direction: column;
        gap: 70px;
    }
}
</style>