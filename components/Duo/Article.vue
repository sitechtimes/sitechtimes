<template>
  <NuxtLink
    :to="articleUrl"
    role="img"
    :alt="imageAlt"
    class="dropshadow relative flex cursor-pointer flex-col justify-end rounded-2xl bg-cover bg-no-repeat"
    :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
  >
    <div class="text-container m-0 flex max-h-[80%] w-full flex-col rounded-2xl px-[7%] pb-[7%] sm:m-auto sm:max-h-[70%] sm:pb-[4.5%]" :class="getFontSize">
      <div class="mb-[var(--category-bottom-margin)] mt-[var(--category-top-margin)] flex flex-wrap pb-[3%] sm:flex-nowrap sm:pb-0"></div>
      <h3 class="block overflow-hidden overflow-ellipsis font-bold text-[var(--white)]" :class="(getClampSize, getFontSize)">{{ title }}</h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  articleUrl: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
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
