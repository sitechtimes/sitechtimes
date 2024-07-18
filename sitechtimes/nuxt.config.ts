import ENV_VALUES from "./config";

export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "sitechtimes",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/dateFormat.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/color-mode"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["vue-social-sharing/nuxt"],

  server: {
    host: "0.0.0.0",
    port: 8089,
  },

  $fetch: {
    baseURL: ENV_VALUES.DEV.api,
  },

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
  },

  hooks: {
    generate: {
      page(page: { path: string }) {
        page.path = page.path.replace(/html^/, "");
      },
    },
  },
};
