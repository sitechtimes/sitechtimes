<template>
  <footer class="footer-container">
      <div class="form-and-media">
        <GetNotifiedSection />
        <FooterSocialMedia />
      </div>
      <FooterNav />
  </footer>
</template>

<script>
export default {
    name: "Footer",
    props: ["categories"],
    data () {
      return {
    }
  },
    components: {
        GetNotifiedSection: () => import('./GetNotifiedSection.vue'),
        FooterSocialMedia: () => import('./FooterSocialMedia.vue'),
        FooterNav: () => import('./FooterNav.vue'),
    }
}
</script>

<style lang="scss">
@import '../assets/variables';
    .footer-container {
        display: flex;
        justify-content: center;
        padding: 5rem;
        // margin: 0 auto;
        background-color: var(--grey);
    }
    .form-and-media {
        display: flex;
        flex-direction: column;
        padding-right: 15%;
    }
     @media only screen and (max-width: $mid-screen) {
        .form-and-media {
            padding-right: 10%;
        }
    }
     @media only screen and (max-width: $small-screen) {
        .footer-container {
            flex-direction: column;
        }
        .form-and-media {
            padding-right: 0;
        }
    }

</style>

<!--<docs>-->
<!--The Final Footer that will be seen at the bottom. It uses GetNotifiedSection, FooterSocialMedia, and FooterNav to make a Footer with all the needed information.-->
<!--## Variables Used:-->
<!--&#45;&#45;grey-->
<!---->
<!--## Examples:-->
<!---->
<!--```jsx-->
<!--<Footer />-->
<!--```-->
<!--</docs>-->
