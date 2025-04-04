<script setup>
import BannerSkeleton from '@/components/BannerSkeleton.vue';
const imageUrl = new URL('@/assets/images/OUR_STYLISTS.jpg', import.meta.url).href;
</script>

<template>
    <BannerSkeleton :image-url="imageUrl">
        <template #banner-content>
            <h2 class="text-[48px]">Our Stylists</h2>
        </template>
    </BannerSkeleton>
</template>
