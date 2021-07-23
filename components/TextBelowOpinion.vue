<template>
   <div class="text-below-preview-opinion">
       <a :href="articleUrl"><img :href="articleUrl" :src="imageUrl" :alt="imageAlt" class="opinion-image"></a>
       <div class="opinion-info">
            <category-icon :category="category" class="opinion-cat"/>
            <author-and-date :author="author" :published="published" class="opinion-data" />
       </div>
       <a :href="articleUrl" class="opinion-title">{{title}}</a>
   </div>
</template>

<script>
//import AuthorAndDate from './AuthorAndDate.vue';
//import CategoryIcon from './CategoryIcon.vue';
export default {
  name: "TextBelowOpinion",
  props: [
    "author",
    "articleUrl",
    "published",
    "category",
    "imageUrl",
    "imageAlt",
    "title",
    ],
};
</script>

<style lang="scss">
a:link { text-decoration: none; color: var(--black)}
a:visited { text-decoration: none;  color: var(--black)}
a:hover { text-decoration: none;  color: var(--black)}
a:active { text-decoration: none;  color: var(--black)}

.text-below-preview-opinion {
  display: flex;
  flex-direction: column;
  width: 46.1rem;
  height: 37.1rem;
}
.opinion-info {
  display: flex;
  width: 42.2rem;
}
.opinion-image {
  width: 42.2rem;
  height: 21.7rem;
  border-radius: 1.5rem;
}
.opinion-cat {
  margin-right: 2rem;
}
.opinion-title {
  margin: 0;
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
  font-size: var(--h4);
}
.opinion-data {
    padding-top: 1rem;
}
@import "../assets/variables";
@media only screen and (max-width: $x-small-screen) {
  .opinion-cat {
    margin-right: 1rem;
  }
  .opinion-data {
    margin-right: 0.25rem;
  }
  .opinion-info {
    width: 35rem;
  }
  .opinion-image {
    width: 37rem;
  }
  .opinion-title {
    width: 37rem;
  }
}

</style>

<!--<docs>-->
<!--This is one of the ways articles on the homepage will be represented (currently Opinion and News).-->

<!--## Used-->

<!--This component has a lot of props - a detailed explanation of how to use it is below:-->

<!--1) AuthorAndDate - the following are inputted into the other component AuthorAndDate-->

<!--"author": The author of the article being written-->

<!--"published": The date the article was published-->

<!--2) CategoryIcon - the following are inputted into the other component CategoryIcon-->

<!--"category": The category of the article (Opinion, entertainment etc)-->

<!--3) Unique-->

<!--"articleUrl": This should be the link to the article being advertized, whatever webpage it is-->

<!--"imageUrl": All Articles should have an image - this image should be linked here which will put the image ontop of the article for the User-->

<!--"imageAlt": This is in case the image cannot load: The text inputted will instead appear-->

<!--"title": The Title of the article which will appear on the bottom in this case.-->

<!--## Variables Used:-->

<!--&#45;&#45;font: If a them changes the font the font's in this component will change-->

<!--## Examples-->

<!--```jsx-->
<!--<text-below-opinion-preview articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"/>-->
<!--```-->

<!--</docs>-->
