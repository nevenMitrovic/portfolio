<template>
  <div class="bg-portfolio-primary-50">
    <div class="py-5 px-7 text-sm">_about-me</div>
    <SelectInfo
      @on-select-file="selectedTitles.file = $event"
      @on-select-section="selectedTitles.section = $event"
    />
    <div>
      <p class="px-7">
        // {{ selectedTitles.section }}
        <span class="text-base_true_gray">/ {{ selectedTitles.file }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectInfo from "~/components/AboutPage/SelectInfo.vue";

const selectedTitles = reactive({
  file: "bio",
  section: "personal-info",
});
</script>
