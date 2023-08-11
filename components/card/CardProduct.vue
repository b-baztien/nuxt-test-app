<script setup lang="ts">
defineProps({
  imagePath: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="w-auto">
    <div class="flex w-full flex-col items-center justify-center gap-y-1">
      <div
        class="group relative min-h-[13rem] w-full min-w-full rounded-lg bg-cover bg-center bg-no-repeat"
        :style="`background-image: url('${imagePath}')`"
      >
        <div
          class="absolute -right-[60%] -top-[5rem] flex min-h-[13rem] min-w-full transform items-center rounded-lg opacity-100 transition duration-300 ease-in-out group-hover:bg-opacity-0 group-hover:opacity-0"
        >
          <div
            class="mx-2 rounded-2xl px-2 text-xs font-light text-white bg-teal-400"
          >
            NEW
          </div>
        </div>
        <div
          class="absolute left-1/2 top-1/2 flex min-h-[13rem] min-w-full -translate-x-1/2 -translate-y-1/2 transform items-center rounded-lg bg-black opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50 group-hover:opacity-100"
        >
          <div class="flex h-full w-full items-center justify-center">
            <NuxtLink :to="link" class="n-link-base">
              <button
                type="button"
                class="item-center flex cursor-pointer justify-center rounded-2xl px-6 py-2 font-medium text-white transition duration-300 ease-in-out hover:bg-white border border-teal-600 bg-teal-600 hover:text-teal-700"
              >
                <span class="text-xs">ดูเพิ่มเติม</span>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div id="card-title-1" class="max-w-[7.5rem] truncate">
        <span class="uppercase text-sm font-light text-gray-800">
          {{ title }}
        </span>
      </div>
    </div>
  </div>
</template>
