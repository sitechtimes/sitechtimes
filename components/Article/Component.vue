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
    <div class="main-article-text-section p-px"></div>
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

<style scoped></style>
