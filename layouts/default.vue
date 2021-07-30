<template>
  <div>
    <Datebar />
    <color-mode-toggle-temp />

    <Navbar :categories="categories" />
    <MobileNav :categories="categories" />

    <Nuxt />

    <Footer :categories="categories" />
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
  }
};
</script>
