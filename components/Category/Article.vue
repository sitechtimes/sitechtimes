<template>
  <NuxtLink class="flex hover:bg-[var(--grey)] sm:max-md:m-auto sm:max-md:flex-row-reverse md:max-xl:justify-center" :to="articleUrl">
    <div class="w-[40%] sm:w-auto">
      <img :src="imageUrl" :alt="imageAlt" loading="lazy" class="mr-0 h-64 w-full rounded-2xl object-cover sm:mr-16 sm:h-72 sm:w-96 md:h-96 md:w-[35rem] md:rounded-3xl" />
    </div>
    <div class="w-[60%]">
      <div class="mt-4 flex sm:mt-8">
        <CategoryIcon class="size-12 pr-6 sm:size-auto md:pr-0" :category="category" />
      </div>
      <h3 class="mt-4 max-w-[30rem] pt-4 text-4xl font-bold text-[var(--on-background)] sm:max-w-[50rem] md:pt-0">{{ title }}</h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  author: string;
  published: string;
  articleUrl: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}>();
</script>

<style scoped></style>
