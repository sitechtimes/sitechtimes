<template></template>

<script>
export default {
  async beforeMount() {
    await this.$router.push("/");
  },
};
</script>
