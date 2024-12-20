<template>
  <nuxt-link :to="'/articles/' + articleUrl" class="sidebar-article">
    <img :src="imgUrl" :alt="imgAlt" class="sidebar-img" />
    <div class="sidebar-article-details">
      <category-icon-sidebar :category="category"></category-icon-sidebar>
      <h4 id="sidebar-article-details-title">
        {{ title }}
      </h4>
    </div>
  </nuxt-link>

  <NuxtLink
    :to="'/articles/' + articleUrl"
    class="flex w-full max-w-none cursor-pointer rounded-r-2xl border py-6 transition md:w-[var(--sidebarArticleWidth)] md:max-w-[50rem] md:px-[var(--sidebarSidePadding)] md:hover:bg-[var(--hover)]"
  >
    <img :src="imgUrl" :alt="imgAlt" class="inline-block size-[var(--sidebarImgWidth)] rounded-2xl border object-cover align-middle" />
    <div class="inline-block max-w-full pl-[var(--sidebarDetailsPaddingLeft)] md:max-w-[32.65rem]">
      <CategoryIconSidebar :category="category" />
      <h4 class="text-2xl font-medium text-[var(--on-background)]">{{ title }}</h4>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string;
  title: string;
  imgUrl: string;
  imgAlt: string;
  articleUrl: string;
}>();
</script>

<style scoped>
.border {
  border: var(--toggleBorder);
}
</style>
