<template>
  <div class="global-container flex flex-col overflow-x-hidden md:flex-row">
    <ArticleComponent
      v-if="article.title"
      :category="article.category"
      :title="article.title"
      :author="article.user.name"
      :published="article.createdAt"
      :articleImg="article.imageUrl"
      :articleAlt="article.imageAlt"
      :articleText="article.content"
      :articleUrl="articleName"
      :webUrl="'sitechtimes.com' + '/articles/' + articleName"
      description=""
    />
    <SidebarContainer v-if="categoryHome && categoryRecent" :trending="categoryHome" :moreLikeThis="categoryRecent" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const articleName = route.params.articleName as string;

const categoryHome = ref<any>();
const categoryRecent = ref<any>();
const article = ref<any>();

onMounted(() => {
  fetchArticle();
});

async function fetchArticle() {
  try {
    const fetchedArticle = (await $fetch(`/articles/${articleName}`)) as any;
    article.value = fetchedArticle;
    categoryHome.value = await $fetch(`/articles/homepage?category=${fetchedArticle.category}`);
    categoryRecent.value = await $fetch(`/articles?category=${fetchedArticle.category}&q=3`);
  } catch (error) {
    await router.push("/");
  }
}
</script>

<style scoped></style>
