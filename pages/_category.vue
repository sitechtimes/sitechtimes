<template>
  <div class="global-container">
    <section class="border-right">
      <div class="category-flex-container">
        <h1 class="cat-page-title">{{ category }}</h1>
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
        <div class="category-row-two">
          <CategoriesTextBelow
            v-if="articles[2]"
            :title="articles[2].title"
            :author="articles[2].user.name"
            :published="articles[2].createdAt"
            :imageUrl="articles[2].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[2].slug}`"
          />
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
      </div>
    </section>
  </div>
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
  }
};
</script>

<style lang="scss">
@import "/../assets/variables";

.category-flex-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 90%;
}
.category-row-two {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 3rem auto;
}

.border-right {
  border-radius: 0.1rem;
  border-right: solid var(--primary-color);
  width: 85%;
}
@media only screen and (max-width: $small-screen) {
  /* .category-flex-container {
  } */
  .category-row-two {
    flex-direction: column;
  }

  .border-right {
    border-radius: 0.1rem;
    border-right: none;
    width: 100%;
  }
}
.cat-page-title {
  font-size: var(--h3);
  text-transform: capitalize;
  margin-bottom: 3rem;
}
.all-of-em {
  display: flex;
  flex-wrap: wrap;
}
.new-penny {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
}
.snowball-in-hell {
  width: 90%;
}
.cat-sub-one,
.cat-sub-two {
  width: 45%;
  margin-top: 7rem;
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
  display: flex;
  justify-content: center;
}
.seymour {
  margin: 6rem 0 20rem 0;
}
.visible {
  display: none;
}

@media only screen and (max-width: $x-small-screen) {
}
</style>
