<template>
  <div class="relative border border-lines rounded-lg p-8 bg-portfolio-primary-100">
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
const iconsStorage = ref<string[]>([
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

    if (!cardsStorage.value[index].icon) {
      let availableIcons = iconsStorage.value.filter(
        (_, iconIndex) =>
          cardsStorage.value.filter(
            (card) => card.icon === iconsStorage.value[iconIndex]
          ).length < 2
      );

      if (availableIcons.length === 0) {
        loading.value = false;
        return;
      }

      const randomIcon = availableIcons[Math.floor(Math.random() * availableIcons.length)];
      cardsStorage.value[index].icon = randomIcon;
    }

    cardsStorage.value[index].show = true;

    if (lastPickedCardIndex.value === null) {
      lastPickedCardIndex.value = index;
      loading.value = false;
      return;
    }

    if (
      cardsStorage.value[index].icon ===
      cardsStorage.value[lastPickedCardIndex.value].icon
    ) {
      lastPickedCardIndex.value = null;
    } else {
      setTimeout(() => {
        cardsStorage.value[index].show = false;
        if (lastPickedCardIndex.value !== null) {
          cardsStorage.value[lastPickedCardIndex.value].show = false;
        }
        lastPickedCardIndex.value = null;
      }, 300);
    }

    if (!cardsStorage.value.some((card) => !card.show)) {
      setTimeout(() => {
        endGame.value = true;
      }, 300);
    }

    loading.value = false;
  }
};
const resetGame = (): void => {
  cardsStorage.value = Array(12)
    .fill(null)
    .map(() => ({ icon: "", show: false }));
  lastPickedCardIndex.value = null;
  endGame.value = false;
  loading.value = false;
};
</script>
