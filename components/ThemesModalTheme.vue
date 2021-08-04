<template>
  <li class="theme-choice-modal" @click="$colorMode.preference = color">
    {{ color }}
  </li>
</template>

<script>
export default {
  name: "ThemesModalTheme",
  props: {
    color: String
  }
};
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
</style>
