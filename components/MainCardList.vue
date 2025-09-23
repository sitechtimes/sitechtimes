<template>
    <div class="grid-container">
        <div class="grid-item" v-for="article in homepages" :key="article.slug">
            <MainPageCard :category="article.category" :author="article.user.name" :published="article.createdAt"
                :title="article.title" :imgUrl="article.imageUrl" :imgAlt="article.imageAlt"
                :articleUrl="article.slug" />
        </div>
    </div>
</template>

<script>
import MainPageCard from "../components/MainPageCard.vue";
export default {
    name: 'GridExample',
    props: {
        homepages: Array
    }
}
</script>

<style lang="scss">
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 1fr);
    margin-top: 20px;
    gap: 10px;
}
</style>
