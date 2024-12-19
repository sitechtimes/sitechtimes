<template>
  <div class="z-10 inline-flex justify-end">
    <button class="size-12 cursor-pointer rounded-l-lg border-4 border-[var(--on-primary)] bg-transparent transition hover:bg-[var(--background-color)]" @click="changeColorMode">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-[var(--on-background)]" fill="none" viewBox="0 0 24 24" v-if="sun">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-[var(--on-background)]" fill="none" viewBox="0 0 24 24" v-else-if="moon">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>

    <button
      class="-ml-1 mr-4 flex size-12 cursor-pointer items-center justify-center rounded-r-lg border-4 border-[var(--on-primary)] bg-transparent text-[var(--on-secondary)] transition hover:bg-[var(--background-color)]"
      @click="showModal = true"
    >
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" class="w-8 fill-[var(--on-secondary)]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
        ></path>
      </svg>
    </button>

    <Transition name="modal">
      <div id="modal-mask" class="fixed left-0 top-0 z-50 flex h-dvh w-screen items-center justify-center bg-black/50 transition" v-show="showModal">
        <div id="modal-container" class="mx-8 max-h-[90vh] rounded-lg bg-[var(--background-color)] p-16 shadow transition sm:mx-auto">
          <h2 class="text-[var(--on-background)]"></h2>
          <ul class="m-8 max-h-[45vh] overflow-y-scroll text-[var(--on-background)]">
            <li
              class="cursor-pointer py-2 text-center text-4xl capitalize transition duration-500 hover:bg-[var(--hover)] focus:border focus:border-[var(--primary-color)] sm:py-4 sm:text-2xl"
              v-for="theme in themes"
              @click="selectedTheme = theme"
            >
              {{ theme }}
            </li>
          </ul>
          <button
            class="float-right cursor-pointer rounded-2xl bg-[var(--primary-color)] px-8 py-3 text-2xl text-[var(--on-background)] transition hover:bg-[var(--accent-color)] hover:text-black"
            @click="showModal = false"
          >
            Close
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const colorMode = ref("");
const showModal = ref(false);
const sun = ref(false);
const moon = ref(false);

const themes = ["detect system", "light", "dark", "popplio", "ember", "outrun-night", "cucumber", "meditate"];
const selectedTheme = ref(themes[0]);

onMounted(() => {
  if (document.querySelectorAll("html")[0].classList.contains("dark-mode")) {
    sun.value = false;
    moon.value = true;
  }
  sun.value = true;
  moon.value = false;
});

function changeColorMode() {
  if (document.querySelectorAll("html")[0].classList.contains("light-mode")) {
    colorMode.value = "dark";
    sun.value = false;
    moon.value = true;
    return (selectedTheme.value = "dark");
  }
  colorMode.value = "light";
  sun.value = true;
  moon.value = false;
  selectedTheme.value = "light";
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease;
}

.modal-enter-from #modal-mask,
.modal-leave-to #modal-mask {
  opacity: 0;
}

.modal-enter-from #modal-container,
.modal-leave-to #modal-container {
  transform: scale(1.1);
}
</style>
