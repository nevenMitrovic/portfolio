// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      serviceID: process.env.NUXT_PUBLIC_SERVICE_ID,
      templateID: process.env.NUXT_PUBLIC_TEMPLATE_ID,
      publicID: process.env.NUXT_PUBLIC_PUBLIC_KEY,
    },
  },
  modules: ["@nuxt/image", "@nuxt/ui", "@pinia/nuxt"],
  ssr: false,
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/css/tailwind.css"],
  ui: {
    safelistColors: [
      "portfolio-primary",
      "portfolio-gradient",
      "portfolio-accent",
      "portfolio-secondary",
    ],
  },
});
