<template>
  <div>
    <span aria-label="navbar" class="hidden w-full items-center justify-center md:flex">
      <NuxtLink class="mt-20 flex items-center justify-center p-4" to="/">
        <img src="/assets/logo_filled.svg" alt="sitechtimes" />
        <h1 class="title ml-8 mt-5 text-[var(--on-background)]">Tech Times</h1>
      </NuxtLink>
    </span>
    <nav>
      <ul class="mt-8 hidden max-w-[1200px] flex-nowrap justify-evenly py-12 md:flex">
        <NuxtLink
          v-for="category in categories"
          class="border-b-4 border-b-transparent text-[var(--nav-color)] hover:border-b-[var(--primary-color)] hover:text-[var(--primary-color)]"
          :class="route.path === '/' + category ? 'border-b-0 font-extrabold text-[var(--primary-color)]' : ''"
          :key="category"
          :to="'../' + category"
        >
          <li class="text inline list-none py-2 uppercase transition">{{ category }}</li>
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const categories = ["covid", "entertainment", "news", "politics", "opinion", "science", "technology", "activities"];
</script>

<style scoped>
.title {
  font-family: var(--article-font);
}
.text {
  font-family: var(--font);
}
</style>
