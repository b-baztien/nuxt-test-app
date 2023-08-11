<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex w-full justify-between">
    <div class="flex w-full justify-start">
      <h2 class="text-lg md:text-xl">{{ title }}</h2>
    </div>
    <div v-if="link" class="flex w-full justify-end">
      <button
        type="button"
        class="flex justify-center rounded-2xl px-6 py-2 text-white duration-300 ease-in-out hover:bg-white border border-teal-600 bg-teal-600 hover:text-teal-600"
      >
        <span class="text-xs">ดูเพิ่มเติม</span>
      </button>
    </div>
  </div>
</template>
