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
    position: relative;
    overflow-y: auto;
}
</style>