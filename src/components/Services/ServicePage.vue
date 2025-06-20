<template>
  <div class="service-page-container">
    <ServiceBanner />
    <ServiceMenu />
  </div>
</template>

<script setup>
import ServiceBanner from './ServiceBanner.vue'
import ServiceMenu from './ServiceMenu.vue'
</script>

<style>
.service-page-container {
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
</style>
