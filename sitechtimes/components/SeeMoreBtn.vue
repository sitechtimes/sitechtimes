<template>
  <button class="see-more-btn">See more</button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../assets/variables.scss";
.see-more-btn {
  background-color: var(--primary-color);
  // text-shadow: .1rem .1rem .2rem var(--mid-grey);
  padding: 1.8rem 3rem 1.6rem 3rem;
  font: bold 1.74rem var(--font);
  color: var(--on-primary);
  border: none;
  border-radius: 3.5rem;
  text-transform: uppercase;
  transition: all 0.3s;
  cursor: pointer;
}
.see-more-btn:hover {
  box-shadow: 0 0.5rem 1rem 0.5rem var(--see-more-color);
  transform: translateY(-0.5rem);
}

@media only screen and (max-width: $mid-screen) {
  .see-more-btn {
    font-size: 1.9rem;
  }
  .see-more-btn:hover {
    box-shadow: unset;
    transform: unset;
    background-color: var(--primary-color);
  }
}
@media only screen and (max-width: $x-small-screen) {
  .see-more-btn {
    font-size: 2.25rem;
  }
}
</style>

<!--<docs>-->
<!--This button is a simple button that will be used to generate new articles in the page after a user clicks "see-more".-->

<!--It isn't a very dynamic component and takes no arguments, which as a simple button that will only be used a in a few situation's it doesn't need to do.-->

<!--## Variables Used:-->
<!--&#45;&#45;primary-color, &#45;&#45;white-->

<!--## Examples-->

<!--```jsx-->
<!--<SeeMoreBtn />-->
<!--```-->

<!--</docs>-->
