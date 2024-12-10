<template>
  <div class="bg-portfolio-primary-50">
    <div class="py-5 px-7 text-sm">_about-me</div>
    <SelectInfo
      @on-select-file="selectedTitles.file = $event"
      @on-select-section="selectedTitles.section = $event"
    />
    <div>
      <div class="px-7 mb-10">
        <!-- TITLE -->
        // {{ selectedTitles.section }}
        <span class="text-base_true_gray">/ {{ selectedTitles.file }}</span>
        <!-- FILE DATA -->
        <p class="pt-4 text-base text-base_true_gray">{{ getFileText() }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectInfo from "~/components/AboutPage/SelectInfo.vue";
import { filesData } from "~/data";

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
