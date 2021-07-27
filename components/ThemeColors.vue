<template>
  <li class="theme-choice" @click="$colorMode.preference = color">
    <!-- <span class="icon"><fa :icon="icon" /></span> -->
    <span class="color-name">{{ color }}</span>
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
  font-size: var(--h4);
  //color: var(--white);
  list-style: none;
  //margin: 1rem auto;
  transition: all 0.3s;

  text-align: center;

  z-index: 3;
  //border: 1px solid white;
}
.icon,
.color-name {
  margin: 0rem;
}
.color-name {
  border-bottom: 3px solid transparent;
}
.theme-choice:hover {
  //transform: scale(1.1);

  cursor: pointer;
  background-color: var(--hover);
}
.theme-icon:hover .color-name {
  border-bottom: 3px solid white;
}
</style>
