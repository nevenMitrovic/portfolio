<template>
  <div
    class="relative border border-lines rounded-lg p-8 bg-portfolio-primary-100 w-[306px] h-[368px]"
  >
    <div
      class="w-full h-full flex flex-col items-center justify-center rounded-sm"
    >
      <h1 class="text-3xl font-bold mb-6">memory-game</h1>
      <div class="absolute right-3 top-2">{{ time }}</div>
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
      <div v-else class="h-full w-full flex items-center justify-center">
        END GAME
      </div>
      <div class="flex item-center justify-between gap-4">
        <button @click="timer" class="mt-6 bg-[#1C2B3A] rounded-md py-2 px-3">
          {{ endGame ? "restart" : "start" }}
        </button>
        <button
          @click="restartGame"
          class="mt-6 bg-[#1C2B3A] rounded-md py-2 px-3"
        >
          end
        </button>
      </div>
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
const startGame = ref<boolean>(true);
const loading = ref<boolean>(false);
const time = ref<string>("00:00");

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

      const randomIcon =
        availableIcons[Math.floor(Math.random() * availableIcons.length)];
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
const restartGame = (): void => {
  cardsStorage.value = Array(12)
    .fill(null)
    .map(() => ({ icon: "", show: false }));
  lastPickedCardIndex.value = null;
  startGame.value = true;
  endGame.value = true;
  loading.value = false;
};
const timer = (): void => {
  if (startGame.value) {
    startGame.value = false;
    endGame.value = false;
    let sec: number | string = 0;
    let min: number | string = 0;
    const counter = setInterval(() => {
      if (typeof sec === "string") sec = parseInt(sec) + 1;
      if (typeof sec === "number") {
        if (sec > 59) {
          sec = 0;
          if (typeof min === "string") min = parseInt(min) + 1;
          if (typeof min === "number")
            min = min < 10 ? "0" + min : min.toString();
          if (typeof sec === "number")
            sec = sec < 10 ? "0" + sec : sec.toString();
        }
        if (typeof sec === "number")
          sec = sec < 10 ? "0" + sec : sec.toString();
        if (typeof min === "number")
          min = min < 10 ? "0" + min : min.toString();
      }
      time.value = `${min}:${sec}`;
      if (endGame.value) {
        sec = 0;
        min = 0;
        startGame.value = true;
        clearInterval(counter);
        restartGame();
        return;
      }
    }, 1000);
  }
};
</script>
