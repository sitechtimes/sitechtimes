<template>
  <div class="home-page">
    <div class="global-container">
      <div class="desktop-view">
        <h2 class="section-title">Trending Articles</h2>

        <section class="trending-section">
          <CardComponent v-if="homepages[0]" class="trending-main cardquery" size="medium"
            :articleUrl="'/articles/' + homepages[0].slug" :category="homepages[0].category"
            :imageTitle="homepages[0].imageAlt" :title="homepages[0].title" :imageUrl="homepages[0].imageUrl" />

          <CardComponent v-if="homepages[1]" class="trending-sub" size="small"
            :articleUrl="'/articles/' + homepages[1].slug" :category="homepages[1].category"
            :imageTitle="homepages[1].imageAlt" :title="homepages[1].title" :imageUrl="homepages[1].imageUrl" />

          <CardComponent v-if="homepages[2]" class="trending-detail" size="small"
            :articleUrl="'/articles/' + homepages[2].slug" :category="homepages[2].category"
            :imageTitle="homepages[2].imageAlt" :title="homepages[2].title" :imageUrl="homepages[2].imageUrl" />
        </section>

        <MainCardList :homepages="homepages.slice(-17, -1)" />

        <!--
        <section
          class="grid-article-container trio-grid-container"
          v-if="homepages[3]"
        >
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
            :key="article.id"
            :articleUrl="'/articles/' + article.slug"
            :author="article.user.name"
            :category="article.category"
            :imageAlt="article.imageAlt"
            :title="article.title"
            :imageUrl="article.imageUrl"
          />
        </section>
        -->
      </div>

      <div class="mobile-view">
        <h2 class="section-title section-title-mobile">
          Trending Articles
        </h2>

        <GridArticleComponent v-for="article in homepages.slice(0, 20)" :key="article.id"
          :articleUrl="'/articles/' + article.slug" :category="article.category" :imageAlt="article.imageAlt"
          :title="article.title" :imageUrl="article.imageUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent";
import DuoArticleContainer from "../components/DuoArticleContainer";
import GridArticleComponent from "../components/GridArticleComponent";
import MainCardList from "../components/MainCardList.vue";

export default {
  components: {
    DuoArticleContainer,
    CardComponent,
    GridArticleComponent,
    MainCardList,
  },

  data() {
    return {
      homepages: [],
      isMobile: false,
    };
  },

  async fetch() {
    const res = await this.$axios.get("/articles/homepage");

    const sorted = res.data.sort((a, b) => {
      const hasImageA = Boolean(a.imageUrl);
      const hasImageB = Boolean(b.imageUrl);

      if (hasImageA && !hasImageB) return -1;
      if (!hasImageA && hasImageB) return 1;
      return 0;
    });

    this.homepages = sorted;
  },

  head() {
    return {
      meta: [
        {
          name: "title",
          content: "The SITECH Times Official Website",
        },
        {
          name: "description",
          content: "Visit the Website to read more!",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:title",
          content: "The SITECH Times Official Website",
        },
        {
          name: "og:description",
          content: "Visit the Website to read more!",
        },
        {
          name: "og:image",
          content: "/logo_thicker.svg",
        },
        {
          name: "og:image:alt",
          content: "Staten Island Tech Times Logo",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: "The SITECH Times Official Website",
        },
        {
          name: "twitter:image",
          content: "/logo_thicker.svg",
        },
        {
          name: "twitter:image:alt",
          content: "Staten Island Tech Times Logo",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@use "../assets/_variables" as *;

.home-page {
  width: 100%;
  min-height: 100vh;
}

.global-container {
  width: 100%;
  max-width: $container;
  min-width: 0;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}

.mobile-view {
  display: none;
}

.desktop-view>h2,
.mobile-view>h2 {
  color: var(--on-background);
}

.grid-article-container {
  display: flex;
  margin: var(--section-spacing) 0;
  justify-content: space-between;
  flex-wrap: wrap;
}

.section-title {
  font-size: var(--h3);
  padding: var(--title-spacing) 0;
}

.trending-section {
  width: 100%;
  min-height: 65rem;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  column-gap: 2.5rem;
  row-gap: 2.5rem;
}

.trending-main {
  grid-area: 1 / 1 / 3 / 5;
  min-width: 0;
}

.trending-sub {
  grid-area: 1 / 5 / 2 / 8;
  min-width: 0;
}

.trending-detail {
  grid-area: 2 / 5 / 3 / 8;
  min-width: 0;
}

.global-container>h3 {
  color: var(--on-background);
}

@media only screen and (max-width: $mid-screen) {
  .global-container {
    padding: 1.5rem;
  }

  .trending-section {
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }
}

@media only screen and (max-width: $small-screen) {
  .global-container {
    padding: 1.5rem;
  }

  .desktop-view {
    display: none;
  }

  .mobile-view {
    display: block;
    width: 100%;
    min-width: 0;
  }

  .section-title-mobile {
    margin-bottom: 0;
  }
}
</style>
