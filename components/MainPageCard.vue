<template>
  <nuxt-link :to="'/articles/' + articleUrl" class="card-article">
    <div class="card-article-details">
      <category-icon-sidebar :category="category"></category-icon-sidebar>
      <h4 id="card-article-details-title">
        {{ title }}
      </h4>
    </div>
    <img v-if="imgUrl" :src="imgUrl" :alt="imgAlt" class="card-img" />
  </nuxt-link>
</template>

<script>
import CategoryIconSidebar from "./CategoryIconSidebar.vue";
export default {
  components: { CategoryIconSidebar },
  name: "MainPageCard",
  props: {
    category: String,
    title: String,
    imgUrl: String,
    imgAlt: String,
    articleUrl: String,
  },
};
</script>

<style lang="scss">
@use "../assets/_variables" as *;

:root {
  --sidebarImgWidth: 9rem;
  --sidebarSidePadding: min(2.5vw, 3rem);
  --sidebarDetailsPaddingLeft: 1.7rem;
  --toggleBorder: none;
  --centerSquareThumbnail: 50% 50%/100% 100% no-repeat;
}

.sidebar-article>* {
  color: var(--on-background);
}

.temp-img {
  width: 30vw;
  height: auto;
}

.card-article {
  width: 100%;
  height: 100%;
  background-color: var(--light-gray);
  display: flex;
  box-shadow: var(--card-shadow);
  padding: 1.5rem var(--sidebarSidePadding);
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-article:hover {
  background-color: var(--hover);
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.card-img {
  height: var(--sidebarImgWidth);
  width: var(--sidebarImgWidth);
  border-radius: 1rem;
  border: var(--toggleBorder);
  object-fit: cover;
  display: inline-block;
  vertical-align: middle;
}

.card-article-details {
  max-width: 32.65rem;
  padding-left: var(--sidebarDetailsPaddingLeft);
  display: flex;
  flex-direction: column;
  display: inline-block;
}

#card-article-details-title {
  font-size: 1.55rem;
  font-weight: 500;
  line-height: 1.35;
  text-decoration: none;
  color: var(--on-background);
  margin: 0;
}

.card-icon {
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
  .card-container {
    max-width: none;
    margin-top: 5rem;
  }

  .card-article {
    padding: 1.5rem 0;
  }

  .card-article:hover {
    background-color: unset;
  }

  #card-article-details-title {
    font-size: var(--h4);
  }
}

@media only screen and (max-width: $mid-screen) {
  :root {
    --sidebarImgWidth: 17rem;
  }

  .card-article-details {
    max-width: 100%;
  }

  .card-article {
    max-width: none;
    width: 100%;
  }

  .card-img {
    height: var(--sidebarImgWidth);
    width: var(--sidebarImgWidth);
  }

  #card-article-details-title {
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
