<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="global-container">
      <!-- <NuxtLink class="block" v-for="homepage in homepages" :to="`/articles/${homepage.slug}`" :key="homepage.slug">
    {{ homepage.title }}
    </NuxtLink> -->
      <h3 class="section-title">Trending Articles</h3>
      <section class="trending-section">
        <CardComponent
          articleUrl="https://www.thetravel.com/best-surfing-spots-california/"
          author="Daniel Briskman"
          published="Jan 21, 2021"
          category="sports"
          imageTitle="A Girl Surfing"
          title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard."
          class="trending-main"
          size="medium"
        />
        <CardComponent
          articleUrl="https://www.thetravel.com/best-surfing-spots-california/"
          author="Daniel Briskman"
          published="Jan 21, 2021"
          category="sports"
          imageTitle="A Girl Surfing"
          title="Boy almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard."
          class="trending-sub"
          size="small"
          clampSize="smallClamp"
        />
        <CardComponent
          articleUrl="https://www.thetravel.com/best-surfing-spots-california/"
          author="Daniel Briskman"
          published="Jan 21, 2021"
          category="sports"
          imageTitle="A Girl Surfing"
          title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard."
          class="trending-detail"
          size="small"
        />
      </section>
      <h3 class="section-title">News</h3>
      <section class="news-section">
        <text-below-article-preview
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="news"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
        <text-below-article-preview
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="news"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
        <text-below-article-preview
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="news"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
      </section>
      </div>
      <div class="darksection">
        <div class="global-container">
      <h3 class="section-title">Politics</h3>
      <section class="politics-section">
        <CardComponent
          articleUrl="https://www.thetravel.com/best-surfing-spots-california/"
          author="Daniel Briskman"
          published="Jan 21, 2021"
          category="politics"
          imageTitle="A Girl Surfing"
          title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard."
          class="politics-main"
          size="medium"
        />
        <CardComponent
          articleUrl="https://www.thetravel.com/best-surfing-spots-california/"
          author="Daniel Briskman"
          published="Jan 21, 2021"
          category="politics"
          imageTitle="A Girl Surfing"
          title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard."
          class="politics-sub"
          size="small"
        />
        <CardComponent
          articleUrl="https://www.thetravel.com/best-surfing-spots-california/"
          author="Daniel Briskman"
          published="Jan 21, 2021"
          category="politics"
          imageTitle="A Girl Surfing"
          title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard."
          class="politics-detail"
          size="small"
        />
      </section>
      </div>
      </div>
      <div class="global-container">
      <h3 class="section-title">Entertainment</h3>
      <section class="entertainment-section">
        <CardComponent
          articleUrl="https://www.thetravel.com/best-surfing-spots-california/"
          author="Daniel Briskman"
          published="Jan 21, 2021"
          category="entertainment"
          imageTitle="A Girl Surfing"
          title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard."
          class="entertainment-main"
          size="medium"
        />
        <EntertainmentSideArticle
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
          category="entertainment"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Podcasts: Radio, But Less Cool"
          class="entertainment-sub"
        />
        <EntertainmentSideArticle
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
          category="entertainment"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Podcasts: Radio, But Less Cool"
          class="entertainment-detail"
        />
      </section>
      <h3 class="section-title">Opinion</h3>
      <OpinionSlider :articles="articles"/>
      </div>
      <div class="darksection">
      <div class="global-container">
      <h3 class="section-title">Science</h3>
      <section class="science-section">
        <text-below-article-preview
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="science"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
          class="science-main"
        />
        <text-below-article-preview
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="science"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
          class="science-sub"
        />
        <text-below-article-preview
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="science"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
          class="science-detail"
        />
      </section>
      </div>
      </div>
      <div class="global-container">
      <h3 class="section-title">Activities</h3>
      <section class="news-section">
        <text-below-article-preview
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="events"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
        <text-below-article-preview
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="events"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
        <text-below-article-preview
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="events"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
      </section>
      </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        homepages: [],
        articles: [],
      }
    },
    async mounted() {
      const homepages = await this.$axios.get('/articles/homepage');
      this.homepages = homepages.data;

      const articles = await this.$axios.get(`/articles/homepage?category=entertainment`);
      this.articles = articles.data;

    }
};
</script>

<style lang="scss">
.section-title {
  padding: 4rem 0;
}
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
  height: 65rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.news-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
}
.politics-section {
  height: 35rem;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.politics-main {
  grid-area: 1 / 1 / 2 / 8;
}
.politics-sub {
  grid-area: 1 / 8 / 2 / 13;
}
.politics-detail {
  grid-area: 1 / 13 / 2 / 17;
}
.entertainment-section {
  height: 45rem;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.entertainment-main {
  grid-area: 1 / 1 / 3 / 6;
}
.entertainment-sub {
  grid-area: 1 / 6 / 2 / 10;
}
.entertainment-detail {
  grid-area: 2 / 6 / 3 / 10;
}
.science-section {
  height: 85rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.science-main {
  grid-area: 1 / 1 / 3 / 2;
}
.science-sub {
  grid-area: 1 / 2 / 2 / 3;
}
.science-detail {
  grid-area: 2 / 2 / 3 / 3;
}
.darksection {
  background-color: var(--grey);
  color: white;
  padding-bottom: 5rem;
}
</style>
