<template>
  <form
    v-if="status === ''"
    @submit.prevent="sendEmail"
    class="flex flex-col gap-4 px-7"
  >
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
        class="flex gap-1 bg-[#1C2B3A] rounded-md text-sm text-base_true_white py-2 px-3"
        :disabled="loading"
      >
        <div
          v-if="loading"
          class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-base_true_gray mr-2"
        ></div>
        <span v-if="!loading">submit-message</span>
        <span v-else>sending...</span>
      </button>
    </div>
  </form>
  <div v-else-if="status === 'success'" class="flex flex-col gap-3 px-7">
    <h2 class="text-base_true_white text-2xl">Thank you! 🤘</h2>
    <p class="text-lg text-base_true_gray pb-2">
      Your message has been accepted. You will recieve answer really soon!
    </p>
    <div class="flex justify-center items-center">
      <button
        type="button"
        class="flex gap-1 bg-[#1C2B3A] rounded-md text-sm text-base_true_white py-2 px-3"
        @click="() => (status = '')"
      >
        send-new-message
      </button>
    </div>
  </div>
  <div v-else="status === 'error'" class="flex flex-col gap-3 px-7">
    <h2 class="text-base_true_white text-2xl">Error</h2>
    <p class="text-lg text-base_true_gray pb-2">Please try again !</p>
    <div class="flex justify-center items-center">
      <button
        type="button"
        class="flex gap-1 bg-[#1C2B3A] rounded-md text-sm text-base_true_white py-2 px-3"
        @click="() => (status = '')"
      >
        send-new-message
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "./Input.vue";
import emailjs from "emailjs-com";

const config = useRuntimeConfig();

const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");
const status = ref<string>("");
const loading = ref<boolean>(false);

const resetForm = (): void => {
  name.value = "";
  email.value = "";
  message.value = "";
};
const sendEmail = async () => {
  if (loading.value) return;
  loading.value = true;

  try {
    const serviceID = config.public.serviceID;
    const templateID = config.public.templateID;
    const userID = config.public.publicID;

    await emailjs.send(
      serviceID,
      templateID,
      {
        from_name: name.value,
        from_email: email.value,
        message: message.value,
      },
      userID
    );

    status.value = "success";
    resetForm();
  } catch (error) {
    console.error(error);
    status.value = "error";
  } finally {
    loading.value = false;
    console.log(status.value);
  }
};
</script>
