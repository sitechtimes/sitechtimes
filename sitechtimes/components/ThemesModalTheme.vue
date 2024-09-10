<template>
  <li class="theme-choice-modal" @click="$colorMode.preference = color">
    {{ color }}
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string;
}>();
</script>

<style>
.theme-choice-modal {
  font-size: 1.8rem;
  text-align: center;
  text-transform: capitalize;

  padding: 1rem 0;
}
.theme-choice-modal:hover {
  background-color: var(--hover);
  transition: background-color 0.5s ease;
  cursor: pointer;
}
.theme-choice-modal:focus {
  border: 1px solid var(--primary-color);
}

@media screen and (max-width: 420px) {
  .theme-choice-modal {
    padding: 0.4rem 0;
  }
}
</style>
