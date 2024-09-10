<template>
  <div class="article-page global-container">
    <ArticleComponent
      v-if="article.title"
      :category="article.category"
      :title="article.title"
      :author="article.user.name"
      :articleImg="article.imageUrl"
      :articleAlt="article.imageAlt"
      :articleText="article.content"
      :published="article.createdAt"
      :articleUrl="slug"
      :webUrl="'sitechtimes.com' + '/articles/' + slug"
    />
    <SidebarContainer
      v-if="categoryHome && categoryRecent"
      :trending="categoryHome"
      :moreLikeThis="categoryRecent"
    />
  </div>
</template>

<script setup lang="ts">
interface Article {
  category: string;
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  user: {
    name: string;
  };
  createdAt: Date;
}

const slug = useRoute().params.slug; // Use the useRoute() function to access the route object and retrieve the slug parameter
const categoryHome = ref(null);
const categoryRecent = ref(null);
const article = ref<Article>({
  category: "",
  title: "",
  content: "",
  imageUrl: "",
  imageAlt: "",
  user: {
    name: "",
  },
  createdAt: {},
});
const $router = useRouter(); // Assign the useRouter() function to the $router variable

onMounted(async () => {
  try {
    const articleData = await $fetch(`/articles/${slug}`);
    article.value = articleData.data;

    const categoryHomeData = await $fetch(
      `/articles/homepage?category=${article.value.category}`
    );
    categoryHome.value = categoryHomeData.data;

    const categoryRecentData = await $fetch(
      `/articles?category=${article.value.category}&q=3`
    );
    categoryRecent.value = categoryRecentData.data;
  } catch (e) {
    await $router.push("/");
  }
});
</script>
