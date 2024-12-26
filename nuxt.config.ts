// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
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
  image: {
    dir: "public/img",
    provider: "netlify",
    domains: ["nevenmitrovic.netlify.app"],
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
