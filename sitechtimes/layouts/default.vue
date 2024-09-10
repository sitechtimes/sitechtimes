<template>
  <div>
    <Datebar />

    <Navbar />
    <MobileNav />

 
    <Footer
      insta="http://www.instagram.com/statenislandtechtimes"
      twitter="https://twitter.com/sitechtimes"
      facebook="https://www.facebook.com/SI-Tech-Times-135100402077100"
    ></Footer>
  </div>
</template>

<script setup lang="ts">
const categories = ref([]);
async function fetchCategories() {
  try {
    const response = await fetch("/cms/categories");
    const data = await response.json();
    categories.value = data;
  } catch (error) {
    await router.push("/");
  }
}

onMounted(fetchCategories);
</script>
