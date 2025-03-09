<script setup>
import {computed} from 'vue';
import { useRoute } from 'vue-router';
import Banner from './Home/Banner.vue';
import StylistsBanner from './Stylists/StylistsBanner.vue';

const route = useRoute();

const isHomePage = computed (() => route.name === 'Home');
const isStylistsPage = computed(() => route.name === 'Stylists');
</script>
<template>
    <div class="banner" >
        <div class="banner-items">
            <div v-if="isHomePage">
                <Banner/>
            </div>
            <div v-else-if="isStylistsPage">
                <StylistsBanner/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.banner {
    color: #F2F2F2;        ;
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 70vh;
    width: 100vw;
}
.banner-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>