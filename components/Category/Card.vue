<template>
  <NuxtLink :to="articleUrl" role="img" :alt="imageAlt" class="relative flex cursor-pointer flex-col justify-end rounded-3xl" :class="getFontSize">
    <div class="h-full w-full rounded-3xl bg-cover bg-no-repeat md:w-auto" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <div class="text-container my-0 flex h-full w-full flex-col rounded-3xl pb-[5%] pl-[5%] pt-[32%]">
        <div class="flex">
          <CategoryIcon :category="category" class="mb-[var(--category-bottom-margin)] text-[var(--white)]" />
        </div>
        <div class="block overflow-hidden overflow-ellipsis pt-4 font-bold text-[var(--white)]" :class="(getFontSize, getClampSize)">
          {{ title }}
        </div>
      </div>
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
