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
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="w-full">
    <div class="flex w-full flex-col items-center justify-center gap-y-1">
      <div id="service-save" class="flex w-auto items-center justify-end">
        <img alt="ปลอดภัยหายห่วง" :src="image" />
      </div>
      <h4 class="mt-4 text-xl font-semibold text-gray-800">{{ title }}</h4>
      <span class="text-xs font-normal text-gray-800">
        {{ description }}
      </span>
    </div>
  </div>
</template>
