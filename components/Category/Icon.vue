<template>
  <h5 class="my-1 w-max rounded-xl px-2 py-4 font-medium uppercase text-[var(--off-white)] transition md:-translate-y-2" :class="backgroundColor">{{ category }}</h5>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string;
}>();

const backgroundColor = computed(() => `bg-[var(--${props.category})]`);
</script>

<style scoped></style>
