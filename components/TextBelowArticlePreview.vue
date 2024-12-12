<template>
  <nuxt-link :to="articleUrl" class="text-below-preview-article">
    <img :src="imageUrl" :alt="imageAlt" class="article-image dropshadow" />
    <h5 class="article-info">
      <category-icon :category="category" class="article-cat" />
      <author-and-date
        :author="author"
        :published="published"
        class="article-data"
      />
    </h5>
    <h4 class="article-title">{{ title }}</h4>
  </nuxt-link>
</template>

<script>
//import AuthorAndDate from './AuthorAndDate.vue';
//import CategoryIcon from './CategoryIcon.vue';
export default {
  name: "TextBelowArticlePreview",
  props: {
    author: String,
    articleUrl: String,
    published: Date,
    category: String,
    imageUrl: String,
    imageAlt: String,
    title: String,
  },
};
</script>

<style lang="scss">
@use "../assets/_variables" as *;

.text-below-preview-article {
  display: flex;
  flex-direction: column;
}
.article-info {
  margin: 1rem 0;
  display: flex;
}
.article-image {
  width: 100%;
  border-radius: 1.5rem;
  height: 20rem;
}
.article-cat {
  margin-right: 2rem;
}
.article-title {
  margin: 0 0.2rem;
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
}
.article-data {
  padding-top: 1rem;
}
</style>

<!--<docs>-->
<!--This is one of the ways articles on the homepage will be represented (currently Opinion and News).-->

<!--## Variables Used:-->
<!--&#45;&#45;font-->

<!--## Examples-->

<!--```jsx-->
<!--<text-below-article-preview articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"/>-->
<!--```-->

<!--</docs>-->
