<template>
  <div class="h-20 w-screen bg-[var(--accent-color)] sm:h-auto">
    <div class="ml-8 flex items-center justify-between sm:mr-8 lg:mr-0 lg:w-[80rem] xl:w-[100rem]">
      <h5 class="p-1 text-7xl text-[var(--on-secondary)] md:text-6xl lg:text-5xl xl:text-4xl">
        <span>{{ date }}</span>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"
          ></path>
        </svg>
      </h5>
      <div class="flex items-center justify-between">
        <ColorModeSwitcher />
        <CmsButton />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const date = ref("");

onMounted(() => {
  refreshDate();
});

async function refreshDate() {
  while (true) {
    date.value = new Date().toLocaleString(undefined, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    await delay(1000);
  }
}
</script>

<style scoped></style>
