<template>
  <div class="md:border-b-4 md:border-b-[var(--primary-color)] md:pb-20">
    <div class="flex flex-col">
      <h2 class="text-center font-bold text-[var(--footer-header-color)]">Get Notified</h2>
      <h5 class="mb-4 text-center font-medium text-[var(--footer-header-color)] md:font-normal">Sign up for our newsletter!</h5>
    </div>
    <form action="#" @submit.prevent>
      <label class="transition" :class="showLabel ? 'opacity-1' : 'opacity-0'" for="email"><h5 class="text-[var(--accent-color)] transition">Email</h5></label>
      <div class="flex">
        <input
          @click="showLabel = !showLabel"
          class="input mt-2 w-[36rem] max-w-full rounded-[5rem] bg-[var(--accent-color)] py-6 pl-8 pr-48 text-4xl focus:outline-none focus:placeholder:text-transparent sm:max-w-fit sm:text-3xl md:mt-1 md:py-5 md:pl-9 md:pr-40 md:text-2xl"
          type="text"
          id="email"
          placeholder="Email"
          name="mail"
          required
        />
        <input
          class="input -ml-40 mt-2 w-40 cursor-pointer appearance-none rounded-[5rem] bg-[var(--primary-color)] text-4xl font-bold uppercase transition hover:bg-[var(--hover)] sm:text-3xl md:-ml-32 md:mt-1 md:w-32 md:text-2xl"
          type="submit"
          value="Join"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const showLabel = ref(false);
</script>

<style scoped>
.input {
  font-family: var(--font);
}
</style>
