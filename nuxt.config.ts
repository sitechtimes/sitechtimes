// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: "sitechtimes",
      htmlAttrs: {
        lang: "en"
      },
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },
  css: ["./assets/global.css"],
  devServer: {
    host: "0.0.0.0",
    port: 8089
  },
  runtimeConfig: {
    public: {
      baseURL: ""
    }
  }
});
