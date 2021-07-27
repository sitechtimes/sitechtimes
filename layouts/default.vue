<template>
  <div>
    <Datebar />
    <Navbar />
       <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Datebar from "../components/Datebar";
import Navbar from "../components/Navbar";
export default {
  components: {
    Datebar, Navbar
  }
}
</script>
