<template>
  <div class="w-full flex justify-center bg-[#1E1E1E] py-1">
    <div
      class="sm:max-w-lg md:max-w-5xl flex w-full items-center justify-between px-10 py-1"
    >
      <div class="flex w-full justify-start gap-x-3">
        <div class="flex w-auto items-center gap-x-2">
          <font-awesome-icon
            class="text-blue-500"
            :icon="['fab', 'square-facebook']"
          />
          <span class="text-xs font-normal text-white md:text-xs">
            เวลาทำการ 10.00-22.00 น.
          </span>
        </div>
      </div>
      <div class="flex w-full justify-end gap-x-3">
        <div class="flex w-auto items-center gap-x-2">
          <font-awesome-icon class="text-green-500" :icon="['fab', 'line']" />
          <span class="text-xs font-normal text-white md:text-xs">
            @Term711
          </span>
        </div>
        <div class="flex w-auto items-center gap-x-2">
          <font-awesome-icon
            class="text-green-500"
            :icon="['fas', 'square-phone']"
          />
          <span class="text-xs font-normal text-white md:text-xs"
            >0683951232</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
