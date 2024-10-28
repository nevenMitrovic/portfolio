<template>
  <div
    class="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
  >
    <!-- Course Image -->
    <img
      :src="image"
      alt="Course Image"
      class="rounded-lg w-full h-48 object-cover mb-4"
    />

    <!-- Course Date -->
    <p class="text-gray-500 text-sm mb-2">{{ date }}</p>

    <!-- Course Title -->
    <h3
      class="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-500 transition duration-200"
    >
      {{ title }}
    </h3>

    <!-- Course Category Badge -->
    <span
      class="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full"
    >
      {{ category }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
</script>
