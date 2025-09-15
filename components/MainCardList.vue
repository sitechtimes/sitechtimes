<template>
    <div class="grid-container">
        <div class="grid-item" v-for="n in 8" :key="n">
        </div>
    </div>
</template>

<script>
import CardComponent from "../components/MainPageCard.vue";
export default {
    name: 'GridExample'
}
</script>

<style lang="scss">
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 2 columns
    grid-template-rows: repeat(4, 1fr); // 4 rows
    gap: 10px;
    height: 600px; // optional size
    border: 2px solid #ccc;
}

.grid-item {
    height: 100%; // fill row height
}
</style>
