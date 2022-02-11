<template>
  <ul class="theme-switcher">
    <li
      class="theme-choice color-name"
      @click="$colorMode.preference = 'system'"
    >
      System
    </li>
    <li class="theme-choice color-name" @click="onClickModalButton">
      More
    </li>
    <!-- <themes-modal class="modal-test" v-if="showModal">
      you can use custom content here to overwrite default content
      <h3 slot="header">custom header</h3>
    </themes-modal>  -->
    <!--      <nuxt-link id="dropdown-more-link" to="/Theme"
      ><ThemeColors icon="sun" color="more"
    /></nuxt-link>  -->
  </ul>
</template>

<script>
export default {
  props: ["showModal"],
  data() {
    return {
      //colors: ["system", "light", "dark", "theme"]
     showModal: false 
    };
  },
  methods: {
    onClickModalButton() {
      this.$emit("showModalButtonClicked", true);
    }
  }
};
</script>

<style lang="scss">

.theme-switcher {
  //width: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border: 1px solid black;
  position: absolute;
  top: 3.3rem;
 
 
}

.theme-switcher > * {
  width: 100%;
}

#dropdown-more-link {
  text-decoration: none;
}

.theme-choice {
  font-size: 1.6rem;
  //color: var(--white);
  background-color: white;
  list-style: none;
  //margin: 1rem auto;
  padding: 1rem 2rem;
  transition: all 0.3s;

  text-align: center;

  z-index: 3;
  //border: 1px solid white;
}

.theme-choice:hover {
  //transform: scale(1.1);

  cursor: pointer;
  background-color: var(--hover);
}

</style>
