<template>
  <div class="flex flex-col">
    <label :for="name" class="text-base_true_gray text-base mb-1">
        {{ label }}:
    </label>
    <input
      :id="id"
      :value="modelValue"
      @input="handleInput(($event.target as HTMLInputElement).value)"
      type="text"
      class="border border-lines bg-transparent w-full py-2 rounded-md focus:outline-none focus:ring-0 focus:shadow-md focus:shadow-base_true_gray/30 text-base_true_gray px-4"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  id: { type: String, required: true },
  modelValue: { type: String, required: true },
});

const emits = defineEmits(["update:modelValue"]);
const handleInput = (value: string) => {
  emits("update:modelValue", value);
};
</script>
