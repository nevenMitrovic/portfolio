<template>
  <div
    class="bg-primary-light pt-24 px-7 md:pt-40 md:pl-[22%] flex md:flex-row flex-col"
  >
    <div class="flex flex-col md:w-fit">
      <div class="text-base md:text-lg mb-20">
        <p>Hi all. I am</p>
        <p class="text-6xl">NEVEN MITROVIC</p>
        <p class="text-portfolio-accent-green text-lg md:text-3xl">
          > Front-end developer
        </p>
      </div>
      <div>
        <p class="text-base_true_gray">// find my profile on Github:</p>
        <p class="text-sm md:text-base">
          <span class="text-portfolio-secondary-purple">const </span>
          <span class="text-portfolio-secondary-green">githubLink </span>
          <span>= </span>
          <span class="text-portfolio-accent-peach"
            >"https://github.com/nevenMitrovic"</span
          >
        </p>
      </div>
    </div>
    <div
      v-if="!commonStore.isMobile || !commonStore.isTablet"
      class="flex items-center justify-center w-1/2"
    >
      <MemoryGame />
    </div>
  </div>
</template>

<script setup lang="ts">
import MemoryGame from "~/components/LandingPage/MemoryGame.vue";
import { useCommonStore } from "~/store/commonStore";

const commonStore = useCommonStore();
</script>
