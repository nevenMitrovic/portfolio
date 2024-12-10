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
      fontFamily: {
        custom: ["FiraCode", "monospace"],
      },
      colors: {
        "portfolio-primary": {
          50: "#011627",
          100: "#011221",
        },
        "portfolio-secondary": {
          green: "#3C9D93",
          purple: "#4D5BCE",
        },
        "portfolio-accent": {
          orange: "#FEA55F",
          green: "#43D9AD",
          pink: "#C98BDF",
          peach: "#E99287",
        },
        "portfolio-gradient": {
          from: "#4D5BCE",
          to: "#43D9AD",
        },
        lines: "#1E2D3D",
        base_true_white: "#FFFFFF",
        base_true_black: "#01080E",
        base_true_gray: "#607B96",
      },
    },
  },
  plugins: [],
  modules: ["@nuxtjs/tailwindcss", "@tailwindcss/forms"],
  tailwindcss: {
    // Options
  },
};
