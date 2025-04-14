<script setup>
import BannerSkeleton from '../BannerSkeleton.vue';

const imageUrl = new URL('@/assets/images/Services_Banner_Background.jpg', import.meta.url).href;
</script>

<template>
    <BannerSkeleton :image-url="imageUrl" class="service-banner">
        <template #banner-content>
            <h2 class="text-[64px] px-6 z-10">Our Services</h2>
        </template>
    </BannerSkeleton>
</template>

<style scoped>
.service-banner{
    position: absolute;
}
</style>