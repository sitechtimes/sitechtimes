<template>
  <NuxtLink class="flex size-full flex-col" :to="articleUrl">
    <img :src="imageUrl" :alt="imageAlt" class="dropshadow w-[37rem] rounded-3xl object-cover sm:w-full md:w-auto" />
    <div class="mt-4 flex w-[35rem] sm:w-auto">
      <CategoryIcon class="mb-[var(--category-bottom-margin)] mr-4 mt-[var(--category-top-margin)] sm:mr-8" :category="category" />
    </div>
    <h3 class="title m-0 w-[37rem] text-4xl font-bold text-[var(--on-background)] sm:w-auto">{{ title }}</h3>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  author: string;
  articleUrl: string;
  published: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
}>();
</script>

<style scoped>
.title {
  font-family: var(--font);
}
</style>
