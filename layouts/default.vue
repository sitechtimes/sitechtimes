<template>
  <div>
    <Datebar />
    <Navbar :categories="categories" />
    <MobileNav :categories="categories"/>

    <div class="global-container">
       <Nuxt />
    </div>

    <Footer :categories="categories"/>
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
      slug: this.$route.params.slug,
      article: {},
      categories: [],
    };
  },
  async beforeMount () {
    try {
      const categories = await this.$axios.get(`/cms/categories`);
      this.categories = categories.data;
    } catch(e){
      await this.$router.push('/');
    }
  },
};
</script>
