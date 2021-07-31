<template>
   <nuxt-link :to="articleUrl" class="text-below-preview-science">
       <img :src="imageUrl" :alt="imageAlt" class="science-image">
       <div class="science-info">
            <category-icon :category="category" class="science-cat"/>
            <author-and-date :author="author" :published="published" class="science-data" />
       </div>
       <h4 class="science-title">{{title}}</h4>
   </nuxt-link>
</template>

<script>
//import AuthorAndDate from './AuthorAndDate.vue';
//import CategoryIcon from './CategoryIcon.vue';
export default {
  name: "TextBelowSkicience",
  props: {
    author: String,
    articleUrl: String,
    published: Date,
    category: String,
    imageUrl: String,
    imageAlt: String,
    title: String,
  }
};
</script>

<style lang="scss">
a:link { text-decoration: none; color: var(--white)}
a:visited { text-decoration: none;  color: var(--white)}
a:hover { text-decoration: none;  color: var(--white)}
a:active { text-decoration: none;  color: var(--white)}

.text-below-preview-science {
  margin-left: 1rem;
  margin-right: -1rem;
}
.science-info {
  display: flex;
  margin: 1rem 0;
}
.science-image {
  width: 97%;
  border-radius: 1.5rem;
}
.science-cat {
  margin-right: 2rem;
}
.science-title {
  width: 94%;
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
  font-size: var(--h3);
  color: white;
}
.science-data {
    padding-top: 1rem;
}
@import "../assets/variables";
@media only screen and (max-width: $x-small-screen) {

}

</style>

<!--<docs>-->
<!--This is one of the ways articles on the homepage will be represented (currently science and News).-->

<!--## Used-->

<!--This component has a lot of props - a detailed explanation of how to use it is below:-->

<!--1) AuthorAndDate - the following are inputted into the other component AuthorAndDate-->

<!--"author": The author of the article being written-->

<!--"published": The date the article was published-->

<!--2) CategoryIcon - the following are inputted into the other component CategoryIcon-->

<!--"category": The category of the article (science, entertainment etc)-->

<!--3) Unique-->

<!--"articleUrl": This should be the link to the article being advertized, whatever webpage it is-->

<!--"imageUrl": All Articles should have an image - this image should be linked here which will put the image ontop of the article for the User-->

<!--"imageAlt": This is in case the image cannot load: The text inputted will instead appear-->

<!--"title": The Title of the article which will appear on the bottom in this case.-->

<!--## Variables Used:-->

<!--&#45;&#45;font: If a them changes the font the font's in this component will change-->

<!--## Examples-->

<!--```jsx-->
<!--<text-below-science-preview articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="science" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"/>-->
<!--```-->

<!--</docs>-->
