/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        sm: "481px",
        // => @media (min-width: 320px) { ... }
        md: "745px",
        // => @media (min-width: 744px) { ... }
        lg: "1025px",
        // => @media (min-width: 1024px) { ... }
        xl: "1441px",
        // => @media (min-width: 1440px) { ... }
        xxl: "1921px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    // Options
  },
};
