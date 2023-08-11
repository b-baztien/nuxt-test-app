<script setup lang="ts">
defineProps({
  imagePath: {
    type: String,
    default: "#",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="group relative m-1">
    <div
      class="h-full relative cursor-pointer bg-gray-50 p-4 drop-shadow-md group-hover:scale-90 duration-300"
    >
      <div class="flex w-full flex-col items-center justify-center gap-y-3">
        <div class="flex w-auto items-center justify-end">
          <img :alt="title" :src="imagePath" />
        </div>
        <h5 class="text-xs text-teal-600">
          {{ title }}
        </h5>
      </div>
    </div>
  </div>
</template>
