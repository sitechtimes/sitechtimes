<template>
  <div aria-label="mobile navbar" class="sticky top-0 z-[1] block max-h-dvh w-screen md:hidden" :class="showMenu ? 'bg-[var(--background-color)]' : 'bg-[var(--mobile-nav-background)]'">
    <div class="global-container flex items-center justify-between py-3">
      <span>
        <NuxtLink class="flex items-center" :class="showMenu ? 'visible' : 'invisible'" to="/">
          <img src="/assets/logo_filled.svg" alt="sitechtimes" />
          <h2 class="ml-4">Tech Times</h2>
        </NuxtLink>
      </span>
      <div class="relative w-10 rotate-0 cursor-pointer p-8 transition sm:w-16" @click="showMenu = !showMenu">
        <span
          class="opacity-1 origin absolute left-0 top-6 block h-1 w-full rotate-0 rounded-2xl bg-[var(--on-background)] transition sm:top-4"
          :class="{ 'left-3 top-4 rotate-45 bg-[var(--white)] sm:top-3': showMenu }"
        ></span>
        <span class="opacity-1 origin absolute left-0 top-10 block h-1 w-full rotate-0 rounded-2xl bg-[var(--on-background)] transition sm:top-8" :class="{ 'w-0 opacity-0': showMenu }"></span>
        <span
          class="opacity-1 origin absolute left-0 top-14 block h-1 w-full rotate-0 rounded-2xl bg-[var(--on-background)] transition sm:top-12"
          :class="{ 'left-3 top-16 rotate-45 bg-[var(--white)] sm:top-14': showMenu }"
        ></span>
      </div>
    </div>
    <Transition name="fade">
      <div class="flex h-[calc(100dvh-8.1rem)] w-full flex-col overflow-y-auto bg-[var(--mobile-nav-background)] text-center" v-show="showMenu">
        <ul>
          <NuxtLink v-for="category in categories" :key="category" :to="'../' + category" @click="showMenu = false">
            <li class="m-4 list-none text-5xl capitalize text-[var(--mobile-nav-text)]">{{ category }}</li>
          </NuxtLink>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const showMenu = ref(false);
const categories = ["covid", "entertainment", "news", "politics", "opinion", "science", "technology", "activities"];
</script>

<style scoped>
.origin {
  transform-origin: left center;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.75s;
}
.fade-enter,
.fade-leave-to {
  transition: all 0s;
  opacity: 0;
}
</style>
