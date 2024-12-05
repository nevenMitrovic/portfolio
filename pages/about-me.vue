<template>
  <div class="bg-portfolio-primary-50">
    <div class="py-5 px-7 text-sm">_about-me</div>
    <div class="flex flex-col gap-1 pb-10">
      <div>
        <!-- TITLE -->
        <div
          class="bg-lines flex items-center gap-3 pl-7 py-2 text-base text-base_true_white"
          @click="toggleVisibility({ section: 'personal' })"
        >
          <UIcon
            v-if="!isOpen.sections.personal"
            name="ri:arrow-right-s-fill"
            class="w-5 h-5"
          />
          <UIcon v-else name="ri:arrow-down-s-fill" class="w-5 h-5" />
          <p>personal-info</p>
        </div>
        <!-- FOLDER TITLE -->
        <div
          v-if="isOpen.sections.personal"
          class="flex items-center pl-7 py-2 text-base text-base_true_white"
          @click="toggleVisibility({ folder: 'bio' })"
        >
          <UIcon
            v-if="!isOpen.folders.bio"
            name="ri:arrow-right-s-line"
            class="w-5 h-5 text-base_true_gray mr-3"
          />
          <UIcon
            v-else
            name="ri:arrow-down-s-line"
            class="w-5 h-5 text-base_true_gray mr-3"
          />
          <UIcon
            name="ri:folder-5-fill"
            class="w-4 h-4 text-portfolio-accent-orange mr-2"
          />
          <p>bio</p>
        </div>
        <!-- MARKDOWN FILE -->
        <div
          v-if="isOpen.folders.bio"
          class="flex items-center pl-[60px] py-2 text-base text-base_true_white"
        >
          <UIcon
            name="ri:markdown-fill"
            class="w-4 h-4 text-base_true_gray mr-2"
          />
          <p>bio</p>
        </div>
      </div>
      <div>
        <div class="bg-lines flex items-center gap-3 pl-7 py-2">
          <UIcon name="ri:arrow-right-s-fill" class="w-5 h-5 text-white" />
          <p>professional-info</p>
        </div>
      </div>
      <div>
        <div class="bg-lines flex items-center gap-3 pl-7 py-2">
          <UIcon name="ri:arrow-right-s-fill" class="w-5 h-5 text-white" />
          <p>contacts</p>
        </div>
      </div>
    </div>
    <div>
      <p class="px-7">
        // personal-info <span class="text-base_true_gray">/ bio</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = reactive({
  sections: {
    personal: false,
    professional: false,
    contacts: false,
  },
  folders: {
    bio: false,
  },
});

const toggleVisibility = ({
  section,
  folder,
}: {
  section?: keyof typeof isOpen.sections;
  folder?: keyof typeof isOpen.folders;
}): void => {
  if (section) isOpen.sections[section] = !isOpen.sections[section];
  if (folder) isOpen.folders[folder] = !isOpen.folders[folder];
};
</script>
