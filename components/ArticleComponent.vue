<template>
  <div id="article-component">
    <category-icon :category=category />
    <h2 class="main-article-title">{{ title }}</h2>
    <p class="main-article-description">{{ description }}</p>
    <img
      class="main-article-img"
      :src=articleImg
      :alt=articleAlt
    />
    <section class="main-article-metadata">
      <author-and-date
        class="article-author-and-date"
        :author=author
        :published=published
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
import AuthorAndDate from "./AuthorAndDate.vue";
import SocialMediaIcons from "./SocialMediaIcons.vue";
import ShareIcon from "./ShareIcon.vue";
import CategoryIcon from "./CategoryIcon.vue";

export default {
  name: "ArticleComponent",
  props: ["category", "title", "description", "articleText", "articleImg", "articleAlt", "author", "published"],
  components: {
    AuthorAndDate,
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
.main-article-description {
  font-style: italic;
  font-size: var(--h4);
  font-weight: 300;
  margin: 2rem auto;
}
.main-article-text-section p,
.main-article-text-section p em,
.main-article-text-section p strong,
.main-article-text-section span { 
  font-size: var(--h4);
} 
.main-article-text-section p {
  font-weight: 300;
  word-break: break-all;
}
.main-article-text ul li,
.main-article-text ul li span,
.main-article-text ol li,
.main-article-text ol li span {
  font-size: var(--h4);
  font-weight: 300;
  list-style-type: disc;
  list-style-position: inside;
}
.main-article-text ol li {
  list-style-type: decimal;
}
.main-article-text h1,
.main-article-text h2,
.main-article-text h3 {
  font-weight: 400;
}
.main-article-text h1 {
  font-size: var(--h1);
}
.main-article-text h2 {
  font-size: var(--h2);
}
.main-article-text h3 {
  font-size: var(--h3);
}
.main-article-text h4 {
  font-size: var(--h4);
}
.main-article-text h5 {
  font-size: var(--h5);
}
.main-article-text h6 {
  font-size: var(--small-text);
}
.main-article-img {
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
}

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

@media only screen and (max-width: $x-small-screen) {
    .main-article-text-section > * { 
  font-size: var(--h3);
} 
.main-article-text ul li,
.main-article-text ol li {
  font-size: var(--h3);
  list-style-type: disc;
  list-style-position: inside;
  margin-left: 2rem;
}
}
</style>
