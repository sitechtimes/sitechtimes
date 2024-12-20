<template>
  <section class="float-right flex w-screen max-w-none flex-col overflow-hidden md:w-auto md:max-w-[50rem] md:border-l-2 md:border-l-[var(--primary-color)]">
    <div>
      <h4 class="p-0 text-[var(--on-background)] md:px-12 md:pt-20">Trending</h4>
      <Sidebar v-for="article in trending" :key="article.slug" :category="article.category" :title="article.title" :imgUrl="article.imageUrl" :imgAlt="article.imageAlt" :articleUrl="article.slug" />
    </div>
    <div class="mt-12 md:mt-auto">
      <h4 class="p-0 text-[var(--on-background)] md:px-12 md:pt-20">More Like This</h4>
      <Sidebar
        v-for="article in moreLikeThis"
        :key="article.slug"
        :category="article.category"
        :title="article.title"
        :imgUrl="article.imageUrl"
        :imgAlt="article.imageAlt"
        :articleUrl="article.slug"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  trending: any[];
  moreLikeThis: any[];
}>();
</script>

<style scoped></style>
