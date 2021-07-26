<template>
  <div id="article-component">
    <category-icon :category=category />
    <h2 class="main-article-title">{{ title }}</h2>
    <!-- <p class="main-article-description">{{ description }}</p> -->
    <img
      class="main-article-img"
      :src=articleImg
      :alt=articleAlt
    />
    <section class="main-article-metadata">
      <author-and-date-article
        class="article-author-and-date"
        :author=author
        :published="this.$format(this.published)"
      />
      <div class="main-article-metadata-actions">
        <social-media-icons />
        <share-icon />
      </div>
    </section>
    <section class="main-article-text-section main-article-text" v-html="articleText">
      <!-- <p class="main-article-text">{{ articleText }}</p> -->
    </section>
  </div>
</template>

<script>
import AuthorAndDateArticle from "./AuthorAndDateArticle.vue";
import SocialMediaIcons from "./SocialMediaIcons.vue";
import ShareIcon from "./ShareIcon.vue";
import CategoryIcon from "./CategoryIcon.vue";

export default {
  name: "ArticleComponent",
  props: ["category", "title", "description", "articleText", "articleImg", "articleAlt", "author", "published"],
  components: {
    AuthorAndDateArticle,
    SocialMediaIcons,
    ShareIcon,
    CategoryIcon
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import '../assets/variables';

.main-article-title {
  margin: 2rem auto;
  font-weight: 600;
}
// .main-article-description {
//   font-style: italic;
//   font-size: var(--h4);
//   font-weight: 300;
//   margin: 2rem auto;
// }
.main-article-text-section p,
.main-article-text-section p em,
.main-article-text-section p strong,
.main-article-text-section p a,
.main-article-text-section li em,
.main-article-text-section li strong,
.main-article-text-section li a,
.main-article-text-section span,
.main-article-text ul li,
.main-article-text ul li span,
.main-article-text ol li,
.main-article-text ol li span { 
  font-family: var(--article-font);
  font-size: var(--h5);
  line-height: 3rem;
} 
.main-article-text-section p,
.main-article-text-section li {
  font-weight: 300;
  overflow-wrap: break-word;
}
.main-article-text ul li,
.main-article-text ul li span,
.main-article-text ol li,
.main-article-text ol li span {
  font-weight: 300;
  list-style-type: disc;
  list-style-position: inside;
}
.main-article-text ol li {
  list-style-type: decimal;
}
.main-article-text h1,
.main-article-text h2,
.main-article-text h3,
.main-article-text h4,
.main-article-text h5,
.main-article-text h6,
.main-article-text h1 strong,
.main-article-text h2 strong,
.main-article-text h3 strong,
.main-article-text h4 strong,
.main-article-text h5 strong,
.main-article-text h6 strong {
  font-family: var(--article-font);
  font-weight: 400;
}
.main-article-text h1 strong {
  font-size: var(--h1);
}
.main-article-text h2 strong {
  font-size: var(--h2);
}
.main-article-text h3 strong {
  font-size: var(--h3);
}
.main-article-text h4 strong {
  font-size: var(--h4);
}
.main-article-text h5 strong {
  font-size: var(--h5);
}
.main-article-text h6 strong{
  font-size: var(--small-text);
}
.main-article-img {
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
}
//
.main-article-metadata {
  display: flex;
  justify-content: space-between;
  margin: 4rem auto;
  flex-wrap: wrap;
}
.main-article-author-and-date {
  margin-bottom: 2rem;
}
.main-article-metadata-actions {
  display: flex;
}

@media only screen and (max-width: $mid-screen) {
.main-article-text ul li,
.main-article-text ul li span,
.main-article-text ol li,
.main-article-text ol li span, 
.main-article-text-section p,
.main-article-text-section p em,
.main-article-text-section p strong,
.main-article-text-section li em,
.main-article-text-section li strong,
.main-article-text-section span { 
  font-size: var(--h4);
  line-height: 4rem;
} 
// .main-article-description {
//   font-size: var(--h3);
//   line-height: 3.5rem;
// }
}
</style>
