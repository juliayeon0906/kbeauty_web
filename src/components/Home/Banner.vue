<template>
    <BannerSkeleton>
        <template #banner-content>
            <div>
                <h2 class="text-[48px]">K-Beauty<br>Hair Salon</h2>
                <h5 class="text-[36px] font-[300]">Find the beauty you deserve</h5>
                <router-link to="/reservation">
                    <button class="resBtn px-6 py-4 mt-4">
                        Book an appointment
                    </button>
                </router-link>
            </div> 
        </template>
    </BannerSkeleton>
</template>

<script setup>
import BannerSkeleton from '@/components/BannerSkeleton.vue';
</script>

<style>
    .resBtn {
        text-transform: uppercase;
        font-size: 15px;
        height: 54px;
        background-color: #FFBF00;
        border-radius: 5px;
        color: #2B2B2B;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
        transition: all 0.3s ease;
    }
    .resBtn:hover {
        background-color: #FF9D00;
        color: #F2F2F2; 
    }
    .banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/images/HERO_BANNER.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    filter: brightness(30%);
    z-index: -1;
    }
</style>