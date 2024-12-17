<template>
  <footer
    class="border-t h-[56px] border-lines flex justify-between items-center"
  >
    <div
      class="pl-4 h-full md:border-r border-lines flex items-center md:w-[150px] text-base text-base_true_gray"
    >
      <p>{{ footerData.title }}</p>
    </div>
    <div
      v-if="commonStore.isMobile || commonStore.isTablet"
      class="flex items-center justify-center"
    >
      <div
        v-for="(item, index) in footerData.social"
        :key="index"
        class="flex items-center justify-center text-base_true_gray hover:text-white border-l border-lines"
      >
        <NuxtLink
          :to="item.path"
          class="p-3 flex items-center justify-center"
          target="_blank"
        >
          <UIcon :name="item.icon" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
    <div v-else class="flex items-center justify-between w-full h-full">
      <div class="flex items-center h-full">
        <div
          v-for="(item, index) in footerData.social"
          :key="index"
          class="flex items-center justify-center text-base_true_gray hover:text-white border-r border-lines w-fit"
        >
          <NuxtLink
            :to="item.path"
            class="p-3 flex items-center justify-center"
            target="_blank"
          >
            <UIcon :name="item.icon" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
      <div
        class="flex items-center justify-center text-base_true_gray hover:text-white border-l border-lines w-fit"
      >
        <NuxtLink to="/contact-me" class="p-3 flex items-center justify-center">
          <UIcon name="ri:mail-add-fill" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerData } from "~/data";
import { useCommonStore } from "~/store/commonStore";

const commonStore = useCommonStore();
</script>
