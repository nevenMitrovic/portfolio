<template>
  <div class="flex flex-col gap-1 pb-10 text-base text-base_true_gray">
    <div>
      <div
        class="flex items-center gap-3 pl-7 py-2 text-base_true_white"
        :class="
          commonStore.isTablet ? 'bg-lines' : 'bg-inherit border-b border-lines'
        "
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
    <div v-if="isOpen" class="flex flex-col gap-4 pt-4">
      <div v-for="filter in filterData" :key="filter.id" class="pl-7">
        <CheckBox
          v-model="selectedFilters[filter.id as keyof typeof selectedFilters]"
          :icon="filter.icon"
          :id="filter.id"
        />
      </div>
    </div>
  </div>
  <div :class="!commonStore.isTablet && 'hidden'">
    <div class="px-7 pb-4">
      // projects
      <span class="text-base_true_gray">/ {{ getSelectedFilterTitle() }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckBox from "../Common/CheckBox.vue";
import { useCommonStore } from "~/store/commonStore";
import { filterData } from "~/data";

const emit = defineEmits(["updateFilter"]);

const commonStore = useCommonStore();

const isOpen = ref(false);
const selectedFilters = reactive({
  react: false,
  vue: false,
  nuxt: false,
  express: false,
  nest: false,
});

const toggleVisibility = (): void => {
  isOpen.value = !isOpen.value;
};
const getSelectedFilterTitle = () => {
  let filters: string[] = [];
  for (const [key, value] of Object.entries(selectedFilters)) {
    if (value) {
      filters.push(key);
    }
  }
  if (filters.length === 0) {
    emit("updateFilter", filters);
    return "all";
  } else {
    if (filters.length == Object.keys(selectedFilters).length) {
      return "all";
    } else {
      emit("updateFilter", filters);
      return filters.join("; ");
    }
  }
};
</script>
