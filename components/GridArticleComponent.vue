<template>
  <nuxt-link :to="articleUrl" class="grid-article-component">
    <img
      :src="imageUrl"
      :alt="imageAlt"
      class="grid-article-image dropshadow"
    />
    <h5 class="grid-article-info">
      <category-icon :category="category" class="grid-article-cat" />
    </h5>
    <h4 class="grid-article-title">{{ title }}</h4>
  </nuxt-link>
</template>

<script>
//import AuthorAndDate from './AuthorAndDate.vue';
//import CategoryIcon from './CategoryIcon.vue';
export default {
  name: "GridArticleComponent",
  props: {
    articleUrl: String,
    category: String,
    imageUrl: String,
    imageAlt: String,
    title: String
  }
};
</script>

<style lang="scss">
@import "../assets/variables";

.grid-article-component {
  display: flex;
  flex-direction: column;
  width: 32%;
  margin: 1rem 0;
  transition: all .3s;
}
.grid-article-component > h5,
.grid-article-component h4 {
  color: var(--on-background);
}
.grid-article-component > h4 {
  font-size: var(--h3);
}
.grid-article-info {
  margin: 1rem 0;
  display: flex;
}
.grid-article-image {
  width: 100%;
  border-radius: 1rem;
  height: 25rem;
  transition: all .3s;
  object-fit: cover;
}
.grid-article-component:hover {
  transform: translateY(-.5rem);
  z-index: 1;
}
.grid-article-component:hover .grid-article-image {
  box-shadow: var(--card-shadow);
}
.grid-article-cat {
  // margin: 0.2rem 0.5rem;
  margin-bottom: var(--category-bottom-margin);
  margin-top: var(--category-top-margin);
}
.grid-article-title {
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
}
.grid-article-data {
  padding-top: 1rem;
}

@media only screen and (max-width: 963px) {
  .grid-article-component {
    display: flex;
    flex-direction: column;
    width: 47%;
  }
  .trio-grid-container .grid-article-component:first-child{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .grid-article-image {
    width: 100%;
    border-radius: 1.5rem;
    height: 35rem;
    object-fit: cover;
  }
}

  @media only screen and (max-width: $mid-screen) {
    .trio-grid-container .grid-article-component:first-child {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .grid-article-image {
      width: 100%;
      border-radius: 1.5rem;
      height: 40rem;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: $small-screen) {
    .grid-article-component {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 5rem 0;
    }
    .grid-article-image {
      width: 100%;
      border-radius: 1.5rem;
      height: 30rem;
      object-fit: cover;
    }
    .grid-article-title {
      font-size: var(--h3);
    }
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
