<template>
<div class="duo-article-component-container">
  <DuoArticleComponent  v-if="homepages[7]"
          :articleUrl="'/articles/' + homepages[7].slug"
          :author="homepages[7].user.name"
          :published="homepages[7].createdAt"
          :category="homepages[7].category"
          :imageTitle="homepages[7].imageAlt"
          :title="homepages[7].title"
          :imageUrl="homepages[7].imageUrl"
          class="trending-detail duo-one"
          size="small"
    />
          <DuoArticleComponent  v-if="homepages[8]"
          :articleUrl="'/articles/' + homepages[8].slug"
          :author="homepages[8].user.name"
          :published="homepages[8].createdAt"
          :category="homepages[8].category"
          :imageTitle="homepages[8].imageAlt"
          :title="homepages[8].title"
          :imageUrl="homepages[8].imageUrl"
          class="trending-detail duo-two"
          size="small"/> 
          </div>
</template>

<script>
export default {    
  data() {
    return {
      homepages: [],
      isMobile: false,
      news: [],
      politics: [],
      entertainment: [],
      opinion: [],
      science: [],
      activities: [],
    };
  },
  async beforeMount() {
    const homepages = await this.$axios.get("/articles/homepage");
    this.homepages = homepages.data;
    console.log(this.homepages);

    this.news = this.homepages.filter((article) => article.category === 'covid');
    this.politics = this.homepages.filter((article) => article.category === 'entertainment');
    console.log(this.politics);
    this.entertainment = this.homepages.filter((article) => article.category === 'entertainment');
    this.opinion = this.homepages.filter((article) => article.category === 'entertainment');
    this.science = this.homepages.filter((article) => article.category === 'science');
    this.activities = this.homepages.filter((article) => article.category === 'world');


    //const entertainment = await this.$axios.get("/articles/homepage?category=news");
    //this.entertainment = entertainment.data;


  },
  computed: {
    categoryFilter: function() {
      return _.pickBy
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "../assets/variables";
.duo-article-component-container{
display: flex;
flex-direction: row;
justify-content: space-between;
 gap: 2rem; 
}
.duo-one, .duo-two{
    width: 50%;
}
// @media only screen and (max-width: $x-small-screen) {
// .duo-one, .duo-two{
//     width: 45%;
// }
// }
@media only screen and (max-width: 400px){
    .duo-article-component-container{
        flex-direction: column;
    }
    .duo-one, .duo-two{
    width: 100%;
}
}
</style>