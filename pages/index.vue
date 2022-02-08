<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="global-container">
      <div class="desktop-view">
        <h2 class="section-title">Trending Articles</h2>
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

        <section
          class="grid-article-container trio-grid-container"
          v-if="homepages[3]"
        >
          <GridArticleComponent
            v-for="article in homepages.slice(3, 6)"
            :articleUrl="'/articles/' + article.slug"
            :category="article.category"
            :imageAlt="article.imageAlt"
            :title="article.title"
            :imageUrl="article.imageUrl"
            :key="article.id"
          />
        </section>
        <section>
          <DuoArticleContainer
            class="not-on-ipad"
            v-if="homepages[7]"
            :articles="homepages.slice(7, 9)"
          />
        </section>
        <section
          class="grid-article-container six-grid-container"
          v-if="homepages[0]"
        >
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
      </div>
      <div class="mobile-view">
        <h2 class="section-title section-title-mobile">Trending Articles</h2>
        <GridArticleComponent
          v-for="article in homepages.slice(0, 20)"
          :articleUrl="'/articles/' + article.slug"
          :category="article.category"
          :imageAlt="article.imageAlt"
          :title="article.title"
          :imageUrl="article.imageUrl"
          :key="article.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent";
import DuoArticleContainer from "../components/DuoArticleContainer";
import GridArticleComponent from "../components/GridArticleComponent";
export default {
  components: {
    DuoArticleContainer,
    CardComponent,
    GridArticleComponent
  },
  data() {
    return {
      homepages: [],
      isMobile: false
    };
  },
  async beforeMount() {
    const homepages = await this.$axios.get("/articles/homepage");
    this.homepages = homepages.data;
    console.log(homepages.data);
  },
  head: function() {
    return {
      meta: [
        { name: "title", content: "The SITECH Times Official Website" },
        { name: "description", content: "Visit the Website to read more!" },
        { name: "og:type", content: "website" },
        { name: "og:title", content: "The SITECH Times Official Website" },
        { name: "og:description", content: "Visit the Website to read more!" },
        { name: "og:image", content: "/logo_thicker.svg" },
        { name: "og:image:alt", content: "Staten Island Tech Times Logo" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "The SITECH Times Official Website" },
        { name: "twitter:image", content: "/logo_thicker.svg" },
        { name: "twitter:image:alt", content: "Staten Island Tech Times Logo" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/variables";
.mobile-view {
  display: none;
}
.desktop-view > h2,
.mobile-view > h2 {
  color: var(--on-background);
}
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
  font-size: var(--h3);
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
@media only screen and (max-width: $mid-screen) {
  // .not-on-ipad{
  //   display: none;
  // }
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
  .desktop-view {
    display: none;
  }
  .mobile-view {
    display: inherit;
  }
  .section-title-mobile {
    margin-bottom: -5rem;
  }
}
</style>
