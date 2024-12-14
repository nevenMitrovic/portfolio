<template>
  <div class="bg-base_true_black p-4 text-white">
    <div
      class="bg-portfolio-primary-50 border border-lines rounded-md min-h-screen flex flex-col"
      style="min-height: calc(100vh - 2rem)"
    >
      <Header />
      <main class="flex-grow">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/Common/Header.vue";
import Footer from "~/components/Common/Footer.vue";
</script>
