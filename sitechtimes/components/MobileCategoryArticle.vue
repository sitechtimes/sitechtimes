<template>
  <nuxt-link :to="articleUrl" class="mobile-cat-article">
    <div class="mobile-cat-labels">
      <category-icon :category="category" />
      <!-- <author-and-date :author="author" :published="published" class="mobile-auth-date"/> -->
    </div>
    <a :href="articleUrl" class="mobile-cat-article-title">{{ title }}</a>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string;
  author: string;
  published: string;
  title: string;
  articleUrl: string;
}>();
</script>

<style scoped lang="scss">
.mobile-cat-article {
  border-bottom: 0.3rem solid var(--primary-color);
  margin-bottom: 2rem;
  display: inline-block;
  width: 90%;
}
.mobile-cat-article > a {
  color: var(--on-background);
}
.mobile-cat-labels {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.mobile-cat-article-title {
  font-size: var(--h3);
  font-weight: 700;
}
</style>

<!--<docs>-->
<!--This is what the articles on the individual category pages will look like. There is no picture for this component, only a label, author, date, and title. -->
<!--## Variables Used:-->
<!--&#45;&#45;primary-color-->
<!--## Examples-->
<!--```jsx-->
<!-- <MobileCategoryArticle category="entertainment" author="Daniel Briskman" published="July 14, 2021" title="Pokemon Gen 4 Sucks"/>-->
<!--```-->
<!--</docs>-->
