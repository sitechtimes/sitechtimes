<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <h1>Home</h1>
    <NuxtLink class="block" v-for="homepage in homepages" :to="`/articles/${homepage.slug}`" :key="homepage.slug">
    {{ homepage.title }}
    </NuxtLink>
    <OpinionSlider :articles="articles"/>
  </div>
</template>

<script>
export default {
    data() {
      return {
        homepages: [],
        articles: [],
      }
    },
    async mounted() {
      const homepages = await this.$axios.get('/articles/homepage');
      this.homepages = homepages.data;

      const articles = await this.$axios.get(`/articles/homepage?category=entertainment`);
      this.articles = articles.data;

    }
  }
</script>
