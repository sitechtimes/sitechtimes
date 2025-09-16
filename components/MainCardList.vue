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
    data() {
        return {
            homepages: [],
        };
    },
    async fetch() {
        const res = await this.$axios.get("/articles/homepage");

        const sorted = res.data.sort((a, b) => {
            const hasImageA = Boolean(a.imageUrl);
            const hasImageB = Boolean(b.imageUrl);

            if (hasImageA && !hasImageB) return -1;
            if (!hasImageA && hasImageB) return 1;
            return 0;
        });

        this.homepages = sorted;
    }
}
</script>

<style lang="scss">
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 2 columns
    grid-template-rows: repeat(10, 1fr); // 4 rows
}

.grid-item {
    height: 100%; // fill row height
}
</style>
