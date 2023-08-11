<script setup lang="ts">
const { imagePath, title } = defineProps({
  imagePath: {
    type: String,
  },
  title: {
    type: String,
  },
});
</script>

<template>
  <div>
    <div class="flex flex-col items-center w-full z-50 justify-start -mt-24">
      <div class="flex flex-col gap-y-3">
        <div
          class="mt-4 rounded-full border-[4px] md:border-[7px] bg-cover bg-center bg-no-repeat w-28 h-28 md:w-40 md:h-40 border-[#ffc50c]"
          :style="`background-image: url('${imagePath}')`"
        ></div>
        <div class="mt-4 flex w-full items-center justify-center">
          <div
            class="w-auto max-w-[70px] md:max-w-[120px] truncate text-white rounded-xl px-2 py-1 bg-[#ffc50c]"
          >
            <span
              class="px-2 text-xs font-medium uppercase text-white md:text-xs"
            >
              {{ title }}
            </span>
          </div>
        </div>
        <div
          class="relative -mt-[6rem] flex w-full items-center justify-center"
        >
          <div
            class="flex w-auto items-center justify-end bg-[#ffc50c] rounded-full p-1"
          >
            <div
              class="flex w-auto items-center justify-end bg-[#f59f0a] rounded-full px-2"
            >
              <span class="font-bold text-[#faf29f]"> 1 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
