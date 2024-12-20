<template>
  <section class="global-container">
    <div class="w-full md:w-[85%]">
      <h3 class="py-[var(--title-spacing)] capitalize text-[var(--on-background)]">{{ category }}</h3>
      <div class="hidden flex-wrap sm:flex">
        <div class="w-full md:w-[90%]">
          <ArticleCard
            v-if="articles[0]"
            :title="articles[0].title"
            :author="articles[0].user.name"
            :published="articles[0].updatedAt"
            :imageUrl="articles[0].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[0].slug}`"
            class="cat-main-art"
            image-alt=""
            size="medium"
            clamp-size="medium"
          />
        </div>
        <div class="flex w-full justify-between md:w-[90%]">
          <div class="mt-12 w-[48%] justify-between md:justify-normal">
            <CategoryTextBelow
              v-if="articles[1]"
              :title="articles[1].title"
              :author="articles[1].user.name"
              :published="articles[1].updatedAt"
              :imageUrl="articles[1].imageUrl"
              :category="category"
              :articleUrl="`/articles/${articles[1].slug}`"
              image-alt=""
            />
          </div>
          <div class="mt-12 w-[48%] justify-between md:justify-normal">
            <CategoryTextBelow
              v-if="articles[2]"
              :title="articles[2].title"
              :author="articles[2].user.name"
              :published="articles[2].updatedAt"
              :imageUrl="articles[2].imageUrl"
              :category="category"
              :articleUrl="`/articles/${articles[2].slug}`"
              image-alt=""
            />
          </div>
        </div>
      </div>
      <div class="hidden w-full sm:block">
        <CategoryArticle
          class="my-14 flex justify-start md:block"
          v-if="articles[3]"
          :title="articles[3].title"
          :author="articles[3].user.name"
          :published="articles[3].updatedAt"
          :imageUrl="articles[3].imageUrl"
          :category="category"
          :articleUrl="`/articles/${articles[3].slug}`"
          image-alt=""
        />
        <CategoryArticle
          class="my-14 flex justify-start md:block"
          v-if="articles[4]"
          :title="articles[4].title"
          :author="articles[4].user.name"
          :published="articles[4].updatedAt"
          :imageUrl="articles[4].imageUrl"
          :category="category"
          :articleUrl="`/articles/${articles[4].slug}`"
          image-alt=""
        />
      </div>
      <div class="flex flex-wrap sm:hidden">
        <div class="w-full sm:w-auto">
          <CategoryCard
            v-if="articles[0]"
            :title="articles[0].title"
            :author="articles[0].user.name"
            :published="articles[0].updatedAt"
            :imageUrl="articles[0].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[0].slug}`"
            image-alt=""
            size="medium"
            clamp-size="medium"
          />
        </div>
        <div class="w-full">
          <CategoryArticle
            class="mt-36 hidden w-full sm:block md:w-auto"
            v-if="articles[1]"
            :title="articles[1].title"
            :author="articles[1].user.name"
            :published="articles[1].updatedAt"
            :imageUrl="articles[1].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[1].slug}`"
            image-alt=""
          />
          <CategoryArticle
            class="mt-36 hidden w-full sm:block md:w-auto"
            v-if="articles[2]"
            :title="articles[2].title"
            :author="articles[2].user.name"
            :published="articles[2].updatedAt"
            :imageUrl="articles[2].imageUrl"
            :category="category"
            :articleUrl="`/articles/${articles[2].slug}`"
            image-alt=""
          />
        </div>
      </div>
      <div class="-mt-16 sm:mt-14">
        <CategoryArticle
          class="my-14 flex flex-wrap justify-start sm:flex-nowrap md:block"
          v-for="article in allArticles"
          :key="article.id"
          :category="article.category"
          :author="article.user.name"
          :published="article.createdAt"
          :title="article.title"
          :imageUrl="article.imageUrl"
          :articleUrl="`/articles/${article.slug}`"
          image-alt=""
        />
      </div>
    </div>
    <div class="flex w-full justify-center md:w-[85%]">
      <SeeMoreBtn class="mb-40 mt-16 sm:mt-24 md:mb-80" v-if="moreToLoad" @click.prevent.native="newArticles()" />
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: () => route.params.category as string,
  description: () => "Click to read all articles about " + route.params.category + " written by the SITECH Times team!",
  ogSiteName: "SITECHTIMES",
  ogTitle: () => route.params.category as string,
  articleSection: () => route.params.category as string,
  ogDescription: () => "Click to read all articles about " + route.params.category + " written by the SITECH Times team!",
  ogImage: "/logo_thicker.svg",
  ogImageAlt: "SITECH Times logo",
  twitterCard: "summary",
  twitterTitle: () => route.params.category as string,
  twitterDescription: () => "Click to read all articles about " + route.params.category + " written by the SITECH Times team!",
  twitterImage: "/logo_thicker.svg"
});

const route = useRoute();
const router = useRouter();

const category = route.params.category as string;

const articles = ref<any[]>([]);
const allArticles = ref<any[]>([]);
const moreToLoad = ref(false);

onMounted(() => {
  fetchArticles();
});

async function fetchArticles() {
  try {
    const response = (await $fetch(`/articles?category=${category}&sort=dateDes&q=999999`)) as any;
    articles.value = response.articles;
    moreToLoad.value = response.isMore;
  } catch (error) {
    await router.push("/");
  }
}

async function newArticles() {
  try {
    const response = (await $fetch(`/articles?category=${category}&q=5&skip=${articles.value.length + allArticles.value.length}&sort=dateDes`)) as any;
    allArticles.value = ([] as any[]).concat(allArticles.value, response.articles);
    moreToLoad.value = response.isMore;
  } catch (error) {
    await router.push("/");
  }
}
</script>

<style scoped></style>
