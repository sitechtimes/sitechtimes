<template>
  <div class="card-component card-component-image" :style="getFontSize">
    <nuxt-link :to="articleUrl" class="flex-col card-component-text-container">
      <div class="flex-row card-component-category-author-date">
        <category-icon :category="category" class="card-component-category" />
        <author-and-date
          :author="author"
          :published="published"
          class="card-component-author-and-date"
        />
      </div>
      <div class="text-overflow card-component-title" :style="getClampSize">
        {{ title }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    author: { type: String },
    articleUrl: { type: String },
    published: { type: String },
    category: { type: String },
    imageUrl: { type: String },
    imageAlt: { type: String },
    title: { type: String },
    size: {
      default: "Medium",
      type: String
    },
    clampSize: {
      default: "mediumClamp",
      type: String
    }
  },

  computed: {
    getFontSize() {
      const createFontSize = ({ fontSize }) => ({
        "--customFontSize": fontSize
      });
      const small = createFontSize({
        //create size here
        fontSize: "2.827rem"
      });
      const medium = createFontSize({
        //create size here
        fontSize: "3.998rem"
      });
      const large = createFontSize({
        fontSize: "5.653rem"
      });
      const fontSizes = {
        //list of sizes just names
        small,
        medium, //default
        large
      };
      return fontSizes[this.size];
    },

    getClampSize() {
      const createClampSize = ({ clampSize }) => ({
        "--customClampSize": clampSize
      });
      const smallClamp = createClampSize({
        //create size here
        clampSize: "2"
      });
      const mediumClamp = createClampSize({
        //create size here
        clampSize: "4"
      });
      const largeClamp = createClampSize({
        clampSize: "5"
      });
      const clampSizes = {
        //list of sizes just names
        smallClamp,
        mediumClamp, //default
        largeClamp
      };
      return clampSizes[this.clampSize];
    }
  }
};
</script>

<style lang="scss">
@import "../assets/variables";
a:link {
  text-decoration: none;
  color: var(--black);
}
a:visited {
  text-decoration: none;
  color: var(--black);
}
a:hover {
  text-decoration: none;
  color: var(--black);
}
a:active {
  text-decoration: none;
  color: var(--black);
}
.card-component {
  cursor: pointer;
  border-radius: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.card-component-image {
  background: url("../assets/card-comp-tempimg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.card-component-text-container {
  width: 100%;
  padding: 0 10%;
  max-height: 70%;
  margin: 0 auto;
  padding-bottom: 10%;
  background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
  border-radius: 1.5rem;
}
.card-component-category-author-date {
    display: flex;
    flex-wrap: wrap;
  padding-bottom: 1.7rem;
}
.card-component-category {
  color: var(--white);
  padding-right: 1.7rem;
}
.card-component-author-and-date {
  position: relative;
  height: 1.6rem;
  padding-top: 1rem;
  color: var(--white);
}
.text-overflow {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: var(
    --customClampSize
  ); //The Number of Lines Shown Before Cutting Off the Text
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-component-title {
  font-weight: bold;
  font-size: var(--customFontSize);
  line-height: 4rem;
  color: var(--white);
}
</style>
<docs>

</docs>

