<template>
  <li class="theme-choice color-name" @click="$colorMode.preference = color">
    <!-- <span class="icon"><fa :icon="icon" /></span> -->
    {{ color }}
  </li>
</template>

<script>
export default {
  props: {
    icon: String,
    color: String
  }
};
</script>

<style lang="scss">
@import "../assets/variables";
@import "../assets/global.scss";

.theme-choice {
  font-size: 1.6rem;
  //color: var(--white);
  background-color: white;
  list-style: none;
  //margin: 1rem auto;
  padding: 1rem 2rem;
  transition: all 0.3s;

  text-align: center;

  z-index: 3;
  //border: 1px solid white;
}

.theme-choice:hover {
  //transform: scale(1.1);

  cursor: pointer;
  background-color: var(--hover);
}
</style>
