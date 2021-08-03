<template>
  <ul class="theme-switcher">
    <ThemeColors icon="moon" color="system" />
    <nuxt-link id="dropdown-more-link" to="/Theme"
      ><ThemeColors icon="sun" color="more"
    /></nuxt-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      //colors: ["system", "light", "dark", "theme"]
    };
  }
};
</script>

<style lang="scss">
.theme-switcher {
  //width: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;

  border: 1px solid black;

  position: absolute;
  top: 3.7rem;
}
.theme-switcher > * {
  width: 100%;
}

#dropdown-more-link {
  text-decoration: none;
}
</style>
