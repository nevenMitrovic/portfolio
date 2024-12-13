<template>
  <div class="bg-portfolio-primary-50 pb-10">
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
</template>

<script setup lang="ts">
import ProjectCard from "~/components/ProjectsPage/ProjectCard.vue";
import Filters from "~/components/ProjectsPage/Filters.vue";
import { projectCardsData } from "~/data";
import type { ProjectCardType } from "~/interfaces";

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
