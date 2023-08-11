<script setup lang="ts">
defineProps({
  imagePath: {
    type: String,
  },
  title: {
    type: String,
  },
  cardType: {
    type: String,
    default: "circle",
  },
});
</script>

<template>
  <div class="flex flex-col items-center z-50 justify-center">
    <div class="flex flex-col gap-y-3">
      <div
        :class="`mt-4 ${
          cardType === 'square' ? 'rounded-md' : 'rounded-full'
        } border-[4px] md:border-[7px] bg-cover bg-center bg-no-repeat w-16 h-16 md:w-32 md:h-${
          cardType === 'square' ? '36' : '32'
        } border-[#cecee9]`"
        :style="`background-image: url('${imagePath}')`"
      ></div>
      <div class="mt-4 flex w-full items-center justify-center">
        <div
          class="w-auto max-w-[70px] md:max-w-[120px] truncate text-white rounded-xl px-2 py-1 bg-[#cecee9]"
        >
          <span
            class="px-2 text-xs font-medium uppercase text-white md:text-xs"
          >
            {{ title }}
          </span>
        </div>
      </div>
      <div class="relative -mt-[6rem] flex w-full items-center justify-center">
        <div
          class="flex w-auto items-center justify-end bg-[#cecee9] rounded-full p-1"
        >
          <div
            class="flex w-auto items-center justify-end bg-[#aaaace] rounded-full px-2"
          >
            <span class="font-bold text-[#e6e7ef]"> 2 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
