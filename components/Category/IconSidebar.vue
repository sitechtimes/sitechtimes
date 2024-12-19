<template>
  <div>
    <h5 class="mx-0 mb-6 mt-1 w-max rounded-xl px-3 pb-2 pt-3 text-sm font-medium uppercase text-[var(--off-white)] md:mb-2 md:mt-1 md:rounded-lg md:px-2 md:pb-0 md:pt-1" :class="backgroundColor">
      {{ category }}
    </h5>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string;
}>();

const backgroundColor = computed(() => `bg-[var(--${props.category})]`);
</script>

<style scoped></style>
