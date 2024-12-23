<template>
  <div v-if="commonStore.isTablet" class="bg-portfolio-primary-50 pb-10">
    <div class="py-5 px-7 text-sm">_about-me</div>
    <SelectInfo
      :info-data="selectInfoData"
      @on-select-file="selectedTitles.file = $event"
      @on-select-section="selectedTitles.section = $event"
    />
    <div>
      <!-- INFO -->
      <div class="px-7 mb-10">
        // {{ selectedTitles.section }}
        <span class="text-base_true_gray">/ {{ selectedTitles.file }}</span>
        <p
          v-if="selectedTitles.file"
          class="pt-4 text-base text-base_true_gray"
        >
          {{ getFileText() }}
        </p>
        <p v-else class="pt-4 text-base text-base_true_gray">
          Select specific information about me!
        </p>
      </div>
      <!-- CODE SNIPPETS -->
      <div class="px-7">
        <div class="text-base_true_white mb-7">// Code snippet showcase:</div>
        <div class="max-w-full">
          <CodeSnippet :snippet-data="useAxiosExample" />
        </div>
      </div>
    </div>
  </div>

  <!-- DESKTOP VERSION -->
  <div v-else class="flex bg-portfolio-primary-50 h-[84vh]">
    <div class="border-r border-lines w-2/12 h-full">
      <SelectInfo
        :info-data="selectInfoData"
        @on-select-file="selectedTitles.file = $event"
        @on-select-section="selectedTitles.section = $event"
      />
    </div>
    <div class="w-5/12 border-r border-lines h-full">Jedan deo</div>
    <div class="w-5/12 h-full">drugi deo</div>
  </div>
</template>

<script setup lang="ts">
import SelectInfo from "~/components/AboutPage/SelectInfo.vue";
import CodeSnippet from "~/components/AboutPage/CodeSnippet.vue";
import { filesData, selectInfoData, useAxiosExample } from "~/data";
import { useCommonStore } from "~/store/commonStore";

const commonStore = useCommonStore();

const selectedTitles = reactive({
  file: "bio",
  section: "personal-info",
});

const getFileText = (): string => {
  const selected = filesData.find((file) => file.id == selectedTitles.file);
  if (selected) {
    return selected.data;
  } else {
    return "";
  }
};
</script>
