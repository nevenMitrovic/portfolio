<template>
  <div class="border border-lines rounded-lg p-8 bg-portfolio-primary-100">
    <div class="relative flex flex-col items-center justify-center rounded-sm">
      <h1 class="text-3xl font-bold mb-6">memory-game</h1>
      <div v-if="!endGame" class="grid grid-cols-4 gap-2">
        <button
          v-for="(card, index) in cardsStorage"
          :key="index"
          @click="play(index)"
          :disabled="loading"
          :class="loading && 'cursor-wait'"
          class="w-[54px] h-[54px] p-4 border border-lines bg-inherit flex items-center justify-center text-base_true_white text-xs rounded-md"
        >
          <UIcon v-if="card.show" :name="card.icon" class="w-5 h-5" />
          <p v-else class="flex items-center justify-center">card</p>
        </button>
      </div>
      <div v-else>END GAME</div>
      <button @click="resetGame" class="mt-6 bg-[#1C2B3A] rounded-md py-2 px-3">
        Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CardType {
  icon: string;
  show: boolean;
}
const storage = ref<string[]>([
  "ri:apple-fill",
  "ri:amazon-fill",
  "ri:google-fill",
  "ri:android-fill",
  "ri:discord-line",
  "ri:javascript-fill",
]);
const cardsStorage = ref<CardType[]>(
  Array(12)
    .fill(null)
    .map(() => ({ icon: "", show: false }))
);
const lastPickedCardIndex = ref<number | null>(null);
const endGame = ref<boolean>(false);
const loading = ref<boolean>(false);

const play = (index: number): void => {
  if (!cardsStorage.value[index].show) {
    loading.value = true;

    if (!lastPickedCardIndex.value) {
      const randomNumber = Math.floor(Math.random() * 6);
      cardsStorage.value[index].icon = storage.value[randomNumber];
      cardsStorage.value[index].show = true;
      lastPickedCardIndex.value = index;
      loading.value = false;
      return;
    }

    const randomNumber = Math.floor(Math.random() * 6);
    cardsStorage.value[index].icon = storage.value[randomNumber];
    cardsStorage.value[index].show = true;

    if (
      cardsStorage.value[index].icon !==
      cardsStorage.value[lastPickedCardIndex.value].icon
    ) {
      setTimeout(() => {
        cardsStorage.value[index].show = false;
        if (lastPickedCardIndex.value !== null) {
          cardsStorage.value[lastPickedCardIndex.value].show = false;
        }
        lastPickedCardIndex.value = null;
        loading.value = false;
      }, 300);
    } else {
      storage.value.splice(index, 1);
      lastPickedCardIndex.value = null;
      loading.value = false;
    }
    if (!cardsStorage.value.some((card) => !card.show)) {
      endGame.value = true;
    }
  }
};

const resetGame = (): void => {
  cardsStorage.value = Array(12)
    .fill(null)
    .map(() => ({ icon: "", show: false }));
  lastPickedCardIndex.value = null;
  loading.value = false;
};
</script>
