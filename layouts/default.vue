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
import Datebar from "../components/Datebar";
export default {
  components: {
    Datebar
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
