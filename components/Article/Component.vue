<template>
  <div class="pt-2 text-[var(--on-background)]">
    <CategoryIcon :category="category" />
    <h2 class="my-8 text-6xl font-medium">{{ title }}</h2>
    <img class="w-full rounded-3xl" :src="articleImg" :alt="articleAlt" />
    <div class="my-16 flex flex-wrap justify-between">
      <ArticleAuthorAndDate :author="author" :published="published" class="mb-8" />
      <div class="flex">
        <Print />
      </div>
    </div>
    <div class="main-article-text p-px" v-html="articleText"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string;
  title: string;
  description: string;
  articleText: string;
  articleImg: string;
  articleAlt: string;
  author: string;
  published: string;
  articleUrl: string;
  webUrl: string;
}>();
</script>

<style scoped>
.main-article-text p,
.main-article-text p em,
.main-article-text p strong,
.main-article-text p a,
.main-article-text li em,
.main-article-text li strong,
.main-article-text li a,
.main-article-text span,
.main-article-text ul li,
.main-article-text ul li span,
.main-article-text ol li,
.main-article-text ol li span {
  font-family: var(--article-font);
  @apply text-2xl sm:text-3xl md:text-4xl;
}

.main-article-text p,
.main-article-text li {
  @apply break-words font-light;
}

.main-article-text ul li,
.main-article-text ul li span,
.main-article-text ol li,
.main-article-text ol li span {
  @apply list-inside list-disc font-light;
}

.main-article-text ol li {
  @apply list-decimal;
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
  @apply mb-0;
}

.main-article-text h1,
.main-article-text h1 strong {
  @apply text-5xl md:text-6xl;
}
.main-article-text h2,
.main-article-text h2 strong {
  @apply text-4xl md:text-5xl;
}
.main-article-text h3,
.main-article-text h3 strong {
  @apply text-3xl md:text-4xl;
}
.main-article-text h4,
.main-article-text h4 strong {
  @apply text-2xl md:text-3xl;
}
.main-article-text h5,
.main-article-text h5 strong {
  @apply text-xl md:text-2xl;
}
.main-article-text h6,
.main-article-text h6 strong {
  @apply text-lg md:text-xl;
}
</style>
