<template>
  <div
    class="flex flex-col pb-10 text-base md:text-sm xl:text-base text-base_true_gray"
  >
    <div>
      <div
        class="flex items-center gap-3 pl-7 md:pl-2 xl:pl-7 py-2 text-base_true_white cursor-pointer"
        :class="
          commonStore.isTablet ? 'bg-lines' : 'bg-inherit border-b border-lines'
        "
        @click="toggleVisibility()"
      >
        <UIcon
          v-if="!isOpen"
          name="ri:arrow-right-s-fill"
          class="w-5 h-5 text-base_true_white"
        />
        <UIcon
          v-else
          name="ri:arrow-down-s-fill"
          class="w-5 h-5 text-base_true_white"
        />
        <p>find-me-also-in</p>
      </div>
    </div>
    <div v-if="isOpen" class="flex flex-col pt-3">
      <NuxtLink
        to="https://www.instagram.com/neven_mitrovic_/"
        target="_blank"
        class="flex items-center gap-2 pl-7 md:pl-2 xl:pl-7 text-base md:text-sm xl:text-base"
      >
        <UIcon name="ri:instagram-fill" class="w-5 h-5" />
        <span>Instagram accaunt</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "~/store/commonStore";

const commonStore = useCommonStore();

const isOpen = ref(false);
const toggleVisibility = (): void => {
  isOpen.value = !isOpen.value;
};
</script>
