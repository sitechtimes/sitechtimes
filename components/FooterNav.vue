<template>
  <div class="max-w-full sm:w-[36rem]">
    <h3 class="text-[var(--footer-header-color)]">Navigation</h3>

    <ul class="mt-6 flex flex-col items-center border-y-4 border-y-[var(--primary-color)] p-8">
      <NuxtLink v-for="category in categories" class="text-inherit" :key="category" :to="'../' + category">
        <li class="w-full list-none p-1">
          <h4 class="capitalize text-[var(--footer-nav-color)] transition hover:text-[var(--accent-color)]">{{ category }}</h4>
        </li>
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
const categories = ["covid", "entertainment", "news", "politics", "opinion", "science", "technology", "activities"];
</script>

<style scoped></style>
