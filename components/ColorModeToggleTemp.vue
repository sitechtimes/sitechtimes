<template>
  <div class="color-toggle-switch">
    <button
      class="color-toggle-button"
      @click="
        changeColorMode();
        $colorMode.preference = colorMode;
      "
      @tap="
        changeColorMode();
        $colorMode.preference = colorMode;
      "
    ></button>
    <!-- <label class="switch">
          <input
            type="checkbox"
            v-model="colorMode"
            true-value="light"
            false-value="dark"
            @click="$colorMode.preference = colorMode"
          />
          <span class="slider round"></span>
        </label> -->
    <p class="test">colorMode: {{ colorMode }}</p>
    <!-- <Theme v-if="openTheme" /> -->
  </div>
</template>

<script>
import Theme from "./Theme.vue";

export default {
  name: "ColorModeToggleTemp",
  components: { Theme },
  colorMode: "system",
  data() {
    return {
      colorMode: ""
    };
  },
  created() {
    this.colorMode = "system";
  },
  methods: {
    changeColorMode: function() {
      /* if html class has light-mode, switch to dark mode. Else, switch to light-mode */

      //console.log(document.querySelectorAll("html")[0].classList);

      if (
        document.querySelectorAll("html")[0].classList.contains("light-mode")
      ) {
        //console.log("contains light-mode");
        this.colorMode = "dark";
      } else if (
        document.querySelectorAll("html")[0].classList.contains("dark-mode")
      ) {
        //console.log("contains dark-mode");
        this.colorMode = "light";
      } else {
        console.log("contains neither light-mode or dark-mode");
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/variables";

.test {
  font-size: 1.6rem;
  padding-left: 1rem;
  color: var(--on-background);
  //position: absolute;
}

.color-toggle-switch {
  display: flex;
  justify-content: flex-end;
  z-index: 9;
}

.color-toggle-button {
  font-size: var(--h5);
  background-image: var(--button-icon);
  background-size: contain;
  height: 3rem;
  width: 3rem;
}

/* :root {
   --switch-width: 5rem;
  --switch-height: 2.5rem;
  --slider-diameter: 1.7rem;
  --slider-spacing: calc((var(--switch-height) - var(--slider-diameter)) / 2); 
} */
/* The switch - the box around the slider */
/* .switch {
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.5rem;

  margin-top: 1rem;
} */

/* Hide default HTML checkbox */
/* .switch input {
  opacity: 0;
  width: 0;
  height: 0;
} */

/* The slider */
/* .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
} */

/* .slider:before {
  position: absolute;
  content: "";
  height: var(--slider-diameter);
  width: var(--slider-diameter);
  left: var(--slider-spacing);
  bottom: var(--slider-spacing);
  background-color: white;
  transition: 0.4s;
}

.slider:before {
  background-color: var(--background-color);
} */
/* input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
} */

/* input:checked + .slider:before {
  transform: translateX(
    calc(
      var(--switch-width) -
        calc(2 * ((var(--slider-diameter) / 2) + var(--slider-spacing)))
    )
  );
} */

/* Rounded sliders */
/* .slider.round {
  border-radius: 3rem;
}

.slider.round:before {
  border-radius: 50%;
} */
</style>
