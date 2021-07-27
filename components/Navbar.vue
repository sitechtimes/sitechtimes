<template>
  <nav>
    <ul class="home-nav-ul">
      <nuxt-link
        v-for="category in categories"
        :key="category"
        :to="'../' + category"
      >
        <li class="home-nav-li">{{ category }}</li>
      </nuxt-link>
      <div to="/Theme" id="theme-nav-button" @click="openThemeMenu">
        <h4 class="home-nav-li">
          Theme
        </h4>
        <Theme v-if="openTheme" />
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar", // vue component name
  props: ["categories"],
  data() {
    return { openTheme: false };
  },
  methods: {
    openThemeMenu() {
      this.openTheme = !this.openTheme;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/variables";

a {
  text-decoration: none;
  color: inherit;
}
.home-nav-li {
  text-transform: uppercase;
  font-family: var(--font);
  display: inline;
  //width: calc(100% / 7 + 2rem);
  list-style-type: none;
  font-size: var(--h4);
  letter-spacing: 0.05rem;

  color: var(--on-background);
}
.home-nav-ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
}

#theme-nav-button {
  cursor: pointer;
  border: 1px solid black;
  user-select: none;

  position: relative;
}

@media only screen and (max-width: $mid-screen) {
  .home-nav-ul {
    display: none;
  }
}
</style>

<!--<docs>-->
<!--This is the Navigation Bar - it links to all other pages related to a category-->

<!--## Variables Used:-->
<!--&#45;&#45;font-->

<!--## Examples-->

<!--```jsx-->
<!--<Navbar />-->
<!--```-->
<!--   -->
<!--</docs>-->
