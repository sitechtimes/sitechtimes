<template>
  <div class="social-media-sharing-box">
      <ShareNetwork
      network="reddit"
      :url="webUrl"
      :title="title"
      description="Visit the Website to read more!">
      <svg width="3.5rem" height="3.5rem" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="reddit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="social-media-sharing reddit-icon svg-inline--fa fa-reddit fa-w-16 fa-7x"><path fill="currentColor" d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" class=""></path></svg>
      </ShareNetwork>
      <ShareNetwork
      network="twitter"
      :url="webUrl"
      :title="title"
      description="Visit the Website to read more!">
      <svg width="3.5rem" height="3.5rem" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="social-media-sharing svg-inline--fa fa-twitter fa-w-16"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
      </ShareNetwork>
      <ShareNetwork
      network="facebook"
      :url="webUrl"
      :title="title"
      description="Visit the Website to read more!">
      <svg width="3.5rem" height="3.5rem" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="social-media-sharing facebook-icon svg-inline--fa fa-facebook fa-w-16"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" class=""></path></svg>
      </ShareNetwork>
  </div>
</template>

<script>
export default {
name: "SocialMediaSharing",
props: {
  title: String,
  articleUrl: String,
  webUrl: String
}
}
</script>

<style lang="scss">
@import '../assets/variables';

.social-media-sharing { 
  color: var(--primary-color);
  margin-left: 1rem;
  margin-right: 1rem;
  transition: all .2s;
  cursor: pointer;
}
.reddit-icon {
  margin-left: 0;
}
.facebook-icon {
  margin-right: 0;
}
.social-media-sharing:hover {
  color: var(--gold-hover);
  transform: scale(110%);
}
@media only screen and (max-width: $mid-screen) {
  .social-media-sharing:hover {
    color: var(--primary-color);
    transform: scale(100%);
  }
}

</style>

<!--<docs>-->
<!--This component is used in the footer's social media section and underneath the articles' main pictures. In the footer, it takes the user to the Tech Times' social media pages. Underneath the articles, it provides a way for the users to share the article on their favorite social media sites. -->

<!--## Variables Used:-->
<!--&#45;&#45;primary-Color-->

<!--## Examples-->
<!--```jsx-->
<!--<SocialMediaIcons />-->
<!--```-->

<!--</docs>-->
