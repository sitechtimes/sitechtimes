<template>
  <div class="flex flex-col flex-wrap sm:mb-8">
    <section class="flex">
      <svg
        width="1.3rem"
        height="1.3rem"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="user"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        id="article-author-icon"
        class="mr-2 mt-2"
      >
        <path
          fill="currentColor"
          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
        ></path>
      </svg>
      <h5>{{ author }}</h5>
    </section>
    <section class="flex">
      <svg
        width="1.3rem"
        height="1.3rem"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="clock"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        id="article-published-icon"
        class="mr-2 mt-2"
      >
        <path
          fill="currentColor"
          d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
        ></path>
      </svg>
      <h5>{{ format(published) }}</h5>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  author: string;
  published: string;
}>();
</script>

<style scoped></style>
