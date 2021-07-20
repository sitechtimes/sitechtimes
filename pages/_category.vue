<template>
  <section class="global-container">
    <h1 class="cat-title">{{ category }}</h1>
<div class="border-right">
<div class="cat-main">
  <CardComponent v-if="articles[0]" :title="articles[0].title" :author="articles[0].user.name" :published="articles[0].createdAt" :imageUrl="articles[0].imageUrl" :category="category" :articleUrl="articles[0].slug" class="testing" /> 
    </div>
    <div class="two-sub-articles">
    <TextBelowArticlePreview v-if="articles[1]" :title="articles[1].title" :author="articles[1].user.name" :published="articles[1].createdAt" :imageUrl="articles[1].imageUrl" :category="category" :articleUrl="articles[1].slug"/>
     <TextBelowArticlePreview v-if="articles[2]" :title="articles[2].title" :author="articles[2].user.name" :published="articles[2].createdAt" :imageUrl="articles[2].imageUrl" :category="category" :articleUrl="articles[2].slug"/>
     </div>
     <div class="cat-sub">
  <CategoryArticle class="sub-art" v-if="articles[3]" :title="articles[3].title" :author="articles[3].user.name" :published="articles[3].createdAt" :imageUrl="articles[3].imageUrl" :category="category" :articleUrl="articles[3].slug"/>
        <CategoryArticle class="sub-art" v-if="articles[4]" :title="articles[4].title" :author="articles[4].user.name" :published="articles[4].createdAt" :imageUrl="articles[4].imageUrl" :category="category" :articleUrl="articles[4].slug"/>
         <CategoryArticle class="sub-art" v-if="articles[5]" :title="articles[5].title" :author="articles[5].user.name" :published="articles[5].createdAt" :imageUrl="articles[5].imageUrl" :category="category" :articleUrl="articles[5].slug"/>
        <CategoryArticle class="sub-art" v-if="articles[6]" :title="articles[6].title" :author="articles[6].user.name" :published="articles[6].createdAt" :imageUrl="articles[6].imageUrl" :category="category" :articleUrl="articles[6].slug"/> 
         <CategoryArticle   class="sub-art"  
      v-for="article in hozier"
      :key="article"
      :category="article.category"
      :author="article.user.name"
      :published="article.createdAt"
      :title="article.title"
      :imageUrl="article.imageUrl"
      :articleUrl="article.slug"/>
          <CategoryArticle   class="sub-art"   
      v-for="article in newArticles"
      :key="article"
      :category="article.category"
      :author="article.user.name"
      :published="article.createdAt"
      :title="article.title"
      :imageUrl="article.imageUrl"
      :articleUrl="article.slug"/>
          </div>
        <div class="entertainment-seymour">
          <SeeMoreBtn class="seymour"  @click.native="newArticles()" />
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
      const articles = await this.$axios.get(`/articles?category=${this.category}&sortBy=dateDesc`);
      this.articles = articles.data;
    }catch(e){
      await this.$router.push('/');
    }
  },
  methods: {
   newArticles: async function() {
    try {
      const newArticles = await this.$axios.get(`/articles?category=${this.category}&q=5&page=1`);
      this.newArticles= newArticles.data;
     this.$forceUpdate();
    }catch(e){
      await this.$router.push('/');
    }
   }
  }, 
  // computed: {
  //   hozier: async function(){
  // try {
  //     const articles = await this.$axios.get(`/articles?category=${this.category}`);
  //     this.articles.reverse().forEach(function(){
  //       return articles.data;
  //     })
  //   }catch(e){
  //     await this.$router.push('/');
  //   }
  //   }
  // }
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
  margin-bottom: 1.4rem;
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