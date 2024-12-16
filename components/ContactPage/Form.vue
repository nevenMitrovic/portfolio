<template>
  <form class="flex flex-col gap-4 px-7">
    <Input :id="'name'" :name="'name'" v-model="name" :label="'_name'" />
    <Input :id="'email'" :name="'email'" v-model="email" :label="'_email'" />
    <div>
      <label :for="'message'" class="text-base_true_gray text-base block mb-1">
        _message:
      </label>
      <textarea
        name="message"
        :rows="6"
        class="border border-lines bg-transparent w-full rounded-md focus:outline-none focus:ring-0 focus:shadow-md focus:shadow-base_true_gray/30 text-base_true_gray py-2 px-4"
        v-model="message"
      />
    </div>
    <div>
      <button
        type="submit"
        class="bg-[#1C2B3A] rounded-md text-sm text-base_true_white py-2 px-3"
      >
        submit-message
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import Input from "./Input.vue";

const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");
</script>
