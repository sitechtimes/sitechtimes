<template>
  <div>
    <h1>
      {{ article.title }}
    </h1>

    <img v-if="article.imageUrl" :src=article.imageUrl alt="image alt"/>
    {{ article.imageUrl}}

    <p v-html="article.content"></p>
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
      console.log(article.data);
      this.article = article.data;
    } catch(e){
      await this.$router.push('/');
    }
  }
}
</script>
