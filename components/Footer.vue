<template>
  <footer class="border-t border-lines flex justify-between items-center">
    <div class="p-4 text-base text-base_true_gray">
      <p>{{ footerData.title }}</p>
    </div>
    <div class="flex items-center justify-center">
      <div
        v-for="(item, index) in footerData.social"
        :key="index"
        class="flex items-center justify-center text-base_true_gray hover:text-white border-l border-lines"
      >
        <NuxtLink
          :to="item.path"
          class="p-3 flex items-center justify-center"
          target="_blank"
        >
          <UIcon :name="item.icon" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerData } from "~/data";
</script>
