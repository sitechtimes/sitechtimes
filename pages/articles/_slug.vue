<template>
  <div class="article-page global-container">
    <ArticleComponent v-if="article.title" :category="article.category" :title="article.title" :author="article.user.name" :published="article.createdAt" :articleImg="article.imageUrl" :articleAlt="article.imageAlt" :articleText="article.content" :articleUrl="slug"/>
    <SidebarContainer v-if="categoryHome && categoryRecent" :trending="categoryHome" :moreLikeThis="categoryRecent"/>
  </div>
</template>

<script>
import ArticleComponent from "../../components/ArticleComponent.vue";
import SidebarContainer from "../../components/SidebarContainer.vue";
export default {
  components: { ArticleComponent, SidebarContainer },
  data() {
    return {
      slug: this.$route.params.slug,
      categoryHome: null,
      categoryRecent: null,
      article: {}
    };
  },
  async beforeMount() {
    try {
      const article = await this.$axios.get(`/articles/${this.slug}`);
      this.article = article.data;
      const categoryHome = await this.$axios.get(`/articles/homepage?category=${this.article.category}`);
      this.categoryHome = categoryHome.data;
      const categoryRecent = await this.$axios.get(`/articles?category=${this.article.category}&q=3`);
      this.categoryRecent = categoryRecent.data;
    } catch (e) {
      await this.$router.push("/");
    }
  },
  head: function() {
    return {
      meta: [
      { name: 'title', content: this.article.title },
      { name: 'description', content: "Click to read more about" + this.article.title + "!"},
      { name: 'og:type', content: 'article'},
      { name: 'og:url', content: `https://dev.sitechtimes.com/articles/${this.slug}`},
      { name: 'og:site_name', content: 'SITECHTIMES'},
      { name: 'og:title', content: this.article.title },
      { name: 'og:description', content: "Click to read more about" + this.article.title + "!"},
      { name: 'og:image', content: this.article.imageUrl },
      { name: 'og:image:alt', content: this.article.imageAlt },
      { name: 'article:published_time', content: this.article.createdAt},
      { name: 'article:modified_time', content: this.article.updatedAt},
      { name: 'article:author', content: this.article.user},
      { name: 'article:section', content: this.article.category},
      { name: 'article:tag', content: this.article.category},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:url', content: `https://dev.sitechtimes.com/articles/${this.slug}`},
      { name: 'twitter:title', content: this.article.title },
      { name: 'twitter:image', content: this.article.imageUrl },
      { name: 'twitter:image:alt', content: this.article.imageAlt },
            { property: 'og:type', content: 'article'},
      { property: 'og:url', content: `https://dev.sitechtimes.com/articles/${this.slug}`},
      { property: 'og:site_name', content: 'SITECHTIMES'},
      { property: 'og:title', content: this.article.title },
      { property: 'og:description', content: "Click to read more about" + this.article.title + "!"},
      { property: 'og:image', content: this.article.imageUrl },
      { property: 'og:image:alt', content: this.article.imageAlt },
      { property: 'article:published_time', content: this.article.createdAt},
      { property: 'article:modified_time', content: this.article.updatedAt},
      { property: 'article:author', content: this.article.user},
      { property: 'article:section', content: this.article.category},
      { property: 'article:tag', content: this.article.category},
      { property: 'twitter:card', content: 'summary_large_image'},
      { property: 'twitter:url', content: `https://dev.sitechtimes.com/articles/${this.slug}`},
      { property: 'twitter:title', content: this.article.title },
      { property: 'twitter:image', content: this.article.imageUrl },
      { property: 'twitter:image:alt', content: this.article.imageAlt },
  ]
    }
  }
};
</script>

<style lang="scss">
@import '/../assets/variables';
.ariticle-page,
#article-component,
.sidebar-container {
  overflow-x: hidden;
}
.article-page {
  margin: auto;
  display: flex;
  flex-direction: row;
}
#article-component {
  width: 65%;
}
.sidebar-container {
  width: 30%;
  margin-left: 5%;
}
@media only screen and (max-width: $midlarge-screen) {
  .article-page {
    flex-direction: column;
  }
  #article-component, .sidebar-container {
    width: 100%;
  }
  .sidebar-container {
    margin-left: 0;
  }
}
</style>
