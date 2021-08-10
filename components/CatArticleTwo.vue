<template>

  <nuxt-link class="cat-article" :to="articleUrl">
    <div class="cat-img-div">
      <img
          :href="articleUrl"
          :src="imageUrl"
          :alt="imageAlt"
          class="cat-article-img"
      />
    </div>
    <div class="cat-article-img-content">
      <div class="cat-labels">
        <category-icon
          class="cat-article-icon"
          :category="category"
        ></category-icon>
        <!-- <author-and-date class="cat-article-authdate" :author="author" :published="published" /> -->
      </div>
      <h3 class="cat-title">{{ title }}</h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "CatArticleTwo",
  props: [
    "title",
    "author",
    "published",
    "articleUrl",
    "imageUrl",
    "imageAlt",
    "category"
  ]
};
</script>

<style lang="scss">
@import "../assets/variables";
.cat-article {
  display: flex;
  flex-direction: row;
}

.cat-article:hover {
  background-color: --grey;
}

.cat-article-img {
  /* these height + width things are arbitrary right now, they'll be more specific when the other category component is made */
  height: 23rem;
  width: 35rem;
  border-radius: 1.5rem;
  margin-right: 4rem;
}
.cat-article-img-content {
  width: 60%;
  // margin-left: 4rem;
}
.cat-title {
  font-size: 2.5rem;
  font-weight: 700;
  max-width: 70rem;
  color: var(--on-background) !important;
}
.cat-labels {
  display: flex;
}
.cat-article-authdate {
  margin: auto 0;
  line-height: 2.2rem;
   margin-bottom: var(--category-bottom-margin);
}
@media only screen and (max-width: $mid-screen) {
  .cat-article {
    display: flex;
    flex-direction: row;
    justify-content: center;
    // margin-left: 10rem;
  }
  .cat-article-img {
    height: 18.8rem;
    width: 26rem;
    border-radius: 1.5rem;
  }
  .cat-title {
    font-size: var(--h3);
    font-weight: 700;
    padding-top: 1rem;
    max-width: 60rem;
  }
  .cat-article-icon {
    padding-right: 1.5rem;
  }
}
@media only screen and (max-width: $x-small-screen) {
  .cat-article {
    display: flex;
  }
  .cat-article-icon {
    padding-right: 1.5rem;
  }
  .cat-article-authdate {
    margin: auto 0;
    line-height: 2.2rem;
    padding-top: 1rem;
  }
  @media only screen and (max-width: $mid-screen) {
    .cat-article {
      display: flex;
      flex-direction: row;
      justify-content: center;
      // margin-left: 10rem;
    }
    .cat-article-img {
      height: 18.8rem;
      width: 26rem;
      border-radius: 1.5rem;
    }
    .cat-title {
      font-size: var(--h3);
      font-weight: 700;
      padding-top: 1rem;
      max-width: 60rem;
    }
    .cat-article-icon {
      padding-right: 1.5rem;
    }
  }
  @media only screen and (max-width: $x-small-screen) {
    .cat-article {
      display: flex;
      flex-direction: row-reverse;
      margin: auto;
    }
    .cat-article-img {
      height: 14rem;
      width: 35vw;
      border-radius: 1.5rem;
      //   margin-left: 15rem;
      margin-right: 0;
    }
    .cat-article-image-content {
      justify-content: flex-end;
    }
    .cat-title {
      font-size: var(--h3);
      font-weight: 700;
      padding-top: 1rem;
      max-width: 40rem;
    }
    .cat-article-icon {
      width: 3rem;
      padding-right: 1.5rem;
      height: 3rem;
    }
  }
}
</style>

<!--<docs>-->
<!--This component is used in the category category. It is one of the two side articles on the side of the main category article picture.-->

<!--```jsx-->
<!--  <CategoryArticle articleUrl="https://theconversation.com/us/topics/rocket-science-195" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU" category="opinion" author="Charley Baluja" published="July 12, 2021" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."/>-->
<!--```-->

<!--</docs>-->
