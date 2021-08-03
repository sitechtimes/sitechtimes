<template>
  <nuxt-link :to="'/articles/' + articleUrl" class="sidebar-article">
    <img :src="imgUrl" :alt="imgAlt" class="sidebar-img" />
    <div class="sidebar-article-details">
      <category-icon-sidebar :category="category"></category-icon-sidebar>
      <h4
        id="sidebar-article-details-title"
        v-if="title.length < 40">
        {{ title }}
      </h4>
      <h4
        id="sidebar-article-details-title"
        v-else>
        {{ title.substring(0, 40) + '...' }}
      </h4>
    </div>
  </nuxt-link>
</template>

<script>
import CategoryIconSidebar from "./CategoryIconSidebar.vue";
export default {
  components: { CategoryIconSidebar },
  name: "Sidebar",
  props: {
    category: String,
    author: String,
    published: Date,
    title: String,
    imgUrl: String,
    imgAlt: String,
    articleUrl: String
  },
};
</script>

<style lang="scss">
@import "../assets/variables";
:root {
  --sidebarArticleWidth: 100%;
  --sidebarImgWidth: 9rem;
  --sidebarSidePadding: min(2.5vw, 3rem);
  --sidebarDetailsPaddingLeft: 1.7rem;
  --toggleBorder: none;
  --centerSquareThumbnail: 50% 50%/100% 100% no-repeat;
}
.temp-img {
  width: 30vw;
  height: auto;
}
.sidebar-article {
  width: var(--sidebarArticleWidth);
  max-width: 50rem;
  display: flex;
  border: var(--toggleBorder);
  padding: 1.5rem var(--sidebarSidePadding);
}
.sidebar-article:hover {
  background-color: var(--hover);
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.sidebar-img {
  height: var(--sidebarImgWidth);
  width: var(--sidebarImgWidth);
  border-radius: 1rem;
  border: var(--toggleBorder);
  object-fit: cover;
  display: inline-block;
  vertical-align: middle;
}
.sidebar-article-details {
  max-width: 32.65rem;
  padding-left: var(--sidebarDetailsPaddingLeft);
  display: flex;
  flex-direction: column;
  display: inline-block;
}
#sidebar-article-details-title {
  font-weight: bold;
  font-size: var(--h5);
  line-height: 1.35;
  text-decoration: none;
  color: var(--black);
  margin: 0;
}
.sidebar-icon {
  font-size: 1.4rem;
  padding-right: 4px;
}
#author-icon,
#published-icon {
  font-size: 1.4rem;
}
.example-img {
  border: var(--toggleBorder);
  height: 11.7rem;
  width: 40rem;
}
@media only screen and (max-width: $midlarge-screen) {
  .sidebar-container {
    max-width: none;
  }
  .sidebar-article {
    padding: 1.5rem 0;
  }
  .sidebar-article:hover {
    background-color: unset;
  }
  #sidebar-article-details-title {
    font-size: var(--h4);
  }
}
@media only screen and (max-width: $mid-screen) {
  :root {
    --sidebarImgWidth: 17rem;
  }
  .sidebar-article-details {
    max-width: 100%;
  }
  .sidebar-article {
    max-width: none;
    width: 100%;
  }
  .sidebar-img {
    height: var(--sidebarImgWidth);
    width: var(--sidebarImgWidth);
  }
  #sidebar-article-details-title {
    font-size: var(--h3);
  }
}
</style>

<!--<docs>-->
<!--The Sidebar article is the article found in the sidebar and has an image on one side and the article's info on the other-->

<!--## Variables Used:-->
<!--&#45;&#45;sidebarSidePadding, &#45;&#45;sidebarArticleWidth, &#45;&#45;sidebarSidePadding, &#45;&#45;toggleBorder, &#45;&#45;sidebarDetailsPaddingLeft, &#45;&#45;sidebarImgWidth, &#45;&#45;centerSquareThumbnail, &#45;&#45;-->

<!--## Examples:-->

<!--```jsx-->
<!--<Sidebar author="Daniel Briskman" published="November 42, 2780" title="One Piece is Bad and here's why" imgUrl="https://dailyillini.com/wp-content/uploads/2021/01/A0122C1B-0C8D-4299-9E5B-2FA8F790C666.jpeg" imgAlt="Sad Man"/>-->
<!--```-->
<!--</docs>-->
