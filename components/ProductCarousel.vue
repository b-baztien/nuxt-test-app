<script setup lang="ts">
import { CarouselData } from "composables/interfaces/carousel-data";

const { carousels } = defineProps({
  carousels: {
    type: Array as PropType<CarouselData[]>,
    required: true,
  },
});

const copyActionText = ref("click copy code!");

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);

  copyActionText.value = "copied!";

  setTimeout(() => {
    copyActionText.value = "click copy code!";
  }, 1000);
};
</script>

<template>
  <div class="relative w-full">
    <Carousel :autoplay="5000" :wrap-around="true">
      <Slide v-for="(carousel, index) in carousels" :key="index">
        <div
          class="carousel__item mx-auto flex max-h-[65vh] min-h-[65vh] w-full flex-col items-center justify-start bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out relative opacity-100"
          :style="{ backgroundImage: `url(${carousel.productImage})` }"
        >
          <div
            class="backdrop-black-tint inset-0 flex max-h-[65vh] min-h-[65vh] w-full md:text-start items-center bg-black bg-opacity-40 text-white"
          >
            <div
              class="mx-auto flex w-full max-w-6xl flex-col px-16 py-1 sm:max-w-lg md:max-w-3xl lg:max-w-6xl lg:px-36 xl:px-10"
            >
              <h2
                class="text-3xl font-semibold uppercase text-white drop-shadow-md md:text-4xl"
              >
                {{ carousel.productName }}
              </h2>
              <p
                class="mt-2 text-sm font-normal text-white sm:max-w-full md:max-w-lg md:text-base"
              >
                สำหรับเกมเมอร์ทุกค่ายลด 10% สูงสุด 280 บาท
              </p>
              <p
                class="mt-2 text-sm font-normal text-teal-300 sm:max-w-full md:max-w-lg md:text-base"
              >
                01 มิถุนายน - 30 มิถุนายน 2566
              </p>
              <div
                class="group relative z-20 mt-10 flex justify-center lg:justify-start"
              >
                <button
                  @click="copyToClipboard(carousel.productCode)"
                  type="button"
                  class="item-center flex cursor-pointer justify-center rounded-lg px-6 py-2 font-medium bg-teal-500 text-white active:text-teal-500 active:bg-white"
                >
                  ใส่โค้ด {{ carousel.productCode }}
                  <span
                    class="absolute -top-9 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100"
                  >
                    ✨ {{ copyActionText }}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style>
.carousel__item {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.7s ease-in-out;
}

.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover {
  color: white !important;
  width: 6rem !important;
  height: 6rem !important;
  font-size: xxx-large !important;
}
</style>
