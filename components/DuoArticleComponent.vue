<template>
  <nuxt-link :to="articleUrl" class="duo-card-component" :style="getFontSize">
    <div
      class="duo-card-component-image"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
    >
      <div class="duo-flex-col duo-card-component-text-container">
        <div class="duo-flex-row duo-card-component-category-author-date">
          <category-icon
            :category="category"
            class="duo-card-component-category"
          />
        </div>
        <div
          class="duo-text-overflow duo-card-component-title"
          :style="getClampSize"
        >
          {{ title }}
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "DuoArticleComponent",
  props: {
    author: String,
    articleUrl: String,
    published: Date,
    category: String,
    imageUrl: String,
    imageAlt: String,
    title: String,
    size: {
      default: "medium",
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

.duo-card-component {
  cursor: pointer;
  border-radius: 1rem;
  //   position: relative;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: flex-end;
  //   width: 60rem;
  transition: all .3s;
}
.duo-card-component:hover {
  box-shadow: var(--card-shadow);
  transform: translateY(-.75rem);
  z-index: 1;
}
.duo-card-component-image {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  border-radius: 1rem;
}
.duo-flex-col {
  display: flex;
  flex-direction: column;
}
.duo-flex-row {
  display: flex;
  flex-direction: row;
}
.duo-card-component-text-container {
  width: 100%;
  padding: 50% 7% 7% 7%;
  height: 100%;
  margin: 0 auto;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  border-radius: 1rem;
  justify-content: flex-end;
}
.duo-card-component-category-author-date {
  margin-bottom: var(--category-bottom-margin);
  margin-top: var(--category-top-margin);
}
.duo-card-component-category {
  color: var(--white);
  padding-right: 1.7rem;
}
.duo-text-overflow {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: var(
    --customClampSize
  ); //The Number of Lines Shown Before Cutting Off the Text
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.duo-card-component-title {
  font-weight: bold;
  font-size: var(--customFontSize);
  line-height: 4rem;
  color: var(--white);
}
.duo-dropshadow {
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.45);
}
@media only screen and (max-width: $small-screen) {
  .duo-card-component-image {
    height: 30.2rem;
  }
  .duo-card-component-text-container {
    width: 100%;
    padding: 10% 7% 7% 7%;
    height: 100%;
    margin: 0 auto;
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    border-radius: 1rem;
    justify-content: flex-end;
  }
}

@media only screen and (max-width: $x-small-screen) {
  .duo-card-component-title {
    line-height: 3rem;
  }
}
</style>
<docs>

</docs>
