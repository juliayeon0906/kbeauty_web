<script setup>
import { Carousel } from 'primevue';
import { onMounted } from 'vue';
const props = defineProps({
    items: Array,
})
</script>

<template>
    <div class="card">
        <Carousel :value="props.items" :num-visible="1" :num-scroll="1" circular :pt="{indicatorButton: {class: 'indicator-button'}}" >
            <template #item="slotProps">
                <div class="m-5 p-4">
                    <div class="m-4 relative">
                        <span class="reviewText">
                            {{ slotProps.data.content }}
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<style>
.reviewText {
    color: white;
    font-family: 'Noto Sans', serif;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
}
.p-carousel .p-carousel-prev-button, .p-carousel-next-button{
    color: #FFBF00 !important;
}

.indicator-button {
    background-color: #FFBF00 !important;
}

</style>