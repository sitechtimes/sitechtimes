<template>
  <h5
    :style="backgroundColor()"
    class="article-details-category"
    id="article-category"
  >
    {{ category }}
  </h5>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string;
}>();

const backgroundColor = () => {
  return "background-color: var(--" + props.category + ")";
};
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
#article-category {
  text-transform: uppercase;
  width: max-content;
  color: var(--off-white);
  font-weight: 500;
  border-radius: 0.8rem;
  margin: 0.3rem 0 0.3rem 0;
  padding: 0.6rem 0.9rem 0.3rem 0.9rem;
  transition: all 0.2s;
}

@media only screen and (min-width: $mid-screen) {
  #article-category:hover {
    transform: translateY(-0.4rem);
  }
}
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
