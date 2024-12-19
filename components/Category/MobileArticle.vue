<template>
  <NuxtLink :to="articleUrl" class="mb-8 inline-block w-[90%] border-b-4 border-b-[var(--primary-color)]">
    <div class="flex items-center">
      <CategoryIcon :category="category" />
    </div>
    <NuxtLink :href="articleUrl"
      ><h3 class="font-bold text-[var(--on-background)]">{{ title }}</h3></NuxtLink
    >
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string;
  author: string;
  published: string;
  title: string;
  articleUrl: string;
}>();
</script>

<style scoped></style>
