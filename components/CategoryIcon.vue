<template>
  <nuxt-link :to="'../' + category">
    <button
      :style="backgroundColor"
      class="article-details-category"
      id="article-category"
      @mouseover="categoryHover"
      @mouseleave="noHover"
    >
      {{ category }}
    </button>
  </nuxt-link>
</template>

<script>
export default {
  name: "CategoryIcon",
  props: {
    category: String,
  },
  data() {
    return {};
  },
  computed: {
    backgroundColor: function() {
      return "background-color: var(--" + this.category + ")";
    },
  },
  methods: {
    categoryHover: function(e) {
        console.log(e.target.innerHTML)
      if (this.category === "sports") {
        e.target.style.backgroundColor = "var(--activities-hover)";
      } else {
        e.target.style.backgroundColor = "var(--" + this.category + "-hover)";
      }
    },
    noHover: function(e) {
      e.target.style.backgroundColor = "var(--" + this.category + ")";
    }
  },
};
</script>

<style lang="scss">
@import '../assets/variables';
#article-category {
  text-transform: uppercase;
  width: max-content;
  color: var(--off-white);
  font: 500 var(--h5) var(--font);
  border: none;
  border-radius: 0.8rem;
  margin: 0.3rem 0 0.3rem 0;
  padding: 0.6rem .9rem 0.3rem .9rem;
  transition: all .2s;
  cursor: pointer;
}

// @media only screen and (min-width: $mid-screen) {
// #article-category:hover {
//     // transform: translateY(-0.2rem);
// }
// }
</style>

<!--<docs>-->
<!--The Category Icon takes the category as a prop and returns a unique button/tag with a unique color that can be used for each individual category.-->

<!--## Variables Used:-->
<!--&#45;&#45;font, &#45;&#45;off-white-->

<!--## Examples-->

<!--Category Icons-->

<!--```jsx-->
<!--<category-icon category="opinion"></category-icon>-->
<!--```-->

<!--```jsx-->
<!--<category-icon category="entertainment"></category-icon>-->
<!--```-->

<!--```jsx-->
<!--<category-icon category="sports"></category-icon>-->
<!--```-->

<!--```jsx-->
<!--<category-icon category="sports"></category-icon>-->
<!--<category-icon category="entertainment"></category-icon>-->
<!--```-->


<!--</docs>-->
