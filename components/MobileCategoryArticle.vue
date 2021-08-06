<template>
  <nuxt-link :to="articleUrl" class="mobile-cat-article">
    <div class="mobile-cat-labels">
      <category-icon :category="category" />
       <a :href="articleUrl" class="mobile-cat-article-title">{{ title }}</a>
       </div>
     <a :href="articleUrl" class="mobile-cat-img-container"
        ><img
          :href="articleUrl"
          :src="imageUrl"
          :alt="imageAlt"
          class="mobile-cat-article-img"
      /></a>
  </nuxt-link>
</template>

<script>
export default {
  name: "MobileCategoryArticle",
  props: ["category", "author", "published", "title", "articleUrl", "imageUrl", "imageAlt"]
};
</script>

<style>
.mobile-cat-article {
  border-bottom: 0.3rem solid var(--primary-color);
  margin-bottom: 2rem;
  display: flex;
    flex-direction: row;
  width: 100%;
   padding-bottom: 2rem; 
}
.mobile-cat-article > a {
  color: var(--on-background);
}
.mobile-cat-labels {
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
  margin-right: 2rem;
}
.mobile-cat-article-title {
  font-size: var(--h3);
  font-weight: 700;
}
.mobile-cat-img-container{
  align-self: center;
}
.mobile-cat-article-img{
      width: 20rem;
      height: 15rem;
      border-radius: 1rem;
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
