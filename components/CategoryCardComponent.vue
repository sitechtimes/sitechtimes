<template>
  <nuxt-link
    :to="articleUrl"
    role="img"
    :alt="imageAlt"
    :aria-label="imageAlt"
    class="category-card-component"
    :style="getFontSize"
  >
    <div
      class="category-card-component-image"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
    >
      <div class="category-flex-col category-card-component-text-container">
        <div
          class="category-flex-row category-card-component-category-author-date"
        >
          <category-icon
            :category="category"
            class="category-card-component-category"
          />
          <!-- <author-and-date
          :author="author"
          :published="this.published"
          class="category-card-component-author-and-date"
        /> -->
        </div>
        <div
          class="category-text-overflow category-card-component-title"
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
  name: "CategoryCardComponent",
  props: {
    author: String,
    articleUrl: String,
    published: String, // was Date
    category: String,
    imageUrl: String,
    imageAlt: String,
    title: String,
    size: {
      default: "medium",
      type: String,
    },
    clampSize: {
      default: "mediumClamp",
      type: String,
    },
  },

  computed: {
    getFontSize() {
      const createFontSize = ({ fontSize }) => ({
        "--customFontSize": fontSize,
      });
      const small = createFontSize({
        //create size here
        fontSize: "2.827rem",
      });
      const medium = createFontSize({
        //create size here
        fontSize: "3.998rem",
      });
      const large = createFontSize({
        fontSize: "5.653rem",
      });
      const fontSizes = {
        //list of sizes just names
        small,
        medium, //default
        large,
      };
      return fontSizes[this.size];
    },

    getClampSize() {
      const createClampSize = ({ clampSize }) => ({
        "--customClampSize": clampSize,
      });
      const smallClamp = createClampSize({
        //create size here
        clampSize: "2",
      });
      const mediumClamp = createClampSize({
        //create size here
        clampSize: "4",
      });
      const largeClamp = createClampSize({
        clampSize: "5",
      });
      const clampSizes = {
        //list of sizes just names
        smallClamp,
        mediumClamp, //default
        largeClamp,
      };
      return clampSizes[this.clampSize];
    },
  },
};
</script>

<style lang="scss">
@use "../assets/_variables" as *;

.category-card-component {
  cursor: pointer;
  border-radius: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.category-card-component-image {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  border-radius: 1.5rem;
}
.category-flex-col {
  display: flex;
  flex-direction: column;
}
.category-flex-row {
  display: flex;
  flex-direction: row;
}
.category-card-component-text-container {
  width: 100%;
  padding: 32% 0 5% 5%;
  height: 100%;
  margin: 0 auto;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  border-radius: 1.5rem;
}
.category-card-component-category {
  color: var(--white);
  margin-bottom: var(--category-bottom-margin);
}
.category-text-overflow {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: var(
    --customClampSize
  ); //The Number of Lines Shown Before Cutting Off the Text
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.category-card-component-title {
  font-weight: bold;
  font-size: var(--customFontSize);
  line-height: 4rem;
  color: var(--white);
  padding-top: 1rem;
}
.category-dropshadow {
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.45);
}
@media only screen and (max-width: $mid-screen) {
  .category-card-component-image {
    width: 100%;
  }
}
@media only screen and (max-width: $small-screen) {
  .category-card-component-image {
    width: 100%;
  }
}
</style>
<docs>

</docs>
