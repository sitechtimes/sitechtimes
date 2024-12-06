<template>
  <div id="article-component">
    <category-icon :category="category" />
    <h2 class="main-article-title">{{ title }}</h2>
    <!-- <p class="main-article-description">{{ description }}</p> -->
    <img class="main-article-img" :src="articleImg" :alt="articleAlt" />
    <div class="main-article-metadata">
      <author-and-date-article
        class="article-author-and-date"
        :author="author"
        :published="$format(new Date(props.published))"
      />
      <div class="main-article-metadata-actions">
        <social-media-sharing
          :title="title"
          :articleUrl="articleUrl"
          :webUrl="webUrl"
        />
        <!-- <share-icon /> -->

        <print />
      </div>
    </div>
    <div
      class="main-article-text-section main-article-text"
      v-html="articleText"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string;
  title: string;
  author: string;
  published: Date;
  description: string;
  articleUrl: string | string[];
  articleText: string;
  articleImg: string;
  articleAlt: string;
  webUrl: string;
}>();

function $format(date: Date): string {
  // Implement your logic to format the date here
  return date.toISOString();
}
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

#article-component > * {
  color: var(--on-background);
}

#article-component {
  padding-top: 0.4rem;
}

.main-article-title {
  margin: 2rem auto;
  font-size: var(--h2);
  font-weight: 500;
  line-height: 120%;
}
// .main-article-description {
//   font-style: italic;
//   font-size: var(--h4);
//   font-weight: 300;
//   margin: 2rem auto;
// }
.main-article-text-section {
  padding: 0.05rem;
}
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
  font-size: 1.6rem;
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
  margin-bottom: 0;
}
.main-article-text h1,
.main-article-text h1 strong {
  font-size: 3.5rem;
}
.main-article-text h2,
.main-article-text h2 strong {
  font-size: 3rem;
}
.main-article-text h3,
.main-article-text h3 strong {
  font-size: 2.5rem;
}
.main-article-text h4,
.main-article-text h4 strong {
  font-size: 2rem;
}
.main-article-text h5,
.main-article-text h5 strong {
  font-size: 1.7rem;
}
.main-article-text h6,
.main-article-text h6 strong {
  font-size: 1.5rem;
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
    font-size: 1.9rem;
    line-height: 3.25rem;
  }
  .main-article-text h1,
  .main-article-text h1 strong {
    font-size: 3rem;
  }
  .main-article-text h2,
  .main-article-text h2 strong {
    font-size: 2.75rem;
  }
  .main-article-text h3,
  .main-article-text h3 strong {
    font-size: 2.5rem;
  }
  .main-article-text h4,
  .main-article-text h4 strong {
    font-size: 2.25rem;
  }
  .main-article-text h5,
  .main-article-text h5 strong {
    font-size: 2rem;
  }
  .main-article-text h6,
  .main-article-text h6 strong {
    font-size: 1.75rem;
  }
}
@media only screen and (max-width: $x-small-screen) {
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
    font-size: 2.25rem;
    line-height: 3.5rem;
  }
  .main-article-title {
    font-size: var(--h2);
  }
}
</style>
