<template>
  <nuxt-link class="category-text-below-preview" :to="articleUrl">
    <div class="category-text-below-img-div">
      <img
        :href="articleUrl"
        :src="imageUrl"
        :alt="imageAlt"
        class="article-image dropshadow"
      />
    </div>
    <div class="category-info">
      <category-icon :category="category" class="category-cat" />
      <!-- <author-and-date :author="author" :published="published" class="category-data" /> -->
    </div>
    <a :href="articleUrl" class="category-title">{{ title }}</a>
  </nuxt-link>
</template>

<script>
//import AuthorAndDate from './AuthorAndDate.vue';
//import CategoryIcon from './CategoryIcon.vue';
export default {
  name: "CategoriesTextBelow",
  props: {
    author: String,
    articleUrl: String,
    published: Date,
    category: String,
    imageUrl: String,
    imageAlt: String,
    title: String
  }
};
</script>

<style lang="scss">
.category-text-below-preview {
  display: flex;
  flex-direction: column;
  //  width: 46.1rem;
  //  height: 37.1rem;
  width: 100%;
  height: 100%;
}
.category-text-below-preview:hover .article-image {
  transition: 0.3s ease-out;
  opacity: 0.9;
  transform: scale(1.02);
}
.category-text-below-preview:hover .category-title {
  text-decoration: underline;
}
.category-text-below-preview:hover .category-text-below-img-div {
  overflow: hidden;
}
.category-info {
  display: flex;
  margin-top: 1rem;
}
.category-text-below-img-div {
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
  background: black;
}
.article-image {
  object-fit: cover;
  border-radius: 1.5rem;
  height: 100%;
}
.category-cat {
  margin-right: 2rem;
  margin-bottom: var(--category-bottom-margin);
  margin-top: var(--category-top-margin);
}
.category-title {
  margin: 0;
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
  font-size: var(--h3);
  color: var(--on-background) !important;
}
.category-data {
  padding-top: 1rem;
}
@import "../assets/variables";
@media only screen and (max-width: $mid-screen) {
  .category-text-below-img-div {
    width: 100%;
  }
}
@media only screen and (max-width: $small-screen) {
  .category-text-below-img-div {
    width: 100%;
  }
}
@media only screen and (max-width: $x-small-screen) {
  .category-cat {
    margin-right: 1rem;
  }
  .category-data {
    margin-right: 0.25rem;
  }
  .category-info {
    width: 35rem;
  }
  .category-text-below-img-div {
    width: 37rem;
  }
  .category-title {
    width: 37rem;
  }
}
</style>

<!--<docs>-->
<!--This is one of the ways articles on the homepage will be represented (currently Opinion and News).-->

<!--## Used-->

<!--This component has a lot of props - a detailed explanation of how to use it is below:-->

<!--1) AuthorAndDate - the following are inputted into the other component AuthorAndDate-->

<!--"author": The author of the article being written-->

<!--"published": The date the article was published-->

<!--2) CategoryIcon - the following are inputted into the other component CategoryIcon-->

<!--"category": The category of the article (Opinion, entertainment etc)-->

<!--3) Unique-->

<!--"articleUrl": This should be the link to the article being advertized, whatever webpage it is-->

<!--"imageUrl": All Articles should have an image - this image should be linked here which will put the image ontop of the article for the User-->

<!--"imageAlt": This is in case the image cannot load: The text inputted will instead appear-->

<!--"title": The Title of the article which will appear on the bottom in this case.-->

<!--## Variables Used:-->

<!--&#45;&#45;font: If a them changes the font the font's in this component will change-->

<!--## Examples-->

<!--```jsx-->
<!--<text-below-opinion-preview articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"/>-->
<!--```-->

<!--</docs>-->
