<template>
  <div>
    <h5
      :style="backgroundColor"
      class="sidebar-article-details-category"
      id="sidebar-article-category"
    >
      {{ category }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "CategoryIconSidebar",
  props: {
    category: String
  },
  data() {
    return {};
  },
  computed: {
    backgroundColor: function() {
      return "background-color: var(--" + this.category + ")";
    },
  },
};
</script>

<style lang="scss">
@import '../assets/variables';
#sidebar-article-category {
  text-transform: uppercase;
  width: max-content;
  //background-color: var(--opinion);
  color: var(--off-white);
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 0.6rem;
  margin: 0.3rem 0 0.5rem 0;
  line-height: 1.5rem;
  padding: 0.2rem 0.6rem 0 0.6rem;
}
@media only screen and (max-width: $mid-screen) {
  #sidebar-article-category {
    font-size: var(--h5);
    padding: 0.8rem 0.8rem 0.4rem 0.8rem;
    margin: 0.3rem 0 1.5rem 0;
  }
}
</style>

<!--<docs>-->
<!--This component is the same as above, with different width and height-->

<!--## Variables Used:-->
<!--&#45;&#45;font, &#45;&#45;off-white-->

<!--## Examples-->

<!--Category Icons-->

<!--```jsx-->
<!--<CategoryIconSidebar category="sports"/>-->
<!--<CategoryIconSidebar category="entertainment"/>-->
<!--```-->


<!--</docs>-->
