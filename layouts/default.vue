<template>
  <div>
    <Datebar />
    <color-mode-toggle-temp />

    <Navbar />
    <MobileNav />

    <Nuxt />

    <Footer />
  </div>
</template>

<script>
import ColorModeToggleTemp from "../components/ColorModeToggleTemp.vue";
import Datebar from "../components/Datebar";
export default {
  components: {
    Datebar,
    ColorModeToggleTemp
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
