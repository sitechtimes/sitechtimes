<template>
    <nav>
        <ul class="home-nav-ul">
            <a v-for="category in navbar"
            :key="category"
            :href='category.navLink'
            class="home-nav-li"><li>{{category.navType}}</li></a>
        </ul>
    </nav>

</template>

<script>
    export default {
    name: 'Navbar', // vue component name
    props: [],
    data () {
      return {
        navbar: [
        {navLink: 'news', navType: 'NEWS'},
        {navLink: 'opinion', navType: 'OPINION'},
        {navLink: 'politics', navType: 'POLITICS'},
        {navLink: 'entertainment', navType: 'ENTERTAINMENT'},
        {navLink: 'science', navType: 'SCIENCE'},
        {navLink: 'activities', navType: 'ACTIVITIES'},
        {navLink: 'events', navType: 'EVENTS'}
      ]
    }
  }
};
</script>


<style lang="scss">
    a {
        text-decoration: none;
        color: inherit;
    }
    .home-nav-li {
        font-family: var(--font);
        display: inline;
        //width: calc(100% / 7 + 2rem);
        list-style-type: none;
        font-size: var(--h4);
    }
    .home-nav-ul {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: nowrap;
        padding: 3rem 0;
        width: 70%;
        margin: auto;
    }
@media only screen and (max-width: $large-screen) {
        .home-nav-ul {
          width: 80%;
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
