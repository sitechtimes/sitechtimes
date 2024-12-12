<template>
  <div class="article-page global-container">
    <ArticleComponent
      v-if="article.title"
      :category="article.category"
      :title="article.title"
      :author="article.user.name"
      :published="article.createdAt"
      :articleImg="article.imageUrl"
      :articleAlt="article.imageAlt"
      :articleText="article.content"
      :articleUrl="slug"
      :webUrl="'sitechtimes.com' + '/articles/' + slug"
    />
    <SidebarContainer
      v-if="categoryHome && categoryRecent"
      :trending="categoryHome"
      :moreLikeThis="categoryRecent"
    />
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
      article: {},
      baseURL: process.env.DOMAIN,
    };
  },

  async fetch() {
    try {
      const article = await this.$axios.get(
        `/articles/${this.$route.params.slug}`
      );
      this.article = article.data;
      const categoryHome = await this.$axios.get(
        `/articles/homepage?category=${this.article.category}`
      );
      this.categoryHome = categoryHome.data;
      const categoryRecent = await this.$axios.get(
        `/articles?category=${this.article.category}&q=3`
      );
      this.categoryRecent = categoryRecent.data.articles;
    } catch (e) {
      await this.$router.push("/");
    }
  },
};
</script>

<style lang="scss">
@use "../../assets/_variables" as *;
.article-page,
#article-component,
.sidebar-container {
  overflow-x: hidden;
}
.article-page {
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
  #article-component,
  .sidebar-container {
    width: 100%;
  }
  .sidebar-container {
    margin-left: 0;
  }
}
</style>
