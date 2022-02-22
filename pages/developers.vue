<template>
  <div class="global-container">
    <div class="devs-page">
      <h2 class="devs-title">Meet Our Developers</h2>
      <ul class="devs-list">
        <li class="devs-list-item" v-for="dev in devs">{{ dev }}</li>
      </ul>
      <a
        href="https://github.com/sitechtimes"
        target="_blank"
        rel="noopener noreferrer"
        class="github-repo-link"
        >Tech Times GitHub Repository</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DevsPage",
  data() {
    return {
      devs: [
        "Daniel Briskman",
        "Ethan Liang",
        "Charley Baluja",
        "Alston Chan",
        "Melvin Aziz",
        "Edis Gonuler",
        "Carol Lian"
      ]
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
  align-items: center;
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

.github-repo-link {
  margin: 2rem;
  border-bottom: 0.2rem solid transparent;
  color: var(--nav-color) !important;

  font-size: var(--h4);
  font-family: var(--font);
  font-weight: 400;
  line-height: 1.3;
}

.github-repo-link:hover {
  color: var(--primary-color) !important;
  border-bottom: 0.2rem solid var(--primary-color);
  cursor: pointer;
}
.github-repo-link.nuxt-link-active {
  color: var(--primary-color) !important;
  border-bottom: unset;
  font-weight: 900;
}
</style>
