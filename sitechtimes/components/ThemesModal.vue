<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h2>All Color Themes</h2>
          <ul class="color-themes-list">
            <li
              class="theme-choice-modal"
              @click="setColorMode('system')"
              style="text-transform: none"
            >
              Auto detect system
            </li>
            <!-- <themes-modal-theme color="system" /> -->
            <themes-modal-theme color="light" />
            <themes-modal-theme color="dark" />
            <themes-modal-theme color="popplio" />
            <themes-modal-theme color="ember" />
            <themes-modal-theme color="outrun-night" />
            <themes-modal-theme color="cucumber" />
            <themes-modal-theme color="meditate" />
            <themes-modal-theme
              class="waifu-color-theme-button"
              color="waifu"
            />
          </ul>
          <button class="close-modal-button" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
interface SetColorModeFn {
  (mode: any): void;
  preference: any;
}

const setColorMode: SetColorModeFn = (mode) => {
  setColorMode.preference = mode;
};
setColorMode.preference = null;

function closeModal() {
  $emit("closeModal");
}

function $emit(arg0: string) {
  throw new Error("Function not implemented.");
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 4rem 0;
}

.modal-container {
  background-color: var(--background-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 0.5rem;

  padding: 4rem;

  max-height: 90vh;
}
.modal-container > h2,
.modal-container > ul {
  color: var(--on-background);
}

.color-themes-list {
  margin: 2rem;
  max-height: 45vh;
  overflow-y: scroll;
}

.close-modal-button {
  outline: none;
  border: none;
  padding: 0.85em 2rem 0.7em 2rem;
  font: inherit;
  cursor: pointer;

  background-color: var(--primary-color);
  color: var(--on-background);
  font-size: 1.8rem;
  line-height: 1;
  //text-align: center;
  border-radius: 1rem;

  float: right;
}
.close-modal-button:hover {
  background-color: var(--accent-color);
  color: black;
  transition: 0.3s ease;
}

@media screen and (max-width: 420px) {
  .modal-container {
    margin: auto 2rem;
  }
  .modal-container > ul > li {
    font-size: 2.3rem;
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

.waifu-color-theme-button {
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: transparent;
  color: transparent;
  font-size: 0;
  --hover: transparent;
}

.waifu-color-theme-button:hover {
  cursor: unset;
}
</style>
