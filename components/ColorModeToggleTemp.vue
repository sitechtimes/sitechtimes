<template>
  <div class="color-toggle-switch" @mouseleave="dropdownFalse">
    <button
      class="color-toggle-button"
      @click="
        changeColorMode();
        $colorMode.preference = colorMode;
      "
    ></button>
    <button
      class="color-toggle-dropdown-button"
      id="color-toggle-dropdown-button"
      @mouseover="dropdownTrue"
      @click="toggleDropdown"
    >
      <i class="down-arrow"></i>
    </button>
    <Theme
      id="color-theme-dropdown"
      v-if="dropdown"
      @mouseover.native="dropdownTrue"
      @mouseleave.native="dropdownFalse"
    />
    <!--     <Theme
      id="color-theme-dropdown"
      v-if="dropdown"
      tabindex="0"
      @mouseover="handleFocus"
      @mouseleave="handleFocusOut"
    /> -->

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

    <p class="test">$colorMode.preference: {{ $colorMode.preference }}</p>
    <p
      class="test"
      style="right: 25rem"
      v-if="$colorMode.preference === 'system'"
    >
      (<i>{{ $colorMode.value }}</i> mode detected)
    </p>
    <!-- <Theme v-if="openTheme" /> -->
  </div>
</template>

<script>
import Theme from "./Theme.vue";

export default {
  name: "ColorModeToggleTemp",
  components: { Theme },
  //colorMode: "system",
  data() {
    return {
      colorMode: "",
      dropdown: false
    };
  },
  /*   created() {
    this.colorMode = "system";
  }, */
  /*   updated() {
    this.colorMode = "system";
  },  */
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
        alert("Current color mode is neither light or dark");
      }
    },
    toggleDropdown: function() {
      this.dropdown = !this.dropdown;
    },
    dropdownTrue() {
      this.dropdown = true;
    },
    dropdownFalse() {
      this.dropdown = false;
    }
    /*     closeDropdown: function() {
      document.addEventListener("click", event => {
        const dropdown = document.getElementById("color-theme-dropdown");
        const dropdownButton = document.getElementById(
          "color-toggle-dropdown-button"
        );
        let targetEl = event.target; //clicked element
        do {
          if (targetEl == dropdown || targetEl !== dropdownButton) {
            return;
          }
          targetEl = targetEl.parentNode;
        } while (targetEl);
        this.dropdown = false;
        alert("clicked ouside");
      });
    } */
    /*     handleFocus() {
      alert("focus in");
    },
    handleFocusOut() {
      this.dropdown == false;
      alert("handleFocusOut");
    } */
  }
};
</script>

<style lang="scss">
@import "../assets/variables";

.test {
  font-size: 1.6rem;
  padding-left: 1rem;
  color: var(--on-background);
  position: absolute;
  top: 7rem;
}

.color-toggle-switch {
  display: inline-flex;
  justify-content: flex-end;
  z-index: 9;

  float: right;
}

.color-toggle-button {
  border: 0.1rem solid var(--on-background);
  border-radius: 0.8rem 0 0 0.8rem;
  //padding: 14px;
  cursor: pointer;
  background-color: var(--background-color);
  background-image: var(--button-icon);
  background-size: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  height: 4rem;
  width: 4rem;

  outline: none;
}

.color-toggle-dropdown-button {
  background-color: var(--background-color);
  border: 0.1rem solid var(--on-background);
  margin-left: -0.1rem;
  border-radius: 0 0.8rem 0.8rem 0;
  padding: 0.8rem 0.6rem 1rem 0.6rem;

  height: 4rem;
  display: flex;
  align-items: center;

  outline: none;
}
.down-arrow {
  border: solid var(--on-background);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  outline: none;
}

/* MAYBE ADD HOVER EFFECT? */

:root {
  --switch-width: 5rem;
  --switch-height: 2.5rem;
  --slider-diameter: 1.7rem;
  --slider-spacing: calc((var(--switch-height) - var(--slider-diameter)) / 2);
}
.switch {
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.5rem;

  margin-top: 1rem;
}

//Hide default HTML checkbox
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

//The slider
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
}

.slider:before {
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
}
input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translateX(
    calc(
      var(--switch-width) -
        calc(2 * ((var(--slider-diameter) / 2) + var(--slider-spacing)))
    )
  );
}

//Rounded sliders
.slider.round {
  border-radius: 3rem;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
