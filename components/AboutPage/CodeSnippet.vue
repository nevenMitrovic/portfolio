<template>
  <div>
    <!-- HEADER -->
    <div class="flex md:flex-col lg:flex-row justify-between mb-3">
      <div class="flex">
        <div class="mr-2">
          <img
            src="./slikaCV.jpg"
            alt="User avatar"
            class="w-[36px] h-[36px] rounded-full"
          />
        </div>
        <div class="flex flex-col">
          <p class="text-portfolio-secondary-purple text-sm font-bold">
            @nevenmitrovic
          </p>
          <p class="text-base_true_gray text-xs">
            {{ agoCalculator(snippetData.time.month, snippetData.time.year) }}
          </p>
        </div>
      </div>
      <div
        class="flex items-center md:justify-start lg:justify-center md:pt-2 lg:pt-0 justify-center"
      >
        <button
          class="flex items-center justify-center gap-1"
          @click="openDetails"
        >
          <UIcon
            name="ri:chat-smile-3-fill"
            class="w-4 h-4 text-base_true_gray"
          />
          <p class="text-sm text-base_true_white">details</p>
        </button>
      </div>
    </div>
    <!-- CODE -->
    <div>
      <div class="pb-4" :class="showDetails && 'border-b border-lines'">
        <div>
          <ClientOnly>
            <highlightjs
              autodetect
              :code="snippetData.code"
              class="rounded-xl overflow-hidden"
            />
          </ClientOnly>
        </div>
      </div>
      <div
        v-if="showDetails"
        class="relative flex text-base_true_gray text-sm pt-4"
      >
        <p>{{ snippetData.details }}</p>
        <button
          class="absolute flex items-start right-0 top-0"
          @click="closeDetails"
        >
          <UIcon name="ri:close-fill" class="w-4 h-4 text-base_true_gray" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CodeSnippetType } from "~/interfaces";

defineProps<{ snippetData: CodeSnippetType }>();

const showDetails = ref(false);

const openDetails = () => (showDetails.value = true);
const closeDetails = () => (showDetails.value = false);
</script>
