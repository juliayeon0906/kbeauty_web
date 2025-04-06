<script setup>
import { Carousel } from 'primevue';
import { onMounted } from 'vue';
const props = defineProps({
    items: Array,
})
</script>

<template>
    <div class="card">
        <Carousel :value="props.items" :num-visible="1" :num-scroll="1" circular :autoplayInterval="3000" :pt="{indicatorButton: {class: 'indicator-button'}}" >
            <template #item="slotProps">
                <div class="max-w-[465px]">
                    <div class="mb-7">
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
    line-height: 100%;
}

.p-carousel .p-carousel-item{
    display: flex;
    justify-content: center;
}

.p-carousel-indicator-list {
    gap: 20px !important;
}

/* Default inactive state for indicator buttons */
.p-carousel .p-carousel-indicator-button {
    height: 15px;
    width: 15px;
    background-color: #D9D9D9 !important; /* Inactive state */
    border-radius: 50%;
}

/* Active state for indicator buttons */
.p-carousel .p-carousel-indicator.p-carousel-indicator-active .p-carousel-indicator-button {
    background-color: #FFBF00 !important; /* Active state */
}

.indicator-button {
    background-color: #FFBF00 !important;
}

@media screen and (max-width: 700px) {
    .p-carousel .p-carousel-indicator-button, .p-carousel-next-button, .p-carousel-prev-button {
        visibility: hidden;
    }
}
</style>