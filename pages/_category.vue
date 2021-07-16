<template>
  <div>
    <h1>{{ category }}</h1>
<!--    <h1>-->
<!--      <NuxtLink class="block" v-for="article in articles" :to="`/articles/${article.slug}`" :key="article.slug">-->
<!--        {{ article.title }}-->
<!--      </NuxtLink>-->
<!--    </h1>-->
    <CardComponent v-if="articles[0]" :title="articles[0].title" />
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
      articles: []
    }
  },
  async beforeMount () {
    try {
      const articles = await this.$axios.get(`/articles?category=${this.category}`);
      this.articles = articles.data;
      console.log(articles.data);
    }catch(e){
      await this.$router.push('/');
    }
  }
}
</script>
