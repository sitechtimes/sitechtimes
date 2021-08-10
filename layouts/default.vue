<template>
  <div>
    <Datebar />

    <Navbar />
    <MobileNav />

    <Nuxt />

    <Footer insta="http://www.instagram.com/statenislandtechtimes" twitter="https://twitter.com/sitechtimes" facebook="https://www.facebook.com/SI-Tech-Times-135100402077100" />
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      categories: []
    };
  },
  async beforeMount() {
    try {
      const categories = await this.$axios.get(`/cms/categories`);
      this.categories = categories.data;
    } catch (e) {
      await this.$router.push("/");
    }
  },
  methods: {}
};

</script>
