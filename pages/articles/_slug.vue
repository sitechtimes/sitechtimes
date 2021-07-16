<template>
  <div>
    <h1>
      {{ article.title }}
    </h1>

    <p class="mb-4">{{ article.category }}</p>

    <img v-if="article.imageUrl" :src="article.imageUrl" alt="image alt" />
    {{ article.imageUrl }}

    <p v-html="article.content"></p>

    <article-component
      title="Article Title"
      description="Article Description"
      articleText="article text blah blah"
    />
  </div>
</template>

<script>
import ArticleComponent from "../../components/ArticleComponent.vue";
export default {
  components: { ArticleComponent },
  data() {
    return {
      slug: this.$route.params.slug,
      article: {}
    };
  },
  async mounted() {
    try {
      const article = await this.$axios.get(`/articles/${this.slug}`);
      console.log(article.data);
      this.article = article.data;
    } catch (e) {
      await this.$router.push("/");
    }
  }
};
</script>
