<template>
  <div class="theme-switcher">
    <ThemeColors icon="moon" color="dark" />
    <ThemeColors icon="sun" color="light" />
    <nuxt-link id="dropdown-more-link" to="/Theme"
      ><ThemeColors icon="sun" color="more"
    /></nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["system", "light", "dark", "theme"]
    };
  }
};
</script>

<style lang="scss">
.theme-switcher {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;

  border: 1px solid black;

  position: absolute;
  top: 3.2rem;
}
.theme-switcher > * {
  width: 100%;
}

#dropdown-more-link {
  text-decoration: none;
}
</style>
