export const useCommonStore = defineStore("commonStore", () => {
  const currentWidth = ref(import.meta.client ? window.innerWidth : 0);

  const isMobile = computed(() => currentWidth.value < 481);
  const isTablet = computed(() => currentWidth.value < 745);
  const isSmallDevice = computed(() => currentWidth.value < 1025);

  return { currentWidth, isMobile, isTablet, isSmallDevice };
});
