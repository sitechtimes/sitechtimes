<template>
  <div class="duo-article-component-container">
    <DuoArticleComponent
      v-for="article in articles"
      :key="article.imageUrl"
      :articleUrl="'/articles/' + article.slug"
      :author="article.user.name"
      :category="article.category"
      :imageAlt="article.imageAlt"
      :imageUrl="article.imageUrl"
      :published="article.createdAt"
      :title="article.title"
      :size="{ default: 'medium', type: 'string' }"
      :clampSize="{ default: 'mediumClamp', type: 'string' }"
      class="trending-detail duo"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  articles: Array<any>;
}>();
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
.duo-article-component-container {
  display: flex;
  justify-content: space-between;
}

.duo {
  width: 48%;
}

@media only screen and (max-width: $small-screen) {
  .duo-article-component-container {
    flex-direction: column;
  }
  .duo {
    width: 100%;
  }
}
</style>
