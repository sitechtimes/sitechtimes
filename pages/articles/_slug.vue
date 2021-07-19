<template>
  <div class="article-page">
    <!-- <h1>
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
    /> -->
    <ArticleComponent v-if="article.user" :category="article.category" :title="article.title" :author="article.user.name" :published="article.createdAt" description="This is a sample description because there is currently no article description property for each article in the api data. > _ <" :articleImg="article.imageUrl" :articleAlt="article.imageAlt" :articleText="article.content"/>
    <!--  :articleAlt="" :author=""  -->
    <SidebarContainer />
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
      console.log(this.article);
    } catch (e) {
      await this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
  .article-page {
    width: 120rem;
    overflow: scroll;
    padding: 10rem 0;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
  #article-component {
    width: 75rem;
  }
  .sidebar-container {
    width: 40rem;
  }
</style>