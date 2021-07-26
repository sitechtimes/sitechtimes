<template>
  <div class="article-page">
    <ArticleComponent v-if="article.title" :category="article.category" :title="article.title" :author="article.user.name" :published="article.createdAt" description="This is a sample description because there is currently no article description property for each article in the api data. > _ <" :articleImg="article.imageUrl" :articleAlt="article.imageAlt" :articleText="article.content"/>
    <SidebarContainer v-if="categoryHome && categoryRecent" :trending="categoryHome" :moreLikeThis="categoryRecent"/>
  </div>
</template>

<script>
import ArticleComponent from "../../components/ArticleComponent.vue";
import SidebarContainer from "../../components/SidebarContainer.vue";

export default {
  components: { ArticleComponent, SidebarContainer },
  data() {
    return {
      slug: this.$route.params.slug,
      categoryHome: null,
      categoryRecent: null,
      article: {}
    };
  },
  async mounted() {
    try {
      const article = await this.$axios.get(`/articles/${this.slug}`);
      this.article = article.data;

      const categoryHome = await this.$axios.get(`/articles/homepage?category=${this.article.category}`);
      this.categoryHome = categoryHome.data;

      const categoryRecent = await this.$axios.get(`/articles?category=${this.article.category}&q=3`);
      this.categoryRecent = categoryRecent.data;

    } catch (e) {
      await this.$router.push("/");
    }
  },
};
</script>

<style lang="scss">
@import '/../assets/variables';

  .article-page {
    overflow: hidden;
    margin: auto;
    display: flex;
    flex-direction: row;
  }
  #article-component {
    width: 65%;
  }
  .sidebar-container {
    width: 30%;
    margin-left: 5%;
  }
  @media only screen and (max-width: $midlarge-screen) {
    .article-page {
      flex-direction: column;
    }
    #article-component, .sidebar-container {
      width: 100%;
    }
    .sidebar-container {
      margin-left: 0;
    }
  }
</style>
