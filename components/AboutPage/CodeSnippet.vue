<template>
  <div>
    <!-- HEADER -->
    <div class="flex justify-between mb-3">
      <div class="flex">
        <div class="mr-2">
          <NuxtImg
            src="./slikaCV.jpg"
            alt="User avatar"
            width="36px"
            height="36px"
            class="rounded-full"
          />
        </div>
        <div class="flex flex-col">
          <p class="text-portfolio-secondary-purple text-sm font-bold">
            @nevenmitrovic
          </p>
          <p class="text-base_true_gray text-xs">5 months ago</p>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button class="flex items-center justify-center gap-1">
          <UIcon
            name="ri:chat-smile-3-fill"
            class="w-4 h-4 text-base_true_gray"
          />
          <p class="text-sm base_true_white">details</p>
        </button>
      </div>
    </div>
    <!-- CODE -->
    <div>
      <div class="pb-4">
        <div class="rounded-xl">
          <ClientOnly>
            <highlightjs autodetect :code="useAxiosExample" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAxiosExample } from "~/data";
</script>
