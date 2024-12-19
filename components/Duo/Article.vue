<template>
  <div class="flex flex-col justify-between sm:flex-row">
    <NuxtLink
      v-for="article in articles"
      :to="'/articles/' + article.slug"
      :key="article.title"
      role="img"
      :alt="article.imageAlt"
      class="dropshadow w-full cursor-pointer rounded-2xl sm:w-[48%]"
      :class="getFontSize"
    >
      <div class="h-[30rem] rounded-2xl bg-cover bg-no-repeat sm:h-full" :style="{ backgroundImage: 'url(' + article.imageUrl + ')' }">
        <div class="text-container my-0 flex h-full w-full flex-col justify-end rounded-2xl px-[7%] pb-[7%] pt-[10%] sm:pt-[50%]">
          <div class="mb-[var(--category-bottom-margin)] mt-[var(--category-top-margin)] flex"></div>
          <div class="block overflow-hidden overflow-ellipsis pt-4 font-bold text-[var(--white)]" :class="(getFontSize, getClampSize)">
            {{ article.title }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  articles: any[];
  size: string;
  clampSize: string;
}>();

function getFontSize() {
  const small = "text-5xl";
  const medium = "text-6xl sm:text-5xl";
  const large = "text-7xl sm:text-5xl";

  const sizes: Record<string, string> = { small, medium, large };
  return sizes[props.size] ?? medium;
}

function getClampSize() {
  const smallClamp = "line-clamp-2";
  const mediumClamp = "line-clamp-4";
  const largeClamp = "line-clamp-5";

  const clamps: Record<string, string> = { smallClamp, mediumClamp, largeClamp };
  return clamps[props.clampSize] ?? mediumClamp;
}
</script>

<style scoped>
.text-container {
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
}
</style>
