<template>
  <div>
  {{ article }}
  </div>
</template>

<script>
export default {
  data() {
   return {
     slug: this.$route.params.slug,
     article: {}
   }
  },
  async mounted() {
    try {
      const article = await this.$axios.get(`/articles/${this.slug}`);
      this.article = article.data;
    } catch(e){
      await this.$router.push('/');
    }
  }
}
</script>
