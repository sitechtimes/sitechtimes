<template>
  <div class="duo-article-component-container">
    <DuoArticleComponent
            v-for="article in articles"
            :articleUrl="'/articles/' + article.slug"
            :author="article.user.name"
            :published="article.createdAt"
            :category="article.category"
            :imageTitle="article.imageAlt"
            :title="article.title"
            :imageUrl="article.imageUrl"
            :key="article.imageUrl"
            class="trending-detail duo"
            size="small"
      />
  </div>
</template>

<script>
import DuoArticleComponent from "./DuoArticleComponent";

export default {
  name: "DuoArticleContainer",
  components: {
   DuoArticleComponent
  },
  props: {
    articles: Array
  }
}
</script>

<style lang="scss">
@import "../assets/variables";
  .duo-article-component-container{
    display: flex;
    justify-content: space-between;
  }

  .duo {
    width: 48%;
  }

@media only screen and (max-width: $small-screen){
  .duo-article-component-container{
    flex-direction: column;
  }
  .duo{
    width: 100%;
  }
}
</style>
