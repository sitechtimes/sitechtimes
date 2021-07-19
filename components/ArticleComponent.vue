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
    <section class="main-article-text-section">
      <p class="main-article-text">{{ articleText }}</p>
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
.main-article-title {
  margin: 2rem auto;
  font-weight: 600;
}
.main-article-description,
.main-article-text {
  font-size: 1.8rem;
}
.main-article-description {
  font-style: italic;
  font-size: 2.2rem;
  margin: 2rem auto;
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
</style>
