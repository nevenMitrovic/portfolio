<template>
  <div class="bg-portfolio-primary-50 pb-10">
    <div class="py-5 px-7 text-sm">_projects</div>
    <!-- FILTERS -->
    <div class="flex flex-col gap-1 pb-10 text-base text-base_true_gray">
      <div>
        <!-- TITLE -->
        <div
          class="bg-lines flex items-center gap-3 pl-7 py-2 text-base_true_white"
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
          <p>projects</p>
        </div>
      </div>
      <!-- FILTERS -->
      <div class="flex flex-col gap-4 py-4">
        <div
          v-if="isOpen"
          v-for="filter in filterData"
          :key="filter.id"
          class="pl-7"
        >
          <CheckBox
            :model-value="selectedFilters[filter.id as keyof typeof selectedFilters]"
            :icon="filter.icon"
            :id="filter.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckBox from "~/components/Common/CheckBox.vue";
import { filterData } from "~/data";

const isOpen = ref(false);
const selectedFilters = reactive({
  react: false,
  vue: false,
  express: false,
  nest: false,
});

const toggleVisibility = (): void => {
  isOpen.value = !isOpen.value;
};
</script>
