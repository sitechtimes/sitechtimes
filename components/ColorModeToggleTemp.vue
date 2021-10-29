<template>
  <div class="color-toggle-switch" @mouseleave="dropdownFalse">
    <button
      class="color-toggle-button"
      @click="
        changeColorMode();
        $colorMode.preference = colorMode;
      "
      v-if="sun == true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </button>

    <button
      class="color-toggle-button"
      @click="
        changeColorMode();
        $colorMode.preference = colorMode;
      "
      v-if="moon == true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 moon-svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>

     <button
      class="color-toggle-dropdown-button color-toggle-button"
      id="color-toggle-dropdown-button"
      @mouseover="dropdownTrue"
      @click="toggleDropdown"
    ><span>▾</span></button>

   <Theme
      id="color-theme-dropdown"
      v-if="dropdown"
      @mouseover.native="dropdownTrue"
      @mouseleave.native="dropdownFalse"
      @showModalButtonClicked="showModal = true"
    /> 

    <themes-modal
      class="modal-test"
      v-if="showModal"
      @closeModal="showModal = false"
    >
      you can use custom content here to overwrite default content
      <h3 slot="header">custom header</h3>
    </themes-modal>

    <!-- 
    <button id="show-modal" @click="showModal = true">Show Modal</button> -->
    <!-- use the modal component, pass in the prop -->
    <!--     <themes-modal
      class="modal-test"
      v-if="showModal"
      @close="showModal = false"
    > -->
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <!--       <h3 slot="header">custom header</h3>
    </themes-modal> -->

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

    <!--     <p class="test">$colorMode.preference: {{ $colorMode.preference }}</p>
    <p
      class="test"
      style="right: 25rem"
      v-if="$colorMode.preference === 'system'"
    >
      (<i>{{ $colorMode.value }}</i> mode detected)
    </p> -->
    <!-- <Theme v-if="openTheme" /> -->
    <!-- <p class="test">Colormode: {{ colorMode }}</p> -->
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
      dropdown: false,
      showModal: false,
      sun: false,
      moon: false
      /*       showModal: false */
    };
  },
  /*   created() {
    this.colorMode = "system";
  }, */
  /*   updated() {
    this.colorMode = "system";
  },  */
  mounted() {
    if (document.querySelectorAll("html")[0].classList.contains("light-mode")) {
      //console.log("contains light-mode");

      this.sun = true;
      this.moon = false;
    } else if (
      document.querySelectorAll("html")[0].classList.contains("dark-mode")
    ) {
      //console.log("contains dark-mode");

      this.sun = false;
      this.moon = true;
    } else {
      this.sun = true;
      this.moon = false;
    }
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
        this.sun = false;
        this.moon = true;
      } else if (
        document.querySelectorAll("html")[0].classList.contains("dark-mode")
      ) {
        //console.log("contains dark-mode");
        this.colorMode = "light";
        this.sun = true;
        this.moon = false;
      } else {
        this.sun = true;
        this.colorMode = 'light';
        this.moon = false;
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
.modal-test {
  position: absolute;
  top: 10rem;
}

@import "../assets/variables";
:root {
  --color-toggle-switch-height: 3rem;
}

.test {
  font-size: 1.6rem;
  padding-left: 1rem;
  color: var(--on-background);
  position: absolute;
  top: 4rem;
}

.color-toggle-switch {
  display: inline-flex;
  justify-content: flex-end;
  z-index: 9;
}

.color-toggle-button {
  border: 0.2rem solid var(--on-primary);
  border-radius: 0.5rem 0 0 0.5rem;
  //padding: 14px;
  cursor: pointer;
  background-color: transparent;
  /* background-image: var(--button-icon);
  background-size: 27.5px;
  background-position: center;
  background-repeat: no-repeat; */
  height: var(--color-toggle-switch-height);
  width: var(--color-toggle-switch-height);

  outline: none;
}
.color-toggle-button:hover {
  background-color: var(--background-color);
  transition: 0.3s ease-out;
}
.color-toggle-button:hover > .moon-svg {
  color: var(--off-white);
}

.color-toggle-dropdown-button {
  //background-color: var(--background-color);
  //border: 0.1rem solid var(--on-background);
  //margin-left: -0.1rem;
  //border-radius: 0 0.8rem 0.8rem 0;
  //padding: 0.8rem 0.6rem 1rem 0.6rem;

  font-size: 3rem;
  height: var(--color-toggle-switch-height);
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -0.2rem;
  border-radius: 0 0.5rem 0.5rem 0;

  //outline: none;
}
.down-arrow {
  border: solid var(--on-background);
  border-width: 0 0.3rem 0.3rem 0;
  display: inline-block;
  padding: 0.3rem;
  transform: rotate(45deg);
  outline: none;
}

/* MAYBE ADD HOVER EFFECT? */

/* :root {
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
} */
</style>
