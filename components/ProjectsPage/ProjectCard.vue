<template>
  <div>
    <div class="text-base pb-4">
      <span class="font-bold text-portfolio-secondary-purple"
        >Project {{ index }}
      </span>
      <span class="text-base_true_gray"> / {{ props.id }}</span>
    </div>
    <div
      class="relative flex flex-col justify-center bg-portfolio-primary-100 border border-lines rounded-xl overflow-hidden"
      :class="
        commonStore.isTablet
          ? 'max-w-[291px] max-h-[328px]'
          : 'max-w-[370px] max-h-[370px]'
      "
    >
      <div
        class="flex items-center justify-center gap-1 absolute top-3 right-3"
      >
        <div
          v-for="tag in props.tags"
          :key="tag.id"
          :class="`flex items-center justify-center rounded p-1 ${colorVariants[tag.color as keyof typeof colorVariants]}`"
        >
          <UIcon :name="tag.icon" class="w-5 h-5 text-base_true_black" />
        </div>
      </div>
      <div class="border-b border-lines">
        <img :src="props.img" :alt="props.id" class="w-full h-full" />
      </div>
      <div class="px-8 py-6 text-base_true_gray">
        {{ props.description }}
      </div>
      <div class="flex justify-start px-8 pb-6">
        <button class="bg-[#1C2B3A] rounded-md py-2 px-3">
          <NuxtLink
            :to="props.link"
            target="_blank"
            class="text-sm text-base_true_white"
          >
            view-project
          </NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "~/store/commonStore";
import type { ProjectCardType } from "~/interfaces";

defineProps<{ props: ProjectCardType; index: number }>();

const commonStore = useCommonStore();

const colorVariants = {
  node_green: "bg-node_green",
  vue_green: "bg-vue_green",
  react_blue: "bg-react_blue",
  vanilla_yellow: "bg-yellow-500",
};
</script>
