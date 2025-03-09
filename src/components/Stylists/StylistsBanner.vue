<script setup lang="ts">
import BannerSkeleton from '@/components/BannerSkeleton.vue';

</script>

<template>
    <BannerSkeleton>
        <template #banner-content>
            <h2 class="text-[48px]">Our Stylists</h2>
        </template>
    </BannerSkeleton>
</template>
<style>
.banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/images/OUR_STYLISTS.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    filter: brightness(30%);
    z-index: -1;
}
</style>