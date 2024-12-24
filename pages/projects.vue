<template>
  <div v-if="commonStore.isTablet" class="bg-portfolio-primary-50 pb-10">
    <div class="py-5 px-7 text-sm">_projects</div>
    <Filters @update-filter="selectedFilters = $event" />
    <div>
      <!-- PROJECTS -->
      <div class="flex flex-col gap-5 px-7">
        <div v-for="(card, index) in filteredProjects()" :key="card.id">
          <ProjectCard :props="card" :index="index + 1" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex bg-portfolio-primary-50 h-[84vh]">
    <div class="border-r border-lines w-2/12 h-full overflow-y-auto">
      <Filters @update-filter="selectedFilters = $event" />
    </div>
    <div class="w-full h-full overflow-y-auto text-base text-base_true_gray">
      <div class="h-[41px] border-b border-lines"></div>
      <div class="px-10 py-5">projekti</div>
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

const filteredProjects = (): ProjectCardType[] => {
  if (!selectedFilters.value.length) {
    return projects.value;
  }

  let filteredProjects = projects.value.filter((project) =>
    project.tags.some((tag) => selectedFilters.value.includes(tag.id))
  );
  return filteredProjects;
};
</script>
