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
            :published="articles[0].updatedAt"
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
              :published="articles[1].updatedAt"
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
              :published="articles[2].updatedAt"
              :imageUrl="articles[2].imageUrl"
              :category="category"
              :articleUrl="`/articles/${articles[2].slug}`"
            />
          </div>
        </div>
      </div>
      <div class="rest-of-articles">
        <CatArticleTwo
          class="sub-art"
          v-for="article in articles.slice(3)"
          :key="article.id"
          :category="article.category"
          :author="article.user.name"
          :published="article.createdAt"
          :title="article.title"
          :imageUrl="article.imageUrl"
          :articleUrl="`/articles/${article.slug}`"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardComponent from "../components/CardComponent";
import TextBelowArticlePreview from "../components/TextBelowArticlePreview";
import CatArticleTwo from "../components/CatArticleTwo";

export default {
  components: {
    CardComponent,
    TextBelowArticlePreview,
    CatArticleTwo,
  },
  data() {
    return {
      category: this.$route.params.category,
      articles: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get(
        `/articles?category=${this.category}&sort=dateDes&q=999999`
      );
      this.articles = response.data.articles;
    } catch (e) {
      await this.$router.push("/");
    }
  },
  head: function () {
    return {
      meta: [
        { name: "title", content: this.$route.params.category },
        {
          name: "description",
          content:
            "Click to read all articles about " +
            this.$route.params.category +
            " written by the SITECH Times team!",
        },
        { name: "og:site_name", content: "SITECHTIMES" },
        { name: "og:title", content: this.$route.params.category },
        { name: "og:section", content: this.$route.params.category },
        {
          name: "og:description",
          content:
            "Click to read all articles about " +
            this.$route.params.category +
            " written by the SITECH Times team!",
        },
        { name: "og:image", content: "/logo_thicker.svg" },
        { name: "og:image:alt", content: "SITECH Times logo" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: this.$route.params.category },
        {
          name: "twitter:description",
          content:
            "Click to read all articles about " +
            this.$route.params.category +
            " written by the SITECH Times team!",
        },
        { name: "twitter:image", content: "/logo_thicker.svg" },
      ],
    };
  },
};
</script>

<style lang="scss">
@use "../assets/_variables" as *;
.rest-of-articles {
  margin-top: 3.5rem;
}
.border-right {
  border-right: solid var(--primary-color);
  width: 85%;
}
.cat-page-title {
  font-size: var(--h3);
  text-transform: capitalize;
  padding: var(--title-spacing) 0;
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
.sub-art {
  margin-top: 3.4rem;
  margin-bottom: 3.4rem;
}

@media only screen and (max-width: $mid-screen) {
  .border-right {
    width: 100%;
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
    width: 48%;
    justify-content: space-between;
  }
  .sub-art {
    display: flex;
    justify-content: flex-start;
  }
}
@media only screen and (max-width: $x-small-screen) {
  .border-right {
    margin: 0 auto;
  }
  .cat-visible {
    display: flex;
    flex-wrap: wrap;
  }
  .break {
    width: 100%;
    background-color: var(--primary-color);
    height: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .cat-subhead {
    font-size: var(--h3);
    margin-top: 2rem;
    color: var(--on-background);
  }
}
</style>
