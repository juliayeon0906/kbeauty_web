<script setup>
import { Carousel } from 'primevue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <Carousel
      :value="props.items"
      :num-visible="1"
      :num-scroll="1"
      circular
      :autoplay-interval="4000"
      :pt="{ indicatorButton: { class: 'indicator-button' } }"
    >
      <template #item="slotProps">
        <div class="review-item">
          <p class="reviewText">{{ slotProps.data.content }}</p>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style>
.review-item {
  display: flex;
  justify-content: center;
  padding: 0 12px 32px;
}

.reviewText {
  color: #e8e8e8;
  font-family: 'Noto Sans', serif;
  font-style: italic;
  font-size: 17px;
  font-weight: 300;
  line-height: 1.9;
  text-align: center;
  max-width: 640px;
}

.p-carousel .p-carousel-item {
  display: flex;
  justify-content: center;
}

.p-carousel-indicator-list {
  gap: 10px !important;
  padding-top: 24px !important;
}

.p-carousel .p-carousel-indicator-button {
  height: 6px;
  width: 24px;
  background-color: rgba(255, 255, 255, 0.2) !important;
  border-radius: 3px;
  transition: background-color 0.3s ease, width 0.3s ease;
}

.p-carousel .p-carousel-indicator.p-carousel-indicator-active .p-carousel-indicator-button {
  background-color: #ffbf00 !important;
  width: 36px;
}

.p-carousel-next-button,
.p-carousel-prev-button {
  visibility: hidden;
}

@media screen and (max-width: 700px) {
  .reviewText {
    font-size: 15px;
  }

  .p-carousel .p-carousel-indicator-button {
    visibility: hidden;
  }
}
</style>
