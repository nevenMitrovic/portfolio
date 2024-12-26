<template>
  <div
    class="flex flex-col pb-10 text-base md:text-sm xl:text-base text-base_true_gray"
    :class="commonStore.isTablet ? 'gap-1' : 'gap-0'"
  >
    <div v-for="section in infoData.sections" :key="section.id">
      <!-- TITLE -->
      <div
        class="flex items-center gap-3 pl-7 md:pl-2 xl:pl-7 py-2 text-base_true_white cursor-pointer"
        :class="
          commonStore.isTablet ? 'bg-lines' : 'bg-inherit border-b border-lines'
        "
        @click="
          toggleVisibility({ section: section.id }),
            updateFileModel($event, section.title, 'section')
        "
      >
        <UIcon
          v-if="!isOpen.sections[section.id]"
          name="ri:arrow-right-s-fill"
          class="w-5 h-5 text-base_true_white"
        />
        <UIcon
          v-else
          name="ri:arrow-down-s-fill"
          class="w-5 h-5 text-base_true_white"
        />
        <p>{{ section.title }}</p>
      </div>
      <!-- FOLDER TITLE -->
      <div class="flex flex-col justify-center">
        <div
          v-if="isOpen.sections[section.id]"
          v-for="(folder, index) in section.folders"
          :key="folder.title"
          class="flex flex-col justify-center cursor-pointer"
          :class="
            !commonStore.isTablet &&
            index == section.folders.length - 1 &&
            'border-b border-lines'
          "
          @click="toggleVisibility({ folder: folder.title })"
        >
          <div class="flex items-center pl-7 md:pl-2 xl:pl-7 py-2">
            <UIcon
              v-if="!isOpen.folders[folder.title]"
              name="ri:arrow-right-s-line"
              class="w-5 h-5 mr-3"
            />
            <UIcon
              v-else
              name="ri:arrow-down-s-line"
              class="w-5 h-5 mr-3 text-base_true_white"
            />
            <UIcon
              name="ri:folder-5-fill"
              class="w-4 h-4 mr-2"
              :class="'text-' + folder.color"
            />
            <p :class="isOpen.folders[folder.title] && 'text-base_true_white'">
              {{ folder.title }}
            </p>
          </div>
          <div>
            <!-- MARKDOWN FILE -->
            <div
              v-if="isOpen.folders[folder.title] && isOpen.sections[section.id]"
              class="flex flex-col justify-center"
            >
              <div
                v-for="file in folder.files"
                :key="file"
                class="flex items-center pl-[60px] md:pl-[40px] xl:pl-[60px] py-2 cursor-pointer"
                @click="updateFileModel($event, file, 'file')"
              >
                <UIcon name="ri:markdown-fill" class="w-4 h-4 mr-2" />
                <p>
                  {{ file }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CONTACTS -->
    <div
      class="flex md:hidden xl:flex items-center gap-3 pl-7 py-2 text-base_true_white cursor-pointer"
      :class="
        commonStore.isTablet ? 'bg-lines' : 'bg-inherit border-b border-lines'
      "
      @click="toggleVisibility({ section: infoData.contacts.id })"
    >
      <UIcon
        v-if="!isOpen.sections.contacts"
        name="ri:arrow-right-s-fill"
        class="w-5 h-5 text-base_true_white"
      />
      <UIcon
        v-else
        name="ri:arrow-down-s-fill"
        class="w-5 h-5 text-base_true_white"
      />
      <p>contacts</p>
    </div>
    <div
      v-if="isOpen.sections.contacts"
      v-for="contact in infoData.contacts.contacts"
      :key="contact"
      class="flex items-center gap-3 pl-7 py-2 text-base_true_gray cursor-pointer"
    >
      <UIcon
        v-if="contact.charAt(0) == '+'"
        name="ri:phone-fill"
        class="w-5 h-5"
      />
      <UIcon v-else name="ri:mail-fill" class="w-5 h-5" />
      <p>{{ contact }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SelectInfoType } from "~/interfaces";
import { useCommonStore } from "~/store/commonStore";

defineProps<{ infoData: SelectInfoType }>();
const emit = defineEmits<{
  (event: "onSelectFile", file: string): void;
  (event: "onSelectSection", section: string): void;
}>();

const commonStore = useCommonStore();

const isOpen = reactive({
  sections: {
    personal: false,
    professional: false,
    contacts: false,
  },
  folders: {
    bio: false,
    interests: false,
    education: false,
    resume: false,
  },
});
const selectedFileTitle = ref<string>("bio");
const selectedSectionTitle = ref<string>("personal");

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
const updateFileModel = (
  event: Event,
  title: string,
  model: "file" | "section"
): void => {
  if (model == "file") {
    event.stopPropagation();
    selectedFileTitle.value = title;
    emit("onSelectFile", selectedFileTitle.value);
  } else {
    selectedSectionTitle.value = title;
    selectedFileTitle.value = "";
    emit("onSelectSection", selectedSectionTitle.value);
    emit("onSelectFile", selectedFileTitle.value);
  }
};
</script>
