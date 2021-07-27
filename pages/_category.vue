<template>
  <section class="global-container">
<div class="border-right">
  <div class="here">
   <h1 class="cat-title">{{ category }}</h1>
   <div class="all-of-em">
     <div class="snowball-in-hell">
  <CategoryCardComponent v-if="articles[0]" :title="articles[0].title" :author="articles[0].user.name" :published="articles[0].createdAt" :imageUrl="articles[0].imageUrl" :category="category" :articleUrl="`/articles/${articles[0].slug}`"   class="cat-main-art"/>
   </div>
 
     <div class="cat-sub-one">
    <CategoriesTextBelow v-if="articles[1]" :title="articles[1].title" :author="articles[1].user.name" :published="articles[1].createdAt" :imageUrl="articles[1].imageUrl" :category="category" :articleUrl="`/articles/${articles[1].slug}`"/>
    </div>
    <div class="cat-sub-two">
     <CategoriesTextBelow v-if="articles[2]" :title="articles[2].title" :author="articles[2].user.name" :published="articles[2].createdAt" :imageUrl="articles[2].imageUrl" :category="category" :articleUrl="`/articles/${articles[2].slug}`"/>
     </div>
     </div>
<div class="mobile-sub-arts">
  <CatArticleTwo class="sub-art" v-if="articles[3]" :title="articles[3].title" :author="articles[3].user.name" :published="articles[3].createdAt" :imageUrl="articles[3].imageUrl" :category="category" :articleUrl="`/articles/${articles[3].slug}`"/>
        <CatArticleTwo class="sub-art" v-if="articles[4]" :title="articles[4].title" :author="articles[4].user.name" :published="articles[4].createdAt" :imageUrl="articles[4].imageUrl" :category="category" :articleUrl="`/articles/${articles[4].slug}`"/>
          <CatArticleTwo   class="sub-art"
      v-for="article in allArticles"
      :key="article"
      :category="article.category"
      :author="article.user.name"
      :published="article.createdAt"
      :title="article.title"
      :imageUrl="article.imageUrl"
      :articleUrl="`/articles/${article.slug}`"/>
        </div>
      <div class="cat-visible">
        <h2 class="cat-subhead">More Articles</h2>
      <MobileCategoryArticle  class="mobile-cat"  v-if="articles[5]" :title="articles[5].title" :author="articles[5].user.name" :published="articles[5].createdAt" :imageUrl="articles[5].imageUrl" :category="category" :articleUrl="`/articles/${articles[5].slug}`"/>
        <MobileCategoryArticle   class="mobile-cat"   v-if="articles[6]" :title="articles[6].title" :author="articles[6].user.name" :published="articles[6].createdAt" :imageUrl="articles[6].imageUrl" :category="category" :articleUrl="`/articles/${articles[6].slug}`"/>
          <MobileCategoryArticle  class="mobile-cat"   v-if="articles[7]" :title="articles[7].title" :author="articles[7].user.name" :published="articles[7].createdAt" :imageUrl="articles[7].imageUrl" :category="category" :articleUrl="`/articles/${articles[7].slug}`"/>
               <MobileCategoryArticle class="mobile-cat"   v-if="articles[8]" :title="articles[8].title" :author="articles[8].user.name" :published="articles[7].createdAt" :imageUrl="articles[8].imageUrl" :category="category" :articleUrl="`/articles/${articles[8].slug}`"/>
               </div>
               </div>
          </div>
        <div class="entertainment-seymour">
          <SeeMoreBtn class="seymour" v-if="moreToLoad" @click.prevent.native="newArticles()" />
          </div>
  </section>

</template>
<script>
import CardComponent from "../components/CardComponent";
import TextBelowArticlePreview from "../components/TextBelowArticlePreview";
import CatArticleTwo from "../components/CatArticleTwo";
import SeeMoreBtn from "../components/SeeMoreBtn";

export default {
  components: {
   CardComponent, TextBelowArticlePreview, CatArticleTwo, SeeMoreBtn
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

<style lang="scss">
@import '/../assets/variables';
.border-right{
  border-radius: 0.1rem;
  border-right: solid var(--primary-color);
  width: 85%;
}
.cat-title{
  font-size: var(--h3);
  text-transform: capitalize;
  margin-bottom: 3rem;
}
.all-of-em {
    height: 60rem;
    max-width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 30px; 
     margin-right: 1rem;
  }
  .snowball-in-hell {
    grid-area: 1 / 1 / 4 / 3;
  }
  .cat-sub-one{
    grid-area: 4 / 1 / 7 / 2;
  }
  .cat-sub-two {
    grid-area: 4 / 2 / 7 / 3;
  }
  .cat-sub-one,
   .cat-sub-two {
margin-top: 13rem;
  }
  .mobile-sub-arts{
    margin-top: 17rem;
  }
 .sub-art{
   margin-top: 3.4rem;
   margin-bottom: 3.4rem;
  //  width: 100%;
  //  display: flex;
  //  justify-content: flex-start;
 }
 .cat-visible{
   display: none;
}
.entertainment-seymour{
  display: flex;
  justify-content: center;
}
.seymour{
   margin: 6rem 0 20rem 0;
}
.cat-subhead{
  margin-bottom: 2rem;
}
 @media only screen and (max-width: $mid-screen) {
   .global-container{
     background-color:purple;
   }
   .border-right{
 margin-top: 7rem;
       border: none;
       background-color: white;
       width: 100%;
   }
   .all-of-em{
     max-width: 70%;
     background-color: blue;
   }
 .two-cat-articles{
   background-color: teal;
 }
 .mobile-sub-arts{
   width: 100%;
margin-left: 0rem;
   background-color: green;
 }
   .sub-art{
     background-color: red;
     display: flex;
justify-content: flex-start;
   }
     .seymour{
       margin: 6rem 0 10rem 0;
     }
   }
</style>
