<template>
  <section class="sidebar-container">
    <div>
      <h3 class="sidebar-heading">Trending</h3>
      <Sidebar
        v-for="article in trending"
        :key="article.slug"
        :category="article.category"
        :author="article.user.name"
        :published="article.createdAt"
        :title="article.title"
        :imgUrl="article.imageUrl"
        :imgAlt="article.imageAlt"
        :articleUrl="article.slug"
      /><!-- css var for imgUrl? -->
    </div>
    <div class="morelikethis-section">
      <h3 class="sidebar-heading">More Like This</h3>
      <Sidebar
        v-for="article in moreLikeThis"
        :key="article.slug"
        :category="article.category"
        :author="article.user.name"
        :published="article.createdAt"
        :title="article.title"
        :imgUrl="article.imageUrl"
        :imgAlt="article.imageAlt"
        :articleUrl="article.slug"
      />
    </div>
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
  },
};
</script>

<style lang="scss">
@use "../assets/_variables";
.sidebar-container {
  border-left: 2px solid var(--primary-color);
  max-width: 50rem;
  float: right;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /*   display: flex;
  flex-direction: column;
  align-items: flex-end; */
}
.sidebar-container > * {
  color: var(--on-background);
}
.sidebar-heading {
  font-size: var(--h4);
  padding: 0 3rem;
  padding-top: 5rem;
  margin: 0;
}
@media only screen and (max-width: var(--midlarge-screen)) {
  .sidebar-container {
    border: none;
    flex-direction: row;
    max-width: none;
    width: 100vw;
  }
  .morelikethis-section {
    margin-left: 2rem;
  }
  .sidebar-heading {
    padding: 0;
  }
}
@media only screen and (max-width: var(--mid-screen)) {
  .sidebar-container {
    flex-direction: column;
  }
  .morelikethis-section {
    margin-left: 0;
    margin-top: 3rem;
  }
  .sidebar-heading {
    font-size: var(--h3);
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
