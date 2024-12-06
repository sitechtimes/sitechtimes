<template>
  <nuxt-link
    :to="articleUrl"
    role="img"
    :alt="imageAlt"
    :aria-label="imageAlt"
    class="card-component card-component-image dropshadow"
    :style="{
      background: 'url(' + imageUrl + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <div class="flex-col card-component-text-container" :style="getFontSize()">
      <div class="flex-row card-component-category-author-date">
        <!-- <category-icon :category="category" class="card-component-category" /> -->
      </div>
      <h3 class="text-overflow card-component-title" :style="getClampSize()">
        {{ title }}
      </h3>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps<{
  articleUrl: string;
  category: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  size: {
    default: "Medium";
    type: string;
  };
  clampSize: {
    default: "mediumClamp";
    type: string;
  };
}>();

const getFontSize = () => {
  const createFontSize = ({ fontSize }: { fontSize: string }) => ({
    "--customFontSize": fontSize,
  });
  const small = createFontSize({
    //create size here
    fontSize: "var(--fontSmall)",
  });
  const medium = createFontSize({
    //create size here
    fontSize: "var(--fontMedium)",
  });
  const large = createFontSize({
    fontSize: "var(--fontLarge)",
  });
  const fontSizes: { [key: string]: { "--customFontSize": string } } = {
    //list of sizes just names
    small,
    medium, //default
    large,
  };
  return fontSizes[props.size.default];
};

const getClampSize = () => {
  const createClampSize = ({ clampSize }: { clampSize: string }) => ({
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
  return clampSizes[props.clampSize.default];
};
</script>

<style scoped lang="scss">
:root {
  --fontSmall: 2.827rem;
  --fontMedium: 3.998rem;
  --fontLarge: 5.653rem;
}

@import "../assets/variables.scss";

.card-component {
  cursor: pointer;
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  padding: 0 7% 4.5% 7%;
  max-height: 70%;
  margin: 0 auto;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  border-radius: 1rem;
}
// .card-component-category-author-date {
//     display: flex;
//     flex-wrap: wrap;
//   padding-bottom: 1.7rem;
// }
.card-component-category-author-date {
  margin-bottom: var(--category-bottom-margin);
  margin-top: var(--category-top-margin);
}
.card-component-category {
  color: var(--white);
  padding-right: 1.7rem;
}
// .card-component-author-and-date {
//   position: relative;
//   height: 1.6rem;
//   padding-top: 1rem;
//   color: var(--white);
// }
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
.dropshadow {
  box-shadow: var(--card-shadow);
}

@media only screen and (max-width: $x-small-screen) {
  :root {
    --fontSmall: 2.7rem;
    --fontMedium: 2.7rem;
    --fontLarge: 2.8rem;
  }
  .card-component-title {
    font-weight: bold;
    font-size: var(--h3);
    line-height: auto;
    color: var(--white);
  }
}
.card-component-category-author-date {
  display: flex;
  flex-wrap: wrap;
  .flex-row {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3%;
  }
  .card-component-text-container {
    width: 100%;
    padding: 0 7%;
    max-height: 80%;
    margin: 0 auto;
    padding-bottom: 7%;
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    border-radius: 1rem;
  }
}
</style>
