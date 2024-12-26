<template>
  <div v-if="commonStore.isTablet" class="bg-portfolio-primary-50 pb-10">
    <div class="py-5 px-7 text-sm">_projects</div>
    <Filters @update-filter="selectedFilters = $event" />
    <div>
      <div class="flex flex-col gap-5 px-7">
        <div v-for="(card, index) in filteredProjects()" :key="card.id">
          <ProjectCard :props="card" :index="index + 1" />
        </div>
      </div>
    </div>
  </div>

  <!-- DESKTOP VERSION -->
  <div v-else class="flex bg-portfolio-primary-50 h-screen">
    <div
      class="border-r border-lines w-2/12 md:w-[230px] xl:w-2/12 h-full overflow-y-auto"
    >
      <Filters @update-filter="selectedFilters = $event" ref="filtersRef" />
    </div>
    <div class="w-full h-full overflow-y-auto text-base md:text-sm xl:text-base text-base_true_gray">
      <div class="h-[41px] md:h-[37px] xl:h-[41px] border-b border-lines">
        <div
          class="flex justify-between items-center px-6 border-r border-lines h-full w-1/6 md:w-[200px] xl:w-1/6"
        >
          <div class="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
            {{ getFiltersNames() }}
          </div>
          <button
            @click="removeSelectedFilters"
            class="flex items-center justify-center"
          >
            <UIcon name="ri:close-fill" class="w-4 h-4 text-base_true_gray" />
          </button>
        </div>
      </div>
      <div class="px-10 py-5">
        <div
          class="grid gap-5 justify-center items-start lg:grid-cols-2 xl:grid-cols-3"
        >
          <div
            v-for="(card, index) in filteredProjects()"
            :key="card.id"
            class="flex items-center justify-center"
          >
            <ProjectCard :props="card" :index="index + 1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "~/components/ProjectsPage/ProjectCard.vue";
import Filters from "~/components/ProjectsPage/Filters.vue";
import { useCommonStore } from "~/store/commonStore";
import { projectCardsData } from "~/data";
import type { ProjectCardType } from "~/interfaces";

const commonStore = useCommonStore();

const selectedFilters = ref<string[]>([]);
const projects = ref(projectCardsData);
const filtersRef = ref<InstanceType<typeof Filters> | null>(null);

const filteredProjects = (): ProjectCardType[] => {
  if (!selectedFilters.value.length) {
    return projects.value;
  }

  let filteredProjects = projects.value.filter((project) =>
    project.tags.some((tag) => selectedFilters.value.includes(tag.id))
  );
  return filteredProjects;
};
const getFiltersNames = () => {
  if (selectedFilters.value.length === 0) {
    return "all";
  } else {
    if (selectedFilters.value.length == Object.keys(selectedFilters).length) {
      return "all";
    } else {
      return selectedFilters.value.join("; ");
    }
  }
};
const removeSelectedFilters = (): void => {
  selectedFilters.value = [];
  filtersRef.value?.resetFilters();
};
</script>
