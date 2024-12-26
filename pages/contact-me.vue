<template>
  <div v-if="commonStore.isTablet" class="bg-portfolio-primary-50 pb-10">
    <div class="py-5 px-7 text-sm">_contact-me</div>
    <FindMe />
    <Form />
  </div>
  <!-- DESKTOP VERSION -->
  <div v-else class="flex bg-portfolio-primary-50 h-screen">
    <div
      class="border-r border-lines w-2/12 md:w-[230px] xl:w-2/12 h-full overflow-y-auto"
    >
      <FindMe />
    </div>
    <div
      class="w-5/12 border-r border-lines h-full overflow-y-auto text-base text-base_true_gray"
    >
      <div class="h-[41px] md:h-[37px] xl:h-[41px] border-b border-lines">
        <div
          class="flex justify-between items-center px-6 md:px-3 xl:px-6 border-r border-lines h-full w-1/3 md:w-[200px] xl:w-1/3"
        >
          contacts
          <button @click="resetForm" class="flex items-center justify-center">
            <UIcon name="ri:close-fill" class="w-4 h-4 text-base_true_gray" />
          </button>
        </div>
      </div>
      <div class="px-10 md:px-5 lg:px-7 xl:px-10 py-5">
        <Form ref="formRefs" />
      </div>
    </div>
    <div class="w-5/12 h-full overflow-y-auto">
      <div class="h-[41px] md:h-[37px] xl:h-[41px] border-b border-lines"></div>
      <div class="px-10 md:px-5 lg:px-7 xl:px-10 py-5">
        <CodeSnippet :snippet-data="formExample" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FindMe from "~/components/ContactPage/FindMe.vue";
import Form from "~/components/ContactPage/Form.vue";
import CodeSnippet from "~/components/AboutPage/CodeSnippet.vue";
import { formExample } from "~/data";
import { useCommonStore } from "~/store/commonStore";

const commonStore = useCommonStore();

const formRefs = ref<InstanceType<typeof Form> | null>(null);

const resetForm = (): void => {
  formRefs.value?.resetForm(true);
};
</script>
