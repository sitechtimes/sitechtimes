<template>
  <div class="global-container">
    <div class="devs-page">
      <h2 class="devs-title">Meet Our Staff</h2>
      <ul class="devs-list">
        <li class="devs-list-item" v-for="member in staff">{{ member }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevsPage",
  data() {
    return {
      staff: ["Writer A", "Writer B"]
    };
  }
};
</script>

<style scoped>
.devs-page {
  padding: 0.4rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.devs-title {
  margin: 2rem auto;
  font-size: var(--h2);
  font-weight: 500;
  line-height: 120%;
}

.devs-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.devs-list-item {
  font-family: var(--article-font);
  font-size: 1.6rem;
  line-height: 3rem;
}
</style>
