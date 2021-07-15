<template>
  <div>
    <h1>
      <NuxtLink class="block" v-for="article in articles" :to="`/articles/${article.slug}`" :key="article.slug">
        {{ article.title }}
      </NuxtLink>
    </h1>
    <CardComponent />
  </div>
</template>
<script>
import CardComponent from "../components/CardComponent";

export default {
  components: {
   CardComponent
  },
  data () {
    return {
      category: this.$route.params.category,
      articles: {}
    }
  },
  async mounted () {
    try {
      const articles = await this.$axios.get(`/articles?category=${this.category}`);
      this.articles = articles.data;
    }catch(e){
      await this.$router.push('/');
    }
  }
}
</script>
