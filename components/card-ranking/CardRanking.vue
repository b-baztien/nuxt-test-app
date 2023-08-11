<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  cardType: {
    type: String,
    required: true,
    default: "circle",
  },
});
</script>

<template>
  <div
    class="flex w-full min-w-full flex-col items-center justify-center gap-y-1"
  >
    <div class="group relative max-h-[45vh] min-h-[45vh] w-full min-w-full">
      <div
        class="flex h-full max-h-[45vh] min-h-[45vh] w-full flex-col items-center justify-center gap-y-1 rounded-xl bg-cover bg-center bg-no-repeat shadow-lg drop-shadow-md transition-opacity duration-700 ease-in-out"
        :style="`background-image: url('/ranking-bg.jpg')`"
      >
        <div class="absolute left-5 top-5 w-full items-start justify-start">
          <h2 class="text-lg font-medium md:text-xl text-teal-700">
            {{ title }}
          </h2>
        </div>
        <div
          class="mt-[5rem] flex w-full items-center justify-center gap-x-2 p-4"
        >
          <CardRankingB
            v-if="products?.[1]"
            :imagePath="products?.[1].imagePath"
            :title="products?.[1].title"
            :cardType="cardType"
          />
          <CardRankingA
            v-if="products?.[0]"
            :imagePath="products?.[0].imagePath"
            :title="products?.[0].title"
            :cardType="cardType"
          />
          <CardRankingC
            v-if="products?.[2]"
            :imagePath="products?.[2].imagePath"
            :title="products?.[2].title"
            :cardType="cardType"
          />
        </div>
      </div>
      <div
        class="absolute top-1/2 flex max-h-[45vh] min-h-[45vh] w-full -translate-y-1/2 transform items-center rounded-lg border border-teal-500 bg-teal-50 opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50 group-hover:opacity-100"
      >
        <div class="absolute flex h-full w-full items-start justify-end p-4">
          <NuxtLink :to="link" class="n-link-base">
            <button
              id="link-ranking-topup-game"
              type="button"
              class="item-center flex cursor-pointer justify-center rounded-2xl px-6 py-2 font-medium text-white transition duration-300 ease-in-out hover:bg-white border border-teal-600 bg-teal-600 hover:text-teal-700"
            >
              <span class="text-xs">ดูเพิ่มเติม</span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
