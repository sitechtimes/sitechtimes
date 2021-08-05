<template>
  <section class="global-container">
    <div class="border-right">
      <h1 class="cat-page-title">{{ category }}</h1>
      <div class="three-cat-articles">
        <div class="big-cat-article">
          <CategoryCardComponent
            v-if="articles[0]"
            :title="articles[0].title"
            :author="articles[0].user.name"
            :published="articles[0].createdAt"
            :imageUrl="articles[0].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[0].slug}`"
            class="cat-main-art"
          />
        </div>
        <div class="two-cat-articles">
          <div class="cat-sub-one">
            <CategoriesTextBelow
              v-if="articles[1]"
              :title="articles[1].title"
              :author="articles[1].user.name"
              :published="articles[1].createdAt"
              :imageUrl="articles[1].imageUrl"
              :category="category"
              :articleUrl="`/articles/${articles[1].slug}`"
            />
          </div>
          <div class="cat-sub-two">
            <CategoriesTextBelow
              v-if="articles[2]"
              :title="articles[2].title"
              :author="articles[2].user.name"
              :published="articles[2].createdAt"
              :imageUrl="articles[2].imageUrl"
              :category="category"
              :articleUrl="`/articles/${articles[2].slug}`"
            />
          </div>
        </div>
      </div>
      <div class="mobile-sub-arts">
        <CatArticleTwo
          class="sub-art"
          v-if="articles[3]"
          :title="articles[3].title"
          :author="articles[3].user.name"
          :published="articles[3].createdAt"
          :imageUrl="articles[3].imageUrl"
          :category="category"
          :articleUrl="`/articles/${articles[3].slug}`"
        />
        <CatArticleTwo
          class="sub-art"
          v-if="articles[4]"
          :title="articles[4].title"
          :author="articles[4].user.name"
          :published="articles[4].createdAt"
          :imageUrl="articles[4].imageUrl"
          :category="category"
          :articleUrl="`/articles/${articles[4].slug}`"
        />
        <CatArticleTwo
          class="sub-art cat-visible"
          v-if="articles[5]"
          :title="articles[5].title"
          :author="articles[5].user.name"
          :published="articles[5].createdAt"
          :imageUrl="articles[5].imageUrl"
          :category="category"
          :articleUrl="`/articles/${articles[5].slug}`"
        />
        <div>
          <CatArticleTwo
            class="sub-art not-visible"
            v-for="article in allArticles"
            :key="article"
            :category="article.category"
            :author="article.user.name"
            :published="article.createdAt"
            :title="article.title"
            :imageUrl="article.imageUrl"
            :articleUrl="`/articles/${article.slug}`"
          />
        </div>
      </div>
      <div class="cat-visible">
        <div class="mobile-big-cat-article">
          <CategoryCardComponent
            v-if="articles[0]"
            :title="articles[0].title"
            :author="articles[0].user.name"
            :published="articles[0].createdAt"
            :imageUrl="articles[0].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[0].slug}`"
            class="cat-main-art"
          />
        </div>
        <div class="mobile-cat-sub-arts">
          <CatArticleTwo
            class="mobile-sub-art"
            v-if="articles[1]"
            :title="articles[1].title"
            :author="articles[1].user.name"
            :published="articles[1].createdAt"
            :imageUrl="articles[1].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[1].slug}`"
          />
          <CatArticleTwo
            class="mobile-sub-art"
            v-if="articles[2]"
            :title="articles[2].title"
            :author="articles[2].user.name"
            :published="articles[2].createdAt"
            :imageUrl="articles[2].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[2].slug}`"
          />
        </div>
        <div class="break"></div>
        <h2 class="cat-subhead">More Articles</h2>
        <MobileCategoryArticle
          class="mobile-cat"
          v-if="articles[3]"
          :title="articles[3].title"
          :author="articles[3].user.name"
          :published="articles[3].createdAt"
          :imageUrl="articles[3].imageUrl"
          :category="category"
          :articleUrl="`/articles/${articles[3].slug}`"
        />
        <MobileCategoryArticle
          class="mobile-cat"
          v-if="articles[4]"
          :title="articles[4].title"
          :author="articles[4].user.name"
          :published="articles[4].createdAt"
          :imageUrl="articles[4].imageUrl"
          :category="category"
          :articleUrl="`/articles/${articles[4].slug}`"
        />
        <MobileCategoryArticle
          class="mobile-cat"
          v-if="articles[5]"
          :title="articles[5].title"
          :author="articles[5].user.name"
          :published="articles[5].createdAt"
          :imageUrl="articles[5].imageUrl"
          :category="category"
          :articleUrl="`/articles/${articles[5].slug}`"
        />
        <div>
          <MobileCategoryArticle
            class="visible"
            v-for="article in allArticles"
            :key="article"
            :category="article.category"
            :author="article.user.name"
            :published="article.createdAt"
            :title="article.title"
            :imageUrl="article.imageUrl"
            :articleUrl="`/articles/${article.slug}`"
          />
        </div>
      </div>
    </div>
    <div class="entertainment-seymour">
      <SeeMoreBtn
        class="seymour"
        v-if="moreToLoad"
        @click.prevent.native="newArticles()"
      />
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
    CardComponent,
    TextBelowArticlePreview,
    CatArticleTwo,
    SeeMoreBtn
  },
  data() {
    return {
      category: this.$route.params.category,
      page: 2,
      articles: [],
      allArticles: [],
      moreToLoad: true
    };
  },
  async beforeMount() {
    try {
      const articles = await this.$axios.get(
        `/articles?category=${this.category}&sort=dateDes`
      );
      this.articles = articles.data;
    } catch (e) {
      await this.$router.push("/");
    }
  },
  methods: {
    newArticles() {
      this.$axios
        .get(
          `/articles?category=${this.category}&q=5&page=${this.page}&sort=dateDes`
        )
        .then(response => {
          this.page++;
          this.allArticles = [].concat(this.allArticles, response.data);
          if (response.data.length < 5) {
            this.moreToLoad = false;
          } else {
            this.moreToLoad = true;
          }
          return this.allArticles;
        });
    }
  },
  head: function() {
    return {
      meta: [
      { property: 'og:url', content: `https://dev.sitechtimes.com/${this.category}`},
      { property: 'og:site_name', content: 'SITECHTIMES'},
      { property: 'og:title', content: this.category },
      { property: 'og:section', content: this.category },
      { property: 'og:description', content: "Click to read all articles about" + this.category + "writen by the SITECH Times team!"},
      { property: 'og:image', content: this.articles[0].imageUrl },
      { property: 'og:image:alt', content: this.articles[0].imageAlt },
      { property: 'twitter:card', content: 'summary'},
      { property: 'twitter:url', content: `https://dev.sitechtimes.com/${this.category}`},
      { property: 'twitter:title', content: this.category },
      { property: 'twitter:description', content: "Click to read all articles about" + this.category + "writen by the SITECH Times team!"},,
      { property: 'twitter:image', content: "https://dev.sitechtimes.com/assets/icons/logo_thicker.svg" },
  ]
    }
  }
};
</script>

<style lang="scss">
@import "/../assets/variables";
.border-right {
  border-radius: 0.1rem;
  border-right: solid var(--primary-color);
  width: 85%;
}
.cat-page-title {
  font-size: var(--h3);
  text-transform: capitalize;
  margin-bottom: 3rem;
  color: var(--on-background);
}
.three-cat-articles {
  display: flex;
  flex-wrap: wrap;
}
.two-cat-articles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
}
.big-cat-article {
  width: 90%;
}
.cat-sub-one,
.cat-sub-two {
  width: 48.5%;
  margin-top: 3rem;
}
.mobile-sub-arts {
  margin-top: 9rem;
}
.sub-art {
  margin-top: 3.4rem;
  margin-bottom: 3.4rem;
}
.cat-visible {
  display: none;
}
.entertainment-seymour {
  width: 85%;
  display: flex;
  justify-content: center;
}
.seymour {
  margin: 6rem 0 20rem 0;
}
.visible {
  display: none;
}
@media only screen and (max-width: $mid-screen) {
  .border-right {
    width: 100%;
    // margin-left: 5%;
    margin-top: 7rem;
    border: none;
  }
  .two-cat-articles {
    width: 100%;
  }
  .big-cat-article {
    width: 100%;
  }
  .cat-sub-one,
  .cat-sub-two {
    width: 50%;
    justify-content: space-between;
  }
  .mobile-sub-arts {
    width: 100%;
    margin-left: 0rem;
  }
  .sub-art {
    display: flex;
    justify-content: flex-start;
  }
  .entertainment-seymour {
    width: 100%;
  }
  .seymour {
    margin: 6rem 0 10rem 0;
  }
}
@media only screen and (max-width: $small-screen) {
  .seymour {
    margin: 4rem 0 10rem 0;
  }
}
@media only screen and (max-width: $x-small-screen) {
  .border-right {
    width: 95%;
    margin: 0 auto;
    margin-top: var(--title-spacing);
  }
  .three-cat-articles,
  .mobile-sub-arts {
    display: none;
  }
  .cat-visible {
    display: flex;
    flex-wrap: wrap;
  }
  .mobile-big-cat-article {
    width: 100%;
  }
  .mobile-cat-sub-arts {
    width: 100%;
    justify-content: flex-end;
  }
  .mobile-sub-art {
    width: 100%;
    margin-top: 3.4rem;
    margin-bottom: 3.4rem;
  }
  .break {
    width: 100%;
    background-color: var(--primary-color);
    height: 0.6rem;
    border-radius: 0.3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .cat-subhead {
    margin-top: 2rem;
  }
  .mobile-cat {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
  .not-visible {
    display: none;
  }
  .visible {
    display: block;
  }
  .entertainment-seymour {
    width: 95%;
  }
}
</style>
