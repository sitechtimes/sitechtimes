<template>
  <section>
<div class="border-right">
  <div class="cat-main-parent">
<div class="cat-main">
    <h1 class="cat-title">{{ category }}</h1>
  <CardComponent v-if="articles[0]" :title="articles[0].title" :author="articles[0].user.name" :published="articles[0].createdAt" :imageUrl="articles[0].imageUrl" :category="category" :articleUrl="`/articles/${articles[0].slug}`" class="cat-main-art" />
    </div>
    </div>
    <div class="two-sub-articles">
    <TextBelowArticlePreview v-if="articles[1]" :title="articles[1].title" :author="articles[1].user.name" :published="articles[1].createdAt" :imageUrl="articles[1].imageUrl" :category="category" :articleUrl="`/articles/${articles[1].slug}`"/>
     <TextBelowArticlePreview v-if="articles[2]" :title="articles[2].title" :author="articles[2].user.name" :published="articles[2].createdAt" :imageUrl="articles[2].imageUrl" :category="category" :articleUrl="`/articles/${articles[2].slug}`"/>
     </div>
  <CategoryArticle class="sub-art" v-if="articles[3]" :title="articles[3].title" :author="articles[3].user.name" :published="articles[3].createdAt" :imageUrl="articles[3].imageUrl" :category="category" :articleUrl="`/articles/${articles[3].slug}`"/>
        <CategoryArticle class="sub-art" v-if="articles[4]" :title="articles[4].title" :author="articles[4].user.name" :published="articles[4].createdAt" :imageUrl="articles[4].imageUrl" :category="category" :articleUrl="`/articles/${articles[4].slug}`"/>
          <CategoryArticle   class="sub-art"
      v-for="article in allArticles"
      :key="article"
      :category="article.category"
      :author="article.user.name"
      :published="article.createdAt"
      :title="article.title"
      :imageUrl="article.imageUrl"
      :articleUrl="`/articles/${article.slug}`"/>
          </div>
        <div class="entertainment-seymour">
          <SeeMoreBtn class="seymour" v-if="moreToLoad" @click.prevent.native="newArticles()" />
          </div>
  </section>

</template>
<script>
import CardComponent from "../components/CardComponent";
import TextBelowArticlePreview from "../components/TextBelowArticlePreview";
import CategoryArticle from "../components/CategoryArticle";
import SeeMoreBtn from "../components/SeeMoreBtn";

export default {
  components: {
   CardComponent, TextBelowArticlePreview, CategoryArticle, SeeMoreBtn
  },
  data () {
    return {
         category: this.$route.params.category,
      page: 2,
      articles: [],
      allArticles: [],
      moreToLoad: true
    }
  },
  async beforeMount () {
    try {
      const articles = await this.$axios.get(`/articles?category=${this.category}&sort=dateDes`);
      this.articles = articles.data;
    }catch(e){
      await this.$router.push('/');
    }
  },
  methods: {
  newArticles() {
     this.$axios.get(`/articles?category=${this.category}&q=5&page=${this.page}&sort=dateDes`).then((response)=> {
       this.page++;
       this.allArticles = [].concat(this.allArticles, response.data);
       if(response.data.length < 5){
         this.moreToLoad = false;
       }
       else{
         this.moreToLoad = true;
       }
       return(this.allArticles)
     })
   }
  }
  }
</script>

<style>
.border-right{
  border-radius: 0.1rem;
  margin-left: 5%;
  border-right: solid var(--primary-color);
  width: 85%;
}
.cat-title{
  font-size: var(--h3);
  text-transform: capitalize;
  width: 100%;
  margin-bottom: 3rem;
}
.cat-main-parent{
  display: grid;
grid-template-columns: repeat( 1fr);
grid-template-rows: repeat( 1fr);
width: 90%;
}
.cat-main{
  margin: 6rem 0 6rem 0;


}
.cat-main-art{
    width: 100%;
  grid-area: 1 / 1 / 2 / 3;
}
.two-sub-articles{
  display: flex;
  flex-direction: row;
}
.sub-art{
  margin-top: 3.4rem;
  margin-bottom: 3.4rem;
}
.entertainment-seymour{
  display: flex;
  justify-content: center;
}
.seymour{
   margin: 6rem 0 20rem 0;
}
</style>
