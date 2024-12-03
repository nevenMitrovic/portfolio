// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui"],
  ssr: false, // Ovo će omogućiti SPA mod
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/css/tailwind.css"],
  image: {
    dir: "assets/img",
  },
  ui: {
    safelistColors: [
      "portfolio-primary",
      "portfolio-gradient",
      "portfolio-accent",
      "portfolio-secondary",
    ],
  },
});
