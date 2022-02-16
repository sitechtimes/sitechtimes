<template>
  <div class="color-toggle-switch">
    <button
      class="color-toggle-button"
      id="color-toggle-dropdown-button"
      @click="showModalTrue"
    ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" class="svg-inline--fa fa-palette fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
    </button>

    <themes-modal
      class="modal-test"
      v-if="showModal"
      @closeModal="showModalFalse"
    >
      you can use custom content here to overwrite default content
      <h3 slot="header">custom header</h3>
    </themes-modal>
  </div>
</template>

<script>

export default {
  name: "ColorModeToggleTemp",
  data() {
    return {
      colorMode: "",
      showModal: false,
      sun: false,
      moon: false
    };
  },
  methods: {
    showModalTrue() {
      this.showModal = true;
      document.body.classList.add("modal-open");
    },
     showModalFalse() {
      this.showModal = false;
      document.body.classList.remove("modal-open");
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
  border-radius: 0.5rem;
  //padding: 14px;
  cursor: pointer;
  background-color: transparent;
  /* background-image: var(--button-icon);
  background-size: 27.5px;
  background-position: center;
  background-repeat: no-repeat; */
  height: var(--color-toggle-switch-height);
  width: var(--color-toggle-switch-height);
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}
.color-toggle-button:hover {
  background-color: var(--background-color);
  transition: 0.3s ease-out;
}
.color-toggle-button svg {
  width: 2rem;
  fill: var(--on-secondary);
}
body.modal-open {
  overflow: hidden;
  height: 100vh;
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
