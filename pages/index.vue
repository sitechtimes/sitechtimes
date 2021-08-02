<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="global-container">
    <!-- <NuxtLink class="block" v-for="homepage in homepages" :to="`/articles/${homepage.slug}`" :key="homepage.slug">
    {{ homepage.title }}
    </NuxtLink> -->
      <h3 class="section-title">Trending Articles</h3>
      <section class="trending-section" >
          <CardComponent
          class="trending-main cardquery"
          size="large"
          v-if="homepages[0]"
          :articleUrl="'/articles/' + homepages[0].slug"
          :author="homepages[0].user.name"
          :published="homepages[0].createdAt"
          :category="homepages[0].category"
          :imageTitle="homepages[0].imageAlt"
          :title="homepages[0].title"
          :imageUrl="homepages[0].imageUrl"
        />
        <CardComponent
          v-if="homepages[1]"
          :articleUrl="'/articles/' + homepages[1].slug"
          :author="homepages[1].user.name"
          :published="homepages[1].createdAt"
          :category="homepages[1].category"
          :imageTitle="homepages[1].imageAlt"
          :title="homepages[1].title"
          :imageUrl="homepages[1].imageUrl"
          class="trending-sub"
          size="medium"
        />
        <CardComponent
          v-if="homepages[2]"
          :articleUrl="'/articles/' + homepages[2].slug"
          :author="homepages[2].user.name"
          :published="homepages[2].createdAt"
          :category="homepages[2].category"
          :imageTitle="homepages[2].imageAlt"
          :title="homepages[2].title"
          :imageUrl="homepages[2].imageUrl"
          class="trending-detail"
          size="medium"
        />
      </section>

      <h3 class="section-title">News</h3>
      <section class="news-section desktop-view">
        <TextBelowArticlePreviewHome 
        v-for="article in news" 
        :key="article"
        :articleUrl="'/articles/' + article.slug"
        :author="article.user.name"
        :published="article.createdAt"
        :category="article.category"
        :imageAlt="article.imageAlt"
        :title="article.title"
        :imageUrl="article.imageUrl"
        />
      </section>
      <section id="news-mobile" class="news-section mobile-view">
        <CategoryArticle
        v-for="article in news" 
        :key="article"
        :articleUrl="'/articles/' + article.slug"
        :author="article.user.name"
        :published="article.createdAt"
        :category="article.category"
        :imageAlt="article.imageAlt"
        :title="article.title"
        :imageUrl="article.imageUrl"
        :class="'news-' + article.position + '-mobile'"
        />
      </section>
      </div>
      <div class="darksection">
        <div class="global-container">
      <h3 class="section-title">Politics</h3>
      <section class="politics-section desktop-view">
        <CardComponent
        v-for="article in politics" 
        :key="article"
        :articleUrl="'/articles/' + article.slug"
        :author="article.user.name"
        :published="article.createdAt"
        :category="article.category"
        :imageAlt="article.imageAlt"
        :title="article.title"
        :imageUrl="article.imageUrl"
        :class="'politics-' + article.position"
        size="medium"
        />
      </section>
      <section id="politics-mobile" class="politics-section mobile-view">
        <TextBelowScience 
        v-if="politics[0]"
        :articleUrl="'/articles/' + politics[0].slug"
        :author="politics[0].user.name"
        :published="politics[0].createdAt"
        :category="politics[0].category"
        :imageAlt="politics[0].imageAlt"
        :title="politics[0].title"
        :imageUrl="politics[0].imageUrl"
        :class="'politics-' + politics[0].position + '-mobile'"
        />
        <CategoryArticle
        v-if="politics[0]"
        :articleUrl="'/articles/' + politics[1].slug"
        :author="politics[1].user.name"
        :published="politics[1].createdAt"
        :category="politics[1].category"
        :imageAlt="politics[1].imageAlt"
        :title="politics[1].title"
        :imageUrl="politics[1].imageUrl"
        :class="'politics-' + politics[1].position + '-mobile'"
        />
        <CategoryArticle
        v-if="politics[0]"
        :articleUrl="'/articles/' + politics[2].slug"
        :author="politics[2].user.name"
        :published="politics[2].createdAt"
        :category="politics[2].category"
        :imageAlt="politics[2].imageAlt"
        :title="politics[2].title"
        :imageUrl="politics[2].imageUrl"
        :class="'politics-' + politics[2].position + '-mobile'"
        />
      </section>
      
      </div>
      </div>
      <div class="global-container">
      <h3 class="section-title">Entertainment</h3>
      <section class="entertainment-section desktop-view">
        <CardComponent 
        v-if="entertainment[0]"
        :articleUrl="'/articles/' + entertainment[0].slug"
        :author="entertainment[0].user.name"
        :published="entertainment[0].createdAt"
        :category="entertainment[0].category"
        :imageAlt="entertainment[0].imageAlt"
        :title="entertainment[0].title"
        :imageUrl="entertainment[0].imageUrl"
        :class="'entertainment-' + entertainment[0].position"
        size="medium"
        />
        <EntertainmentSideArticle
        v-if="entertainment[1]"
        :articleUrl="'/articles/' + entertainment[1].slug"
        :author="entertainment[1].user.name"
        :published="entertainment[1].createdAt"
        :category="entertainment[1].category"
        :imageAlt="entertainment[1].imageAlt"
        :title="entertainment[1].title"
        :imageUrl="entertainment[1].imageUrl"
        :class="'entertainment-' + entertainment[1].position"
        />
        <EntertainmentSideArticle
        v-if="entertainment[2]"
        :articleUrl="'/articles/' + entertainment[2].slug"
        :author="entertainment[2].user.name"
        :published="entertainment[2].createdAt"
        :category="entertainment[2].category"
        :imageAlt="entertainment[2].imageAlt"
        :title="entertainment[2].title"
        :imageUrl="entertainment[2].imageUrl"
        :class="'entertainment-' + entertainment[2].position"
        />
      </section>
      <section id="entertainment-mobile" class="entertainment-section mobile-view">
        <CardComponent 
        v-for="article in entertainment" 
        :key="article"
        :articleUrl="'/articles/' + article.slug"
        :author="article.user.name"
        :published="article.createdAt"
        :category="article.category"
        :imageAlt="article.imageAlt"
        :title="article.title"
        :imageUrl="article.imageUrl"
        :class="'entertainment-' + article.position + '-mobile'"
        size="medium"
        />
      </section>
      <h3 class="section-title">Opinion</h3>
      <OpinionSlider :articles="opinion"/>
      </div>
      <div class="darksection">
      <div class="global-container">
      <h3 class="section-title">Science</h3>
      <section class="science-section">
        <CategoryArticle 
        v-for="article in science" 
        :key="article"
        :articleUrl="'/articles/' + article.slug"
        :author="article.user.name"
        :published="article.createdAt"
        :category="article.category"
        :imageAlt="article.imageAlt"
        :title="article.title"
        :imageUrl="article.imageUrl"
        :class="'news-' + article.position + '-mobile'"
        />
      </section>
      </div>
      </div>
      <div class="global-container">
      <h3 class="section-title">Activities</h3>
      <section class="news-section desktop-view">
        <TextBelowArticlePreviewHome
        v-for="article in activities" 
        :key="article"
        :articleUrl="'/articles/' + article.slug"
        :author="article.user.name"
        :published="article.createdAt"
        :category="article.category"
        :imageAlt="article.imageAlt"
        :title="article.title"
        :imageUrl="article.imageUrl"
        />
      </section>
      <section id="activities-mobile" class="news-section mobile-view">
        <CategoryArticle
        v-for="article in activities" 
        :key="article"
        :articleUrl="'/articles/' + article.slug"
        :author="article.user.name"
        :published="article.createdAt"
        :category="article.category"
        :imageAlt="article.imageAlt"
        :title="article.title"
        :imageUrl="article.imageUrl"
        :class="'news-' + article.position + 'mobile'"
        />
      </section>
      </div>
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

.invisible {
  height: 0rem;
  width: 0rem;
}

.section-title {
  padding: 4rem 0;
}
.trending-main {
  grid-area: 1 / 1 / 3 / 5;
}
.trending-sub {
  grid-area: 1 / 5 / 2 / 8;
}
.trending-detail {
  grid-area: 2 / 5 / 3 / 8;
}
.trending-section {
  height: 65rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}


.news-section {
  height: auto;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
}
.politics-section {
  height: 40rem;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.politics-main {
  grid-area: 1 / 1 / 2 / 8;
}
.politics-sub {
  grid-area: 1 / 8 / 2 / 13;
}
.politics-detail {
  grid-area: 1 / 13 / 2 / 17;
}
.entertainment-section {
  height: 45rem;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 2rem;
}
.entertainment-main {
  grid-area: 1 / 1 / 3 / 6;
}
.entertainment-sub {
  grid-area: 1 / 6 / 2 / 10;
}
.entertainment-detail {
  grid-area: 2 / 6 / 3 / 10;
}
.science-section {
  height: 75rem;
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: repeat(3, 1fr);
}
.science-main {
  grid-area: 1 / 1 / 2 / 2;
}
.science-sub {
  grid-area: 2 / 1 / 3 / 2;
}
.science-detail {
  grid-area: 3 / 1 / 4 / 2;
}
.darksection {
  background-color: var(--grey);
  color: white;
  padding-bottom: 5rem;
}
.desktop-view {
  display: grid;
}
.mobile-view {
  display: none;
}

@media only screen and (max-width: $mid-screen) {
  .science-section {
  height: 50rem;
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: repeat(3, 1fr);
}
}
@media only screen and (max-width: $small-screen) {
  .trending-main {
  grid-area: 1 / 1 / 2 / 3;
}
.trending-sub {
  grid-area: 2 / 1 / 3 / 2;
}
.trending-detail {
  grid-area: 2 / 2 / 3 / 3;
}
.trending-section {
  height: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3.5rem 3.5rem;
}
    .science-section {
    height: 40rem;
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(3, 1fr);
  }
  #news-mobile {
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px; 
  }
  .news-main-mobile {
    grid-area: 1 / 1 / 2 / 2;
  }
  .news-sub-mobile {
    grid-area: 2 / 1 / 3 / 2;
  }
  .news-detail-mobile {
    grid-area: 3 / 1 / 4 / 2;
  }
  #politics-mobile {
    height: 80rem;
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 20px; 
  }
  .politics-main-mobile {
    grid-area: 1 / 1 / 4 / 2;
  }
  .politics-sub-mobile {
    grid-area: 4 / 1 / 5 / 2;
  }
  .politics-detail-mobile {
    grid-area: 5 / 1 / 6 / 2;
  }
  #entertainment-mobile {
    height: 80rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px; 
  }
  .entertainment-main-mobile {
    grid-area: 1 / 1 / 4 / 3;
  }
  .entertainment-sub-mobile {
    grid-area: 4 / 1 / 7 / 2;
  }
  .entertainment-detail-mobile {
    grid-area: 4 / 2 / 7 / 3;
  }
  #activities-mobile {
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px; 
  }
  .desktop-view {
    display: none;
  }
  .mobile-view {
    display: grid;
  }
}
@media only screen and (max-width: $x-small-screen) {
  .science-section {
  height: 40rem;
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: repeat(3, 1fr);
}
}

</style>
