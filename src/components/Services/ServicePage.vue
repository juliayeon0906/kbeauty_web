<template>
    <div class="service-page-container">
        <ServiceBanner/>
        <ServiceMenu/>
    </div>  
</template>

<script setup>
import ServiceBanner from './ServiceBanner.vue';
import ServiceMenu from './ServiceMenu.vue';
</script>

<style>
.service-page-container {
    min-height: 100vh;
    margin-bottom: 30vh;
}

@media only screen and (max-width: 1200px) {
    .service-page-container {
        margin-bottom: 60vh;
    }
}
</style>