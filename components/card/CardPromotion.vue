<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="w-auto">
    <div
      class="flex w-full flex-col items-center justify-center gap-x-2 gap-y-6"
    >
      <div
        class="group relative min-h-[200px] w-full min-w-full rounded-lg bg-cover bg-center bg-no-repeat"
        :style="`background-image: url('${imagePath}');`"
      >
        <div
          class="absolute left-1/2 top-1/2 flex min-h-[200px] min-w-full -translate-x-1/2 -translate-y-1/2 transform items-center rounded-lg bg-black opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50 group-hover:opacity-100"
        >
          <div class="flex h-full w-full items-center justify-center">
            <NuxtLink :to="link">
              <button
                type="button"
                class="item-center flex cursor-pointer justify-center rounded-2xl px-6 py-2 font-medium text-white transition duration-300 ease-in-out hover:bg-white border border-orange-600 bg-orange-600 hover:text-orange-700"
              >
                <span class="text-xs">รับคูปอง</span>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-center justify-start">
        <span class="text-sm font-normal text-gray-800">
          {{ description }}
        </span>
        <div class="flex w-full justify-between text-sm">
          <p class="font-normal text-gray-800">
            By
            <span class="pl-1 font-light capitalize text-teal-500">
              {{ author }}
            </span>
          </p>
          <p class="font-light text-gray-400">
            {{ date }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
