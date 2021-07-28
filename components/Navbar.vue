<template>
  <nav>
    <ul class="home-nav-ul">
      <nuxt-link v-for="category in categories"
                 :key="category"
                 :to="'../' + category">
        <li tabindex="1" class="home-nav-li">{{ category }}</li>
      </nuxt-link>
    </ul>
  </nav>

</template>

<script>
export default {
  name: 'Navbar', // vue component name
  data () {
    return {
        categories: ['covid', 'entertainment', 'news', 'politics', 'opinion', 'science', 'technology', 'sports'],
    }
  },
};
</script>


<style lang="scss">
@import '../assets/variables';
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
  letter-spacing: .05rem;
  transition: all .1s;
}
.home-nav-li:hover {
  color: var(--primary-color);
  border-bottom: .25rem solid var(--primary-color);
}
.home-nav-li:focus {
  border-bottom: unset;
  color: var(--primary-color);
  font-weight: 900;
}
.home-nav-ul {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  padding: 3rem 0;
  width: 85%;
  margin: auto;
}
@media only screen and (max-width: $large-screen) {
  .home-nav-ul {
    width: 90%;
  }
}
@media only screen and (max-width: $midlarge-screen) {
  .home-nav-ul {
    max-width: $container;
    width: unset;
  }
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

