<template>
  <div>
    <div class="text-base pb-4">
      <span class="font-bold text-portfolio-secondary-purple">Project 1 </span>
      <span class="text-base_true_gray">/ whobrings</span>
    </div>
    <div
      class="relative flex flex-col justify-center bg-portfolio-primary-100 border border-lines rounded-xl overflow-hidden"
    >
      <div
        class="absolute flex items-center justify-center top-3 right-3 bg-[#81D4AF] rounded p-1"
      >
        <UIcon name="ri:vuejs-line" class="w-5 h-5 text-base_true_black" />
      </div>
      <div class="border-b border-lines">
        <NuxtImg src="./whobrings.png" alt="whobrings.png" />
      </div>
      <div class="px-8 py-6 text-base_true_gray">
        Fullstack application for creating and managing event lists.
      </div>
      <div class="flex justify-start px-8 pb-6">
        <button
          class="bg-[#1C2B3A] text-sm text-base_true_white rounded-md py-2 px-3"
        >
          view-project
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
