<template>
  <div class="flex flex-col">
    <label :for="name" class="text-base_true_gray text-base mb-1">
      {{ label }}:
    </label>
    <input
      :id="id"
      :value="inputValue"
      :name="name"
      @input="handleChange"
      @blur="handleBlur"
      type="text"
      class="border border-lines bg-transparent w-full py-2 rounded-md focus:outline-none focus:ring-0 focus:shadow-md focus:shadow-base_true_gray/30 text-base_true_gray px-4"
    />
    <p class="help-message pt-2" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  id: { type: String, required: true },
  modelValue: { type: String, required: true },
  successMessage: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);

const name = toRef(props, "name");
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.modelValue,
});
</script>
