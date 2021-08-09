<template>
  <div>
    <Datebar />

    <Navbar />
    <MobileNav />

    <Nuxt />

    <Footer />
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
