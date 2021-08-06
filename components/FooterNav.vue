<template>
  <div class="footer-nav">
    <h4 class="footer-header footer-nav-header">Navigation</h4>

    <ul class="footer-nav-ul">
      <nuxt-link
        v-for="category in categories"
        class="footer-nav-link"
        :key="category"
        :to="'../' + category"
        ><li>{{ category }}</li></nuxt-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterNav", // vue component name
  data() {
    return {
      categories: [
        "covid",
        "entertainment",
        "news",
        "politics",
        "opinion",
        "science",
        "technology",
        "activities"
      ]
    };
  }
};
</script>

<style lang="scss">
@import '../assets/variables';
.footer-nav {
  width: 36rem;
}
.footer-nav-header {
  font-size: var(--h3);
}
.footer-nav-link {
  text-decoration: none;
  color: inherit;
}
.footer-nav-ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 1.5rem;
  border-top: 0.3rem solid var(--primary-color);
  border-bottom: 0.3rem solid var(--primary-color);
}
.footer-nav-ul li {
  color: var(--primary-color);
  font-size: var(--h4);
  list-style-type: none;
  text-transform: capitalize;
  padding: 0.3rem;
  transition: all 0.1s;
  width: 100%;
}
.footer-nav-ul li:hover {
  color: var(--accent-color);
}

 @media only screen and (max-width: $small-screen) {
   .footer-nav {
     margin: auto;
   }
.footer-nav-ul li {
  font-size: 2.5rem;
  }
}
@media only screen and (max-width: $x-small-screen) {
  .footer-nav-header {
    font-size: var(--h2);
  }
}
// @media only screen and (max-width: 340px) {
//   .footer-nav {
//     width: 100%;
//     margin: 3rem;
//   }
// }
</style>

<!--<docs>-->
<!--This is the section of the footer with a navigation bar so the user can go to the different cateogries of the newpaper.-->

<!--## Variables Used:-->
<!--&#45;&#45;font, &#45;&#45;primary-color, &#45;&#45;accent-color, &#45;&#45;h3, &#45;&#45;h5-->

<!--## Examples-->
<!--```jsx-->
<!--<FooterSocialMedia />-->
<!--```-->

<!--</docs>-->
