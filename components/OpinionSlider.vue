<template>
  <div class="opinion-section">
      <div class="scrolls">
      <TextBelowArticlePreview
      class="opinion-card"
      v-for="article in articles"
      :key="article.slug"
      :articleUrl="article.slug" 
      :author="article.user.name" 
      :published="article.createdAt" 
      :category="article.category" 
      :imageAlt="article.imageAlt" 
      :title="article.title" 
      :imageUrl="article.imageUrl"
      />
      </div>

 </div>
</template>

<script>

export default {
 name: "OpinionSlider",
 components: { },
 props: {
   articles: Array,
 }
}
</script>

<style>
.opinion-section{
    display: flex;
    flex-direction: column;
}
.span-div{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.scrolls{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 3rem auto;
    overflow-x: auto;
    overflow-y: hidden;
}
.opinion-card{
    margin-right: 1rem;
}
.scrolls::-webkit-scrollbar{
height: 0.8rem;
border-radius: 1.5rem;
background-color: var(--accent-color);
}
.scrolls::-webkit-scrollbar-thumb{
  background-color: var(--primary-color);
  height: 1.5rem;
border-radius: 1.5rem;
width: 10rem;
}
.scrollbar{
width: 70vw;
height: 1.5rem;
background-color: var(--accent-color);
border-radius: 1.5rem;
}
</style>

<!--<docs>-->
<!--This element is a slider used in the opinion section of our website. It displays part of an article and invites the user to scroll to see the other two articles. -->

<!--## Variables Used:-->
<!--&#45;&#45;primary-color-->
<!--&#45;&#45;acent-color-->

<!--## Examples-->

<!--```jsx-->
<!-- <OpinionSlider />-->
<!--```-->

<!--</docs>-->
