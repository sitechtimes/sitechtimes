<template>
  <button class="text cursor-pointer rounded-[3.5rem] bg-[var(--primary-color)] px-12 pb-6 pt-7 font-bold uppercase text-[var(--on-primary)] transition md:hover:-translate-y-2 md:hover:shadow">
    See more
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.text {
  font-family: var(--font);
}

.shadow {
  box-shadow: 0 0.5rem 1rem 0.5rem var(--see-more-color);
}
</style>
