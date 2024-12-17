<template>
  <header
    class="flex justify-between sm:justify-start items-center border-b border-lines h-[56px] px-5 md:px-0 md:pl-5 text-base_true_gray"
  >
    <div
      class="flex items-center text-base md:border-r w-full md:w-3/12 border-lines h-full"
    >
      neven-mitrovic
    </div>
    <div v-if="commonStore.isMobile || commonStore.isTablet">
      <button class="flex items-center justify-center" @click="toggleMenu">
        <UIcon name="ri:menu-fill" class="w-5 h-5 hover:text-base_true_white" />
      </button>
    </div>
    <nav v-else class="flex h-full w-full justify-between items-center">
      <li class="list-none flex h-full">
        <ul
          v-for="link in navigationLinks.slice(0, 3)"
          :key="link.title"
          class="border-r border-lines h-full flex items-center"
        >
          <NuxtLink
            :to="link.path"
            class="py-4 px-5 hover:text-base_true_white hover:border-b hover:border-portfolio-accent-orange"
            exact-active-class="text-base_true_white border-b border-portfolio-accent-orange"
          >
            {{ link.title }}
          </NuxtLink>
        </ul>
      </li>
      <div class="h-full">
        <div
          v-for="link in navigationLinks.slice(3, 4)"
          :key="link.title"
          class="border-l border-lines h-full flex items-center"
        >
          <NuxtLink
            :to="link.path"
            class="py-4 px-5 hover:text-base_true_white hover:border-b hover:border-portfolio-accent-orange"
            exact-active-class="text-base_true_white border-b border-portfolio-accent-orange"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
  <div v-if="isMenuOpen" class="relative">
    <nav class="absolute top-1 z-10 w-full bg-portfolio-primary-50">
      <li class="list-none">
        <ul
          v-for="link in navigationLinks"
          :key="link.title"
          class="border-b border-lines p-4"
        >
          <NuxtLink
            :to="link.path"
            exact-active-class="text-base_true_white"
            @click="toggleMenu"
          >
            {{ link.title }}
          </NuxtLink>
        </ul>
      </li>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { navigationLinks } from "~/data";
import { useCommonStore } from "~/store/commonStore";

const commonStore = useCommonStore();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
