<template>
  <NuxtLink :to="articleUrl" class="my-20 flex w-full flex-col sm:my-4 sm:w-[47%] lg:w-[32%]">
    <img :src="imageUrl" loading="lazy" :alt="imageAlt" class="dropshadow h-[30rem] w-full rounded-3xl object-cover sm:h-[40rem] md:h-[35rem] lg:h-96 lg:rounded-2xl" />
    <h5 class="my-4 flex text-[var(--on-background)]"></h5>
    <h4 class="title font-bold text-[var(--on-background)]"></h4>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  articleUrl: string;
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
