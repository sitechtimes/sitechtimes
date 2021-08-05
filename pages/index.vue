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
          :category="homepages[0].category"
          :imageTitle="homepages[0].imageAlt"
          :title="homepages[0].title"
          :imageUrl="homepages[0].imageUrl"
        />
        <CardComponent
          v-if="homepages[1]"
          :articleUrl="'/articles/' + homepages[1].slug"
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
          :category="homepages[2].category"
          :imageTitle="homepages[2].imageAlt"
          :title="homepages[2].title"
          :imageUrl="homepages[2].imageUrl"
          class="trending-detail"
          size="small"
        />
      </section>

      <section class="grid-article-container trio-grid-container" v-if="homepages[3]">
        <GridArticleComponent
          v-for="article in homepages.slice(3, 6)"
          :key="article.id"
          :articleUrl="'/articles/' + article.slug"
          :category="article.category"
          :imageAlt="article.imageAlt"
          :title="article.title"
          :imageUrl="article.imageUrl"
        />
      </section>
      <section>
        <DuoArticleContainer
          v-if="homepages[7]"
          :articles="homepages.slice(7, 9)"
        />
      </section>
      <section class="grid-article-container" v-if="homepages[0]">
        <GridArticleComponent
          v-for="article in homepages.slice(10, 20)"
          :articleUrl="'/articles/' + article.slug"
          :author="article.user.name"
          :published="article.createdAt"
          :category="article.category"
          :imageAlt="article.imageAlt"
          :title="article.title"
          :imageUrl="article.imageUrl"
          :key="article.id"
        />
      </section>
      <section class="image-gallery">
        <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
        <script type="application/javascript" defer src="https://unpkg.com/vue-gallery-slideshow"></script>
      </section>
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent";
import DuoArticleContainer from "../components/DuoArticleContainer";
import GridArticleComponent from "../components/GridArticleComponent";
import VueGallerySlideshow from 'vue-gallery-slideshow';
export default {
  components: {
    DuoArticleContainer,
    CardComponent,
    GridArticleComponent,
    VueGallerySlideshow
  },
  data() {
    return {
      homepages: [],
      isMobile: false,
      images: [
      'https://res.cloudinary.com/alston/image/upload/v1628171963/tech%20placeholder%20pictures/DSC_0996_hbhuqh.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171962/tech%20placeholder%20pictures/DSC_0995_bkn2sh.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171962/tech%20placeholder%20pictures/DSC_0991_o0h81a.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171962/tech%20placeholder%20pictures/DSC_0945_qrqxyt.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171962/tech%20placeholder%20pictures/DSC_0997_nc1mjf.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171962/tech%20placeholder%20pictures/DSC_0993_gddgxx.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171959/tech%20placeholder%20pictures/DSC_0983_ecm5cs.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171958/tech%20placeholder%20pictures/DSC_0811_tfi3x3.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171957/tech%20placeholder%20pictures/DSC_0839_sxcmb3.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171957/tech%20placeholder%20pictures/DSC_0982_wtk7gt.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171956/tech%20placeholder%20pictures/DSC_0958_tedfyd.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171931/tech%20placeholder%20pictures/DSC_0881_xog8ht.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171931/tech%20placeholder%20pictures/DSC_0873_oclwzb.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171931/tech%20placeholder%20pictures/DSC_0874_e4m9py.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171930/tech%20placeholder%20pictures/DSC_0868_ihwzdg.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171930/tech%20placeholder%20pictures/DSC_0877_oimzzx.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171929/tech%20placeholder%20pictures/DSC_0875_dateiv.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171929/tech%20placeholder%20pictures/DSC_0841_aejz03.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171928/tech%20placeholder%20pictures/DSC_0876_t2l2me.jpg',
      'https://res.cloudinary.com/alston/image/upload/v1628171927/tech%20placeholder%20pictures/DSC_0850_gtzzqa.jpg'
    ],
    index: null
    };
  },
  async beforeMount() {
    const homepages = await this.$axios.get("/articles/homepage");
    this.homepages = homepages.data;
  },
  head: {
  meta: [
      { name: 'twitter:card', content: "summary" },
      { name: 'twitter:site', content: 'https://dev.sitechtimes.com/'},
      { name: 'twitter:title', content: "SITECHTIMES" },
      { name: 'twitter:description', content: 'Visit the Website to read more!' },
      { name: 'twitter:image', content: 'https://dev.sitechtimes.com/assets/icons/logo_thicker.svg' },
      { name: 'og:site', content: 'https://dev.sitechtimes.com/'},
      { name: 'og:title', content: "SITECHTIMES" },
      { name: 'og:description', content: 'Visit the Website to read more!' },
      { name: 'og:image', content: 'https://dev.sitechtimes.com/assets/icons/logo_thicker.svg' }
  ]
}
};
</script>

<style lang="scss">
@import "../assets/variables";
.grid-article-container {
  display: flex;
  gap: 2rem;
  margin: var(--section-spacing) 0;
  justify-content: space-between;
  flex-wrap: wrap;
}
// .invisible {
//   height: 0rem;
//   width: 0rem;
// }
.section-title {
  padding: var(--title-spacing) 0;
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
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
}

.global-container > h3 {
  color: var(--on-background);
}
/* .darksection {
  background-color: var(--grey);
  color: white;
  padding-bottom: 5rem;
} */
//.desktop-view {
//  display: grid;
//}
//.mobile-view {
//  display: none;
//}
.image {
  width: 100px;
  height: 100px;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: cover;
}
@media only screen and (max-width: $small-screen) {
  .trending-main {
    grid-area: 1 / 1 / 2 / 2;
  }
  .trending-sub {
    grid-area: 2 / 1 / 3 / 2;
  }
  .trending-detail {
    grid-area: 3 / 1 / 4 / 2;
  }
  .trending-section {
    height: 95rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px; 
  }
  //
  //.desktop-view {
  //  display: none;
  //}
  //.mobile-view {
  //  display: grid;
  //}
}
</style>
