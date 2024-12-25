<template>
  <div v-if="commonStore.isTablet" class="bg-portfolio-primary-50 pb-10">
    <div class="py-5 px-7 text-sm">_contact-me</div>
    <FindMe />
    <Form />
  </div>
  <div v-else class="flex bg-portfolio-primary-50 h-[84vh]">
    
  </div>
</template>

<script setup lang="ts">
import FindMe from "~/components/ContactPage/FindMe.vue";
import Form from "~/components/ContactPage/Form.vue";
import { useCommonStore } from "~/store/commonStore";

const commonStore = useCommonStore();
</script>
