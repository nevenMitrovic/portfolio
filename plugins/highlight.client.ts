import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import highlightJS from "@highlightjs/vue-plugin";
import "highlight.js/styles/atom-one-dark.css";

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage("typescript", typescript);
  nuxtApp.vueApp.use(highlightJS);
});
