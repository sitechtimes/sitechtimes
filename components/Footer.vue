<template>
  <footer class="bg-[var(--footer)] py-12">
    <div class="global-container flex flex-col items-center justify-evenly gap-[5%] md:flex-row">
      <div class="flex h-full max-w-full flex-col sm:max-w-fit">
        <GetNotifiedSection />
        <FooterSocialMedia :instagramUrl="insta" :twitterUrl="twitter" />
      </div>
      <FooterNav />
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{
  categories: string;
  insta: string;
  twitter: string;
  facebook: string;
}>();
</script>

<style scoped></style>
