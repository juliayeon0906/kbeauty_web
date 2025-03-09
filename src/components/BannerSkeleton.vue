<script setup>

</script>
<template>
    <div class="banner" >
        <div class="banner-items">
            <slot name="banner-content"></slot>
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