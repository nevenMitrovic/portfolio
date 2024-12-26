<template>
  <div class="flex items-center gap-6">
    <input
      type="checkbox"
      :id="id"
      :checked="modelValue"
      class="appearance-none border border-lines rounded w-5 h-5 checked:bg-base_true_gray focus:ring-0 checked:before:content-['✔'] checked:before:text-white checked:before:block checked:before:text-center"
      @change="handleCheck"
    />
    <label
      :for="id"
      class="flex items-center gap-2 text-base_true_gray text-base md:text-sm xl:text-base"
    >
      <UIcon :name="icon" class="w-5 h-5" />
      <div class="text-base_true_white">{{ id }}</div>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const handleCheck = (event: Event) => {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit("update:modelValue", target.checked);
  }
};
</script>
