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
            :imageAlt="articles[0].imageAlt"
            :size="{ default: 'medium', type: 'string' }"
            :clampSize="{ default: 'mediumClamp', type: 'string' }"
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
              :imageAlt="articles[1].imageAlt"
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
              :imageAlt="articles[2].imageAlt"
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
          :published="articles[3].updatedAt"
          :imageUrl="articles[3].imageUrl"
          :category="category"
          :articleUrl="`/articles/${articles[3].slug}`"
          :imageAlt="articles[3].imageAlt"
        />
        <CatArticleTwo
          class="sub-art"
          v-if="articles[4]"
          :title="articles[4].title"
          :author="articles[4].user.name"
          :published="articles[4].updatedAt"
          :imageUrl="articles[4].imageUrl"
          :category="category"
          :articleUrl="`/articles/${articles[4].slug}`"
          :imageAlt="articles[4].imageAlt"
        />
        <div>
          <CatArticleTwo
            class="sub-art not-visible"
            v-for="article in allArticles"
            :key="article"
            :category="articles.category"
            :author="articles.user.name"
            :published="articles.updatedAt"
            :title="articles.title"
            :imageUrl="articles.imageUrl"
            :articleUrl="`/articles/${articles.slug}`"
            :imageAlt="articles.imageAlt"
          />
        </div>
      </div>
      <div class="cat-visible">
        <div class="mobile-big-cat-article">
          <CategoryCardComponent
            v-if="articles[0]"
            :title="articles[0].title"
            :author="articles[0].user.name"
            :published="articles[0].updatedAt"
            :imageUrl="articles[0].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[0].slug}`"
            :imageAlt="articles[0].imageAlt"
            :size="{ default: 'medium', type: 'string' }"
            :clampSize="{ default: 'mediumClamp', type: 'string' }"
            class="cat-main-art"
          />
        </div>
        <div class="mobile-cat-sub-arts">
          <CatArticleTwo
            class="mobile-sub-art"
            v-if="articles[1]"
            :title="articles[1].title"
            :author="articles[1].user.name"
            :published="articles[1].updatedAt"
            :imageUrl="articles[1].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[1].slug}`"
            :imageAlt="articles[1].imageAlt"
          />
          <CatArticleTwo
            class="mobile-sub-art"
            v-if="articles[2]"
            :title="articles[2].title"
            :author="articles[2].user.name"
            :published="articles[2].updatedAt"
            :imageUrl="articles[2].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[2].slug}`"
            :imageAlt="articles[2].imageAlt"
          />
        </div>
      </div>
      <div class="rest-of-articles">
        <CatArticleTwo
          class="sub-art cat-visible"
          v-for="article in allArticles"
          :key="article"
          :category="articles.category"
          :author="articles.user.name"
          :published="articles.createdAt"
          :title="articles.title"
          :imageUrl="articles.imageUrl"
          :articleUrl="`/articles/${articles.slug}`"
          :imageAlt="articles.imageAlt"
        />
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

<script setup lang="ts">
const props = defineProps<{
  category: string;
  articles: Promise<any>;
  allArticles: any;
  moreToLoad: boolean;
}>();

const category = ref("");
const page = ref(2);
const articles = ref();
const allArticles = ref([]);
const moreToLoad = ref(true);

const fetchArticles = async () => {
  try {
    const response = await fetch(
      `/articles?category=${category.value}&sort=dateDes`
    );
    articles.value = await response.json();
  } catch (e) {
    await useRouter.push({ path: "/" });
  }
};

const newArticles = async () => {
  const response = await fetch(
    `/articles?category=${category.value}&q=5&page=${page.value}&sort=dateDes`
  );

  page.value += 1;
  allArticles.value = [...allArticles.value, ...(await response.json())];

  moreToLoad.value = response.data.length >= 5;
};

const meta = [
  { name: "title", content: category.value },
  {
    name: "description",
    content:
      "Click to read all articles about " +
      category +
      " written by the SITECH Times team!",
  },
  { name: "og:site_name", content: "SITECHTIMES" },
  { name: "og:title", content: category.value },
  { name: "og:section", content: category.value },
  {
    name: "og:description",
    content:
      "Click to read all articles about " +
      category.value +
      " written by the SITECH Times team!",
  },
  { name: "og:image", content: "/logo_thicker.svg" },
  { name: "og:image:alt", content: "SITECH Times logo" },
  { name: "twitter:card", content: "summary" },
  { name: "twitter:title", content: category.value },
  {
    name: "twitter:description",
    content:
      "Click to read all articles about " +
      category.value +
      " written by the SITECH Times team!",
  },
  { name: "twitter:image", content: "/logo_thicker.svg" },
];

onMounted(fetchArticles);
</script>

<style lang="scss">
@import "../assets/variables.scss";
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
  .mobile-sub-arts {
    width: 100%;
    margin-left: 0;
    -webkit-margin-start: 0;
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
  .rest-of-articles {
    margin-top: -4rem;
  }
  .border-right {
    margin: 0 auto;
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
    height: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .cat-subhead {
    font-size: var(--h3);
    margin-top: 2rem;
    color: var(--on-background);
  }

  .not-visible {
    display: none;
  }
  .visible {
    display: block;
  }
}
</style>
