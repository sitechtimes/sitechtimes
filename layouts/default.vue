<template>
  <div>
    <Datebar />
    <Navbar />

    <div class="global-container">
       <Nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Datebar from "../components/Datebar";
export default {
  components: {
    Datebar
  }
}
</script>
