<template>
  <header
    class="flex justify-between items-center border-b border-lines p-5 text-base_true_gray"
  >
    <!-- LOGO -->
    <div class="text-base">neven-mitrovic</div>
    <button class="flex items-center justify-center" @click="toggleMenu">
      <UIcon name="ri:menu-fill" class="w-5 h-5 hover:text-base_true_white" />
    </button>
  </header>
  <div v-if="isMenuOpen" class="relative">
    <nav class="absolute top-1 z-10 w-full bg-portfolio-primary-50">
      <li class="list-none">
        <ul
          v-for="link in navigationLinks"
          :key="link.title"
          class="border-b border-lines p-4"
        >
          <NuxtLink :to="link.path" exact-active-class="text-base_true_white">
            {{ link.title }}
          </NuxtLink>
        </ul>
      </li>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { navigationLinks } from "~/data";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
