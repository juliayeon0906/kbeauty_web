<template>
    <BannerSkeleton />
    <DescriptionsBanner />
    <ServicesBanner/>
    <CustomerExperiencesBanner/>
    <BusinessInfoBanner />
</template>

<script setup>
import BannerSkeleton from '@/components/BannerSkeleton.vue';
import CustomerExperiencesBanner from '@/components/Home/CustomerExperiencesBanner.vue';
import DescriptionsBanner from '@/components/Home/DescriptionsBanner.vue';
import ServicesBanner from '@/components/Home/ServicesBanner.vue';
import BusinessInfoBanner from '@/components/Home/BusinessInfoBanner.vue';
</script>

<style>
    
</style>