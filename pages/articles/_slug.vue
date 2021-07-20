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
    <ArticleComponent
      v-if="article.user"
      :category="article.category"
      :title="article.title"
      :author="article.user.name"
      :published="article.createdAt"
      description="This is a sample description because there is currently no article description property for each article in the api data. > _ <"
      :articleImg="article.imageUrl"
      :articleAlt="article.imageAlt"
      :articleText="article.content"
    />
    <!--  :articleAlt="" :author=""  -->
    <SidebarContainer
      v-if="article.user"
      :trending="categoryHome"
      :moreLikeThis="categoryRecent"
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
      categoryHome: this.$route.params.category,
      categoryRecent: this.$route.params.category,
      article: {}
    };
  },
  async mounted() {
    try {
      const article = await this.$axios.get(`/articles/${this.slug}`);
      // console.log(article.data);
      this.article = article.data;
      // console.log(this.article);

      const categoryHome = await this.$axios.get(
        `/articles/homepage?category=${this.article.category}`
      );
      // console.log(categoryHome.data);
      this.categoryHome = categoryHome.data;
      // console.log(this.categoryHome);

      const categoryRecent = await this.$axios.get(
        `/articles?category=${this.article.category}`
      );
      // console.log(categoryRecent.data);
      this.categoryRecent = categoryRecent.data;
      // console.log(this.categoryRecent);
      this.categoryRecent = this.categoryRecent.slice(0, 3);
    } catch (e) {
      await this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
@import "/../assets/variables";

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
