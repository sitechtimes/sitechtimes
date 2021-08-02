<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="global-container">

      <h3 class="section-title">Trending Articles</h3>
      <section class="trending-section">
          <CardComponent
          class="trending-main cardquery"
          size="medium"
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
          size="small"
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
          size="small"
        />
      </section>


      <section class="grid-article-container">
        <GridArticleComponent
          v-if="homepages[3]"
          v-for="article in homepages.slice(3, 6)"
          :articleUrl="'/articles/' + article.slug"
          :author="article.user.name"
          :published="article.createdAt"
          :category="article.category"
          :imageAlt="article.imageAlt"
          :title="article.title"
          :imageUrl="article.imageUrl"
          :class="'politics-' + article.position + '-mobile'"
        />
      </section>

      <section>
        <DuoArticleContainer v-if="homepages[7]" :articles="homepages.slice(7, 9)"/>
      </section>

      <section class="grid-article-container">
        <GridArticleComponent
          v-for="article in homepages.slice(10, 20)"
          v-if="homepages[0]"
          :articleUrl="'/articles/' + article.slug"
          :author="article.user.name"
          :published="article.createdAt"
          :category="article.category"
          :imageAlt="article.imageAlt"
          :title="article.title"
          :imageUrl="article.imageUrl"
          :class="'politics-' + article.position + '-mobile'"
        />
      </section>
      </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent";
import DuoArticleContainer from "../components/DuoArticleContainer";
import GridArticleComponent from "../components/GridArticleComponent";
export default {
  components: {
    DuoArticleContainer, CardComponent, GridArticleComponent
  },
  data() {
    return {
      homepages: [],
      isMobile: false,
    };
  },
  async beforeMount() {
    const homepages = await this.$axios.get("/articles/homepage");
    this.homepages = homepages.data;
  }
}
</script>

<style lang="scss">
@import "../assets/variables";
.grid-article-container {
  display: flex;
  gap: 2rem;
  margin: 4rem 0;
  justify-content: space-between;
  flex-wrap: wrap;
}
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
  grid-area: 1 / 1 / 8 / 2;
}
.trending-sub {
  grid-area: 8 / 1 / 13 / 2;
}
.trending-detail {
  grid-area: 13 / 1 / 18 / 2;
}
.trending-section {
  height: 80rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(17, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
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
