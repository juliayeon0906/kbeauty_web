<template>
    <div class="view-layout">
        <RouterView />
    </div>
</template>

<script>
import { RouterView } from 'vue-router';

</script>

<style scoped>
    .view-layout {
        display: grid;
        justify-content: center;
    }
</style>