<template>
  <section class="sidebar-container">
    <h3 class="sidebar-heading">Trending</h3>
    <Sidebar
      v-for="article in trending"
      :key="article.slug"
      :category="article.category"
      :author="article.user.name"
      :published="article.createdAt"
      :title="article.title"
      :imgUrl="article.imageUrl"
      :articleUrl="article.slug"
    /><!-- css var for imgUrl? -->

    <h3 class="sidebar-heading">More Like This</h3>
    <Sidebar
      v-for="article in moreLikeThis"
      :key="article.slug"
      :category="article.category"
      :author="article.user.name"
      :published="article.createdAt"
      :title="article.title"
      :imgUrl="article.imageUrl"
      :articleUrl="article.slug"
    />
  </section>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "SidebarContainer",
  components: { Sidebar },
  props: {
    trending: Array,
    moreLikeThis: Array,
  }
};

</script>

<style lang="scss">
@import '../assets/variables';
.sidebar-container {

  border-left: 2px solid var(--primary-color);
  max-width: 50rem;

  float: right;
  overflow: hidden;

  /*   display: flex;
  flex-direction: column;
  align-items: flex-end; */
}
.sidebar-heading {
  font-size: var(--h4);
  padding: 0 3rem;
  padding-top: 5rem;
  margin: 0;
}
@media only screen and (max-width: $midlarge-screen) {
  .sidebar-container {
    border: none;
  }
}
@media only screen and (max-width: $mid-screen) {
  .sidebar-container {
    max-width: none;
  }
  .sidebar-heading {
    padding: 1.5rem var(--sidebarSidePadding);
  }
}
</style>

<!--<docs>-->
<!--The Container for all Sidebar Articles, it's tied to the right side of the screen and should show up only with an article on the page. It contains six articles-->
<!--## Variables Used:-->
<!--&#45;&#45;sidebarSidePadding-->

<!--## Examples-->

<!--```jsx-->
<!--<sidebar-container />-->
<!--```-->

<!--</docs>-->
