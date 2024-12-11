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
    <div>
      <!-- PROJECTS -->
      <div class="px-7 pb-4">
        // projects
        <span class="text-base_true_gray"
          >/ {{ getSelectedFilterTitle() }}</span
        >
      </div>
      <div class="px-7">
        <ProjectCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckBox from "~/components/Common/CheckBox.vue";
import ProjectCard from "~/components/ProjectsPage/ProjectCard.vue";
import { filterData } from "~/data";

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
    return "all";
  } else {
    if (filters.length == Object.keys(selectedFilters).length) {
      return "all";
    } else {
      return filters.join("; ");
    }
  }
};
</script>
