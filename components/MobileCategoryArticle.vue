<template>
  <nuxt-link :to="articleUrl" class="mobile-cat-article">
    <div class="mobile-cat-labels">
   <category-icon :category="category" />
   <!-- <author-and-date :author="author" :published="published" class="mobile-auth-date"/> -->
   </div>
   <a :href="articleUrl" class="mobile-cat-article-title" >{{title}}</a>

  </nuxt-link>
</template>

<script>
export default {
name: "MobileCategoryArticle",
props: ["category", "author", "published", "title", "articleUrl"]
}
</script>

<style>
.mobile-cat-article{
      border-bottom: .3rem solid var(--primary-color);
      margin-bottom: 2rem;
       display: inline-block;
}
.mobile-cat-labels{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.mobile-auth-date{
  margin-left: 1.7rem;
}
.mobile-cat-article-title{
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
