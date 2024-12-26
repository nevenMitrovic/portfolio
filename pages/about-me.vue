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
        <div
          v-if="selectedTitles.file"
          class="pt-4 text-base text-base_true_gray"
        >
          {{ getFileText() }}
          <p
            v-if="selectedTitles.file == 'code-by-comtrade'"
            class="w-full flex justify-start items-center mt-4 pt-4"
          >
            <img
              src="/img/Neven-Mitrovic-Certificate.png"
              alt="Certificate"
              class="w-full h-full rounded-md"
            />
          </p>
        </div>
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
  <div v-else class="flex bg-portfolio-primary-50 h-screen">
    <div
      class="border-r border-lines w-2/12 md:w-[230px] xl:w-2/12 h-full overflow-y-auto"
    >
      <SelectInfo
        :info-data="selectInfoData"
        @on-select-file="selectedTitles.file = $event"
        @on-select-section="selectedTitles.section = $event"
      />
    </div>
    <div
      class="w-5/12 border-r border-lines h-full overflow-y-auto text-base md:text-sm xl:text-base text-base_true_gray"
    >
      <div class="h-[41px] md:h-[37px] xl:h-[41px] border-b border-lines">
        <div
          v-if="selectedTitles.section"
          class="flex justify-between items-center px-6 md:px-3 xl:px-6 border-r border-lines h-full w-1/3 md:w-[200px] xl:w-[250px]"
        >
          {{ selectedTitles.section }}
          <button
            @click="removeSelectedSection"
            class="flex items-center justify-center"
          >
            <UIcon name="ri:close-fill" class="w-4 h-4 text-base_true_gray" />
          </button>
        </div>
      </div>
      <div class="px-10 md:px-5 lg:px-7 xl:px-10 py-5">
        <div
          v-if="selectedTitles.file"
          class="flex flex-col text-base md:text-sm xl:text-base text-base_true_gray"
        >
          <span class="inline-block pb-2">/**</span>
          <span class="inline-block pb-4">{{ selectedTitles.file }}</span>
          <span>{{ getFileText() }}</span>
          <span class="inline-block pt-2">*/</span>
          <p
            v-if="selectedTitles.file == 'code-by-comtrade'"
            class="w-full flex justify-start items-center mt-4 pt-4"
          >
            <img
              src="/img/Neven-Mitrovic-Certificate.png"
              alt="Certificate"
              class="w-full h-full rounded-md"
            />
          </p>
        </div>
        <p v-else class="pt-4 text-base text-base_true_gray">
          Select specific information about me!
        </p>
      </div>
    </div>
    <div class="w-5/12 h-full overflow-y-auto">
      <div class="h-[41px] md:h-[37px] xl:h-[41px] border-b border-lines"></div>
      <div class="px-10 md:px-5 lg:px-7 xl:px-10 py-5">
        <h2 class="text-lg md:text-base xl:text-lg text-base_true_gray pb-10">
          // Code snippet showcase:
        </h2>
        <div>
          <CodeSnippet :snippet-data="useAxiosExample" />
        </div>
      </div>
    </div>
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
const removeSelectedSection = (): void => {
  selectedTitles.section = "";
  selectedTitles.file = "";
};
</script>
