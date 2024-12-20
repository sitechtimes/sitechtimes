<template>
  <div class="flex h-screen items-center justify-center bg-gray-100">
    <div class="global-container">
      <div class="hidden sm:block">
        <h3 class="py-[var(--title-spacing)] text-[var(--on-background)]">Trending Articles</h3>
        <section class="sm:section section-sm grid h-[95rem] sm:h-[65rem]">
          <ArticleCard
            class="trending-main"
            clamp-size="medium"
            image-alt=""
            size="medium"
            v-if="homepages[0]"
            :articleUrl="'/articles/' + homepages[0].slug"
            :category="homepages[0].category"
            :imageTitle="homepages[0].imageAlt"
            :title="homepages[0].title"
            :imageUrl="homepages[0].imageUrl"
          />
          <ArticleCard
            v-if="homepages[1]"
            clamp-size="medium"
            image-alt=""
            :articleUrl="'/articles/' + homepages[1].slug"
            :category="homepages[1].category"
            :imageTitle="homepages[1].imageAlt"
            :title="homepages[1].title"
            :imageUrl="homepages[1].imageUrl"
            class="trending-sub"
            size="small"
          />
          <ArticleCard
            v-if="homepages[2]"
            clamp-size="medium"
            image-alt=""
            :articleUrl="'/articles/' + homepages[2].slug"
            :category="homepages[2].category"
            :imageTitle="homepages[2].imageAlt"
            :title="homepages[2].title"
            :imageUrl="homepages[2].imageUrl"
            class="trending-detail"
            size="small"
          />
        </section>

        <section class="my-[var(--section-spacing)] flex flex-wrap justify-between gap-8" v-if="homepages[3]">
          <ArticleGridComponent
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
          <DuoArticle class="not-on-ipad" v-if="homepages[7]" :articles="homepages.slice(7, 9)" size="medium" clamp-size="medium" />
        </section>

        <section class="my-[var(--section-spacing)] flex flex-wrap justify-between gap-8" v-if="homepages[0]">
          <ArticleGridComponent
            v-for="article in homepages.slice(10, 20)"
            :articleUrl="'/articles/' + article.slug"
            :author="article.user.name"
            :category="article.category"
            :imageAlt="article.imageAlt"
            :title="article.title"
            :imageUrl="article.imageUrl"
            :key="article.id"
          />
        </section>
      </div>
      <div class="hidden sm:block">
        <h3 class="-mb-20 py-[var(--title-spacing)] text-[var(--on-background)] sm:mb-0">Trending Articles</h3>
        <ArticleGridComponent
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

<script setup lang="ts">
useSeoMeta({
  title: "The SITECH Times Official Website",
  description: "Visit the Website to read more!",
  ogType: "website",
  ogTitle: "The SITECH Times Official Website",
  ogDescription: "Visit the Website to read more!",
  ogImage: "/logo_thicker.svg",
  ogImageAlt: "Staten Island Tech Times Logo",
  twitterCard: "summary",
  twitterTitle: "The SITECH Times Official Website",
  twitterImage: "/logo_thicker.svg",
  twitterImageAlt: "Staten Island Tech Times Logo"
});

const homepages = ref<any[]>([]);
const isMobile = ref(false);

onMounted(() => {
  fetchHomepage();
});

async function fetchHomepage() {
  homepages.value = await $fetch("/articles/homepage");
}
</script>

<style scoped>
.section {
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
}

.section-sm {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>
