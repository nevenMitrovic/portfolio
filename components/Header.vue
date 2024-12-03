<template>
  <header class="flex justify-between items-center border-b border-lines p-5">
    <!-- LOGO -->
    <div class="text-secondary-DEFAULT text-base">neven-mitrovic</div>
    <div class="flex items-center justify-center">
      <UIcon name="ri:menu-fill" class="w-5 h-5 text-primary-DEFAULT" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
