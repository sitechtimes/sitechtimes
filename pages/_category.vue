<template>
  <section class= "global-container">
    <h1 class="cat-title">{{ category }}</h1>
<!--    <h1>-->
<!--      <NuxtLink class="block" v-for="article in articles" :to="`/articles/${article.slug}`" :key="article.slug">-->
<!--        {{ article.title }}-->
<!--      </NuxtLink>-->
<!--    </h1>-->
<div class="border-right">
<div class="cat-main">
    <CardComponent v-if="articles[0]" :title="articles[0].title" :author="articles[0].user.name" :published="articles[0].createdAt" :imageUrl="articles[0].imageUrl" :category="category" class="testing" />
    </div>
    <div class="two-sub-articles">
    <TextBelowArticlePreview v-if="articles[1]" :title="articles[1].title" :author="articles[1].user.name" :published="articles[1].createdAt" :imageUrl="articles[1].imageUrl" :category="category"/>
     <TextBelowArticlePreview v-if="articles[2]" :title="articles[2].title" :author="articles[2].user.name" :published="articles[2].createdAt" :imageUrl="articles[2].imageUrl" :category="category"/>
     </div>
     <div class="cat-sub">
    <CategoryArticle class="sub-art" v-if="articles[4]" :title="articles[4].title" :author="articles[4].user.name" :published="articles[4].createdAt" :imageUrl="articles[4].imageUrl" :category="category"/>
        <CategoryArticle class="sub-art" v-if="articles[3]" :title="articles[3].title" :author="articles[3].user.name" :published="articles[3].createdAt" :imageUrl="articles[3].imageUrl" :category="category"/>
         <CategoryArticle class="sub-art" v-if="articles[4]" :title="articles[4].title" :author="articles[4].user.name" :published="articles[4].createdAt" :imageUrl="articles[4].imageUrl" :category="category"/>
        <CategoryArticle class="sub-art" v-if="articles[3]" :title="articles[3].title" :author="articles[3].user.name" :published="articles[3].createdAt" :imageUrl="articles[3].imageUrl" :category="category"/>
        <div class="entertainment-seymour">
          <SeeMoreBtn class="seymour"  @click.native="newArticles()" />
          </div>
    </div>
    </div>
  </section>
</template>
<script>
import CardComponent from "../components/CardComponent";

export default {
  components: {
   CardComponent
  },
  data () {
    return {
      category: this.$route.params.category,
      articles: [],
    }
  },
  async beforeMount () {
    try {
      const articles = await this.$axios.get(`/articles?category=${this.category}`);
      this.articles = articles.data;
      console.log(articles)
    }catch(e){
      await this.$router.push('/');
    }
  },
  methods: {
   newArticles: async function() {
    try {
      const newArticles = await this.$axios.get(`/articles?category=${this.category}&q=5&page=1`);
      this.newArticles = newArticles.data;
     console.log(newArticles.data);
    }catch(e){
      await this.$router.push('/');
    }
   }
  }
  }
</script>

<style>
.testing{ 
  width: 87.5rem;
}
.border-right{
  /* display: inline-block; */
  border-radius: 0.1rem;
  border-right: solid var(--primary-color);
display: flex;
  flex-direction: column;
  width: 85%;
}
.cat-title{
  font-size: var(--h3);
  text-transform: capitalize;
}
.cat-main{
  margin: 6rem 0 6rem 0;
  width: 100%;
}
.two-sub-articles{
  display: flex;
  flex-direction: row;
  margin-bottom: 5rem;
  width: 100%;
}
.cat-sub{
  width: 100%;
}
.sub-art{
  margin-top: 3.4rem;
  margin-bottom: 3.4rem;
}
.entertainment-seymour{
  width: 100%;
  display: flex;
  justify-content: center;
}
.seymour{
  margin-top: 6rem;
}
</style>