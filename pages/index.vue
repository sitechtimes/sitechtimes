<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <Navbar />
    <div class="global-container">
      <!-- <NuxtLink class="block" v-for="homepage in homepages" :to="`/articles/${homepage.slug}`" :key="homepage.slug">
    {{ homepage.title }}
    </NuxtLink> -->
    <h3>Trending Articles</h3>
    <section class="trending-section">
      <CardComponent 
      articleUrl="https://www.thetravel.com/best-surfing-spots-california/" author="Daniel Briskman" published="Jan 21, 2021" category="sports" imageTitle="A Girl Surfing" title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard." class="trending-main"/>
      <CardComponent 
      articleUrl="https://www.thetravel.com/best-surfing-spots-california/" author="Daniel Briskman" published="Jan 21, 2021" category="sports" imageTitle="A Girl Surfing" title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard." class="trending-sub"/>
      <CardComponent 
      articleUrl="https://www.thetravel.com/best-surfing-spots-california/" author="Daniel Briskman" published="Jan 21, 2021" category="sports" imageTitle="A Girl Surfing" title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard." class="trending-detail"/>
    </section>
    <h3>News</h3>
    <section class="news-section">
      <text-below-article-preview
      articleUrl="https://theconversation.com/us/topics/rocket-science-195"
      author="Daniel Briskman"
      published="Jan 31, 2020"
      category="opinion"
      imageAlt="Space X Rocket"
      title="I hate rockets, and this is why you should too"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
      />
      <text-below-article-preview
      articleUrl="https://theconversation.com/us/topics/rocket-science-195"
      author="Daniel Briskman"
      published="Jan 31, 2020"
      category="opinion"
      imageAlt="Space X Rocket"
      title="I hate rockets, and this is why you should too"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
      />
      <text-below-article-preview
      articleUrl="https://theconversation.com/us/topics/rocket-science-195"
      author="Daniel Briskman"
      published="Jan 31, 2020"
      category="opinion"
      imageAlt="Space X Rocket"
      title="I hate rockets, and this is why you should too"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
      />
    </section>
    <h3>Politics</h3>
    <h3>Entertainment</h3>
    <h3>Opinion</h3>
    <h3>Science</h3>
    <h3>Activities</h3>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
    data() {
      return {
        homepages: []
      }
    },
    async mounted() {
      const homepages = await this.$axios.get('/articles/homepage');
      this.homepages = homepages.data;
    }
  }
</script>

<style lang="scss">
.trending-main {
  grid-area: 1 / 1 / 3 / 5;
}
.trending-sub {
  grid-area: 1 / 5 / 2 / 8;
}
.trending-detail {
  grid-area: 2 / 5 / 3 / 8;
}
.trending-section {
  height: 60rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px; 
}
.news-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
}
</style>