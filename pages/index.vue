<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <Navbar />
    <div class="global-container">
      <!-- <NuxtLink class="block" v-for="homepage in homepages" :to="`/articles/${homepage.slug}`" :key="homepage.slug">
    {{ homepage.title }}
    </NuxtLink> -->
    <h3>Trending Articles</h3>
    <h3>News</h3>
    <h3>Politics</h3>
    <h3>Entertainment</h3>
    <h3>Opinion</h3>
    <h3>Science</h3>
    <h3>Activities</h3>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
    data() {
      return {
        homepages: []
      }
    },
    async mounted() {
      const homepages = await this.$axios.get('/articles/homepage');
      this.homepages = homepages.data;
    }
  }
</script>
