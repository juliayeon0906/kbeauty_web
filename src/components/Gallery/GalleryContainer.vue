<template>
    <div class="gallery">
        <h2 class="gal-header">Gallery</h2>
        <div class="gallery-container">
            <div class="gallery-card-container" v-for="(image, index) in images" :key="index">
                <img :src="image" alt="Image" class="gallery-card">
            </div>
        </div> 
    </div>  
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from 'vue';

const images = ref([]);

onMounted(() => {
    const imageModules = import.meta.glob('@/assets/images/GALLERY/*.jpg', { eager: true });
    images.value = Object.values(imageModules).map((mod) => mod.default);
});
</script>

<style scoped>
.gallery {
    padding-top: 60px;
    padding-right: 3%;
    padding-left: 3%;
    margin-bottom: 20vh;
}
.gal-header{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    margin-bottom: 50px;
}
.gallery-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 400px);
    grid-template-rows: repeat(7, 450px);
    justify-content: center;
    gap: 20px;
}
.gallery-card-container {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: transform 0.5s ease;
}
.gallery-card-container:hover{
    transform: scale(1.05);
}
.gallery-card {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media only screen and (max-width: 1250px){
    .gallery-container {
        grid-template-columns: repeat(3, 30%);
        grid-template-rows: repeat(7, 10%);
    }
}

@media only screen and (max-width: 700px) {
    .gal-header{
        font-size: 40px;
    }
    .gallery-container {
        grid-template-columns: repeat(2, 45%);
        grid-template-rows: repeat(12, 10%);
    }
    .gallery{
        margin-bottom: 20vh;
    }
}
</style>