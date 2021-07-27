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
          class="trending-main cardquery"
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
        <TextBelowArticlePreviewHome
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="news"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
        <TextBelowArticlePreviewHome
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="news"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
        <TextBelowArticlePreviewHome
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="news"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
      </section>
      <section id="news-mobile" class="news-section mobile-view">
        <CategoryArticle
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="opinion"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="news-main-mobile"
        />
        <CategoryArticle
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="opinion"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="news-sub-mobile"
        />
        <CategoryArticle
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="opinion"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="news-detail-mobile"
        />
      </section>
      </div>
      <div class="darksection">
        <div class="global-container">
      <h3 class="section-title">Politics</h3>
      <section class="politics-section desktop-view">
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
      <section id="politics-mobile" class="politics-section mobile-view">
        <TextBelowScience 
          articleUrl="https://theconversation.com/us/topics/rocket-science-195" 
          author="Daniel Briskman" 
          published="Jan 31, 2020" 
          category="opinion" 
          imageAlt="Space X Rocket" 
          title="I hate rockets, and this is why you should too" 
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU" 
          class="politics-main-mobile"
        />
        <CategoryArticle
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="opinion"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="politics-sub-mobile"
        />
        <CategoryArticle
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="opinion"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="politics-detail-mobile"
        />
      </section>
      </div>
      </div>
      <div class="global-container">
      <h3 class="section-title">Entertainment</h3>
      <section class="entertainment-section desktop-view">
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
      <section id="entertainment-mobile" class="entertainment-section mobile-view">
        <CardComponent
          articleUrl="https://www.thetravel.com/best-surfing-spots-california/"
          author="Daniel Briskman"
          published="Jan 21, 2021"
          category="entertainment"
          imageTitle="A Girl Surfing"
          title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard."
          class="entertainment-main-mobile"
          size="medium"
        />
        <CardComponent
          articleUrl="https://www.thetravel.com/best-surfing-spots-california/"
          author="Daniel Briskman"
          published="Jan 21, 2021"
          category="entertainment"
          imageTitle="A Girl Surfing"
          title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard."
          class="entertainment-sub-mobile"
          size="medium"
        />
        <CardComponent
          articleUrl="https://www.thetravel.com/best-surfing-spots-california/"
          author="Daniel Briskman"
          published="Jan 21, 2021"
          category="entertainment"
          imageTitle="A Girl Surfing"
          title="Girl almost eaten by shark but makes friends with shark and then betrays it and rides it like a surfboard."
          class="entertainment-detail-mobile"
          size="medium"
        />
      </section>
      <h3 class="section-title">Opinion</h3>
      <OpinionSlider />
      </div>
      <div class="darksection">
      <div class="global-container">
      <h3 class="section-title">Science</h3>
      <section class="science-section">
        <TextBelowArticlePreviewHome
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="science"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="science-main"
        />
        <TextBelowArticlePreviewHome
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="science"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="science-sub"
        />
        <TextBelowArticlePreviewHome
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="science"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="science-detail"
        />
      </section>
      </div>
      </div>
      <div class="global-container">
      <h3 class="section-title">Activities</h3>
      <section class="news-section">
        <TextBelowArticlePreviewHome
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="events"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
        <TextBelowArticlePreviewHome
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="events"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
        <TextBelowArticlePreviewHome
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          author="Daniel Briskman"
          published="Jan 31, 2020"
          category="events"
          imageAlt="Space X Rocket"
          title="I hate rockets, and this is why you should too"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
        />
      </section>
      <section id="activities-mobile" class="news-section mobile-view">
        <CategoryArticle
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="opinion"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="news-main-mobile"
        />
        <CategoryArticle
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="opinion"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="news-sub-mobile"
        />
        <CategoryArticle
          articleUrl="https://theconversation.com/us/topics/rocket-science-195"
          imageUrl="https://i.dailymail.co.uk/1s/2020/01/24/10/23816570-0-image-a-18_1579862990670.jpg"
          category="opinion"
          author="Charley Baluja"
          published="July 12, 2021"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
          class="news-detail-mobile"
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
      isMobile: false,
    };
  },
  async mounted() {
    const homepages = await this.$axios.get("/articles/homepage");
    this.homepages = homepages.data;
  },
}
</script>

<style lang="scss">
@import "../assets/variables";
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
  height: auto;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
}
.politics-section {
  height: 40rem;
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
  margin-bottom: 2rem;
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
  height: 75rem;
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: repeat(3, 1fr);
}
.science-main {
  grid-area: 1 / 1 / 2 / 2;
}
.science-sub {
  grid-area: 2 / 1 / 3 / 2;
}
.science-detail {
  grid-area: 3 / 1 / 4 / 2;
}
.darksection {
  background-color: var(--grey);
  color: white;
  padding-bottom: 5rem;
}
.desktop-view {
  display: grid;
}
.mobile-view {
  display: none;
}

@media only screen and (max-width: $mid-screen) {
  .science-section {
  height: 50rem;
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: repeat(3, 1fr);
}
}
@media only screen and (max-width: $small-screen) {
    .science-section {
    height: 40rem;
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(3, 1fr);
  }
  #news-mobile {
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px; 
  }
  .news-main-mobile {
    grid-area: 1 / 1 / 2 / 2;
  }
  .news-sub-mobile {
    grid-area: 2 / 1 / 3 / 2;
  }
  .news-detail-mobile {
    grid-area: 3 / 1 / 4 / 2;
  }
  #politics-mobile {
    height: 80rem;
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 20px; 
  }
  .politics-main-mobile {
    grid-area: 1 / 1 / 4 / 2;
  }
  .politics-sub-mobile {
    grid-area: 4 / 1 / 5 / 2;
  }
  .politics-detail-mobile {
    grid-area: 5 / 1 / 6 / 2;
  }
  #entertainment-mobile {
    height: 80rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px; 
  }
  .entertainment-main-mobile {
    grid-area: 1 / 1 / 4 / 3;
  }
  .entertainment-sub-mobile {
    grid-area: 4 / 1 / 7 / 2;
  }
  .entertainment-detail-mobile {
    grid-area: 4 / 2 / 7 / 3;
  }
  #activities-mobile {
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px; 
  }
  .desktop-view {
    display: none;
  }
  .mobile-view {
    display: grid;
  }
}
@media only screen and (max-width: $x-small-screen) {
  .science-section {
  height: 40rem;
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: repeat(3, 1fr);
}
}

</style>
