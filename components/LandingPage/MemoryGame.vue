<template>
  <div class="border border-lines rounded-lg p-8 bg-portfolio-primary-100">
    <div class="relative flex flex-col items-center justify-center rounded-sm">
      <h1 class="text-3xl font-bold mb-6">memory-game</h1>
      <div v-if="!endGame" class="grid grid-cols-4 gap-2">
        <button
          v-for="(card, index) in cards"
          :key="index"
          @click="play(index)"
          class="w-[54px] h-[54px] p-4 border border-lines bg-inherit flex items-center justify-center text-base_true_white text-xs rounded-md"
        >
          <UIcon v-if="card != ''" :name="card" class="w-5 h-5" />
          <p v-else class="flex items-center justify-center">card</p>
        </button>
      </div>
      <div v-else>END GAME</div>
      <button class="mt-6 bg-[#1C2B3A] rounded-md py-2 px-3">Reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface StorageItemType {
  icon: string;
  value: number;
}
const storage = computed<StorageItemType[]>(() => [
  { icon: "ri:apple-fill", value: 0 },
  { icon: "ri:amazon-fill", value: 0 },
  { icon: "ri:google-fill", value: 0 },
  { icon: "ri:android-fill", value: 0 },
  { icon: "ri:discord-line", value: 0 },
  { icon: "ri:javascript-fill", value: 0 },
]);
const cards = ref<string[]>(Array(12).fill(""));
const endGame = ref<boolean>(false);

const play = (index: number): void => {
  while (true) {
    if (!checkItemsValue()) endGame.value = true;

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if (storage.value[randomNumber].value == 2) continue;

    storage.value[randomNumber].value++;
    cards.value[index] = storage.value[randomNumber].icon;
    break;
  }
};
const checkItemsValue = (): boolean => {
  return storage.value.some((item) => item.value < 2);
};
</script>
