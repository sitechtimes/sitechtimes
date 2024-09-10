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
        class="h-6 w-6 sun-svg"
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
      @click="showModal = true"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="palette"
        class="svg-inline--fa fa-palette fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
        ></path>
      </svg>
    </button>

    <themes-modal
      class="modal-test"
      v-if="showModal"
      @closeModal="showModal = false"
    >
      you can use custom content here to overwrite default content
      <h3 slot="header">custom header</h3>
    </themes-modal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  /*   colorMode: string;  */
  showModal: boolean;
  sun: boolean;
  moon: boolean;
}>();
const colorMode = useColorMode();
const showModal = ref(false);
const sun = ref(false);
const moon = ref(false);

const colorSwitch = () => {
  if (document.querySelectorAll("html")[0].classList.contains("light-mode")) {
    //console.log("contains light-mode");
    sun.value = true;
    moon.value = false;
  } else if (
    document.querySelectorAll("html")[0].classList.contains("dark-mode")
  ) {
    //console.log("contains dark-mode");
    sun.value = false;
    moon.value = true;
  } else {
    sun.value = true;
    moon.value = false;
  }
};

const changeColorMode = () => {
  /* if html class has light-mode, switch to dark mode. Else, switch to light-mode */
  //console.log(document.querySelectorAll("html")[0].classList);

  if (document.querySelectorAll("html")[0].classList.contains("light-mode")) {
    //console.log("contains light-mode");
    colorMode.value = "dark";
    sun.value = false;
    moon.value = true;
  } else if (
    document.querySelectorAll("html")[0].classList.contains("dark-mode")
  ) {
    //console.log("contains dark-mode");
    colorMode.value = "light";
    sun.value = true;
    moon.value = false;
  } else {
    sun.value = true;
    colorMode.value = "light";
    moon.value = false;
  }
};

/*
const toggleDropdown = () => {
  dropdown.value = !dropdown.value;
};
const dropdownTrue = () => {
  dropdown.value = true;
};
const dropdownFalse = () => {
  dropdown.value = false;
};

const closeDropdown = () => {
  document.addEventListener("click", (event) => {
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
    dropdown.value = false;
    alert("clicked ouside");
  });
};

const handleFocus = () => {
  alert("focus in");
};
const handleFocusOut = () => {
  dropdown.value == false;
  alert("handleFocusOut");
};
const created = () => {
  colorMode.value = "system";
};
const updated = () => {
  colorMode.value = "system";
};
*/

definePageMeta({
  colorMode: "dark",
});

onMounted(() => {
  colorSwitch();
});
</script>

<style scoped lang="scss">
.modal-test {
  position: absolute;
  top: 10rem;
}

@import "../assets/variables.scss";
:root {
  --color-toggle-switch-height: 3rem;
}

// .test {
//   font-size: 1.6rem;
//   padding-left: 1rem;
//   color: var(--on-background);
//   position: absolute;
//   top: 4rem;
// }

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
.color-toggle-button > .sun-svg {
  color: var(--on-secondary);
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
  height: var(--color-toggle-switch-height);
  width: var(--color-toggle-switch-height);
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -0.2rem;
  border-radius: 0 0.5rem 0.5rem 0;
  color: var(--on-secondary);
}

.color-toggle-dropdown-button svg {
  width: 2rem;
  fill: var(--on-secondary);
}
// .down-arrow {
//   border: solid var(--on-background);
//   border-width: 0 0.3rem 0.3rem 0;
//   display: inline-block;
//   padding: 0.3rem;
//   transform: rotate(45deg);
//   outline: none;
// }
// .down-arrow-color-dropdown {
//   color: var(--on-secondary);
// }

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
