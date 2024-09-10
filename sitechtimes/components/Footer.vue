<template>
  <footer class="footer-bg">
    <div class="footer-container global-container">
      <div class="form-and-media">
        <GetNotifiedSection />
        <FooterSocialMedia
          :instagramUrl="insta"
          :twitterUrl="twitter"
          :facebookUrl="facebook"
        />
      </div>
      <FooterNav />
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{
  categories: string;
  insta: string;
  twitter: string;
  facebook: string;
}>();
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";
.footer-bg {
  background-color: var(--footer);
  padding: 3rem 0;
}
.footer-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5%;
  // margin: 0 auto;
}
.form-and-media {
  display: flex;
  flex-direction: column;
  // margin-right: 10%;
  height: 100%;
}
@media only screen and (max-width: $mid-screen) {
  .form-and-media,
  .footer-nav {
    margin: auto;
  }
  .footer-container {
    flex-direction: column;
  }
  .form-and-media {
    padding-right: 0;
  }
}
@media only screen and (max-width: $x-small-screen) {
  .form-and-media {
    max-width: 100%;
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
