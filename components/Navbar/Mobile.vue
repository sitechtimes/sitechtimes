<template>
  <div aria-label="mobile navbar" class="sticky top-0 z-[1] block max-h-dvh w-screen md:hidden" :class="show ? 'bg-[var(--background-color)]' : 'bg-[var(--mobile-nav-background)]'">
    <div class="global-container flex items-center justify-between py-3">
      <span>
        <NuxtLink class="flex items-center" :class="show ? 'visible' : 'invisible'" to="/"> </NuxtLink>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const spanClass = ref("");
const show = ref(false);
const bgColor = ref("");
const visiblity = ref("visible");
const categories = ["covid", "entertainment", "news", "politics", "opinion", "science", "technology", "activities"];

function toggleStyles() {
  if (!show.value) {
    bgColor.value = "var(--mobile-nav-background)";
    visiblity.value = "hidden";
    return (document.body.style.overflow = "hidden");
  }
  bgColor.value = "var(--background-color)";
  visiblity.value = "visible";
  document.body.style.overflow = "auto";
}
</script>

<style scoped></style>
