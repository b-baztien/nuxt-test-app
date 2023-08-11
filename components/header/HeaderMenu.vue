<template>
  <div
    class="flex justify-center w-full bg-black bg-opacity-30 drop-shadow-xl backdrop-blur-sm ease-in-out scroll-margin-3 duration-50"
  >
    <div
      class="flex w-full items-center justify-between px-10 py-3 sm:max-w-lg md:max-w-5xl"
    >
      <div id="logo" class="flex cursor-pointer items-center justify-end">
        <img class="h-[2.5rem]" alt="" src="/logo.svg" />
      </div>
      <div class="flex w-2/3 justify-end gap-x-1 md:w-2/3 md:gap-x-3">
        <div
          class="flex w-auto cursor-pointer items-center gap-x-0.5 font-normal duration-150 md:gap-x-3 text-[9px] text-white hover:text-teal-300 md:text-xs"
        >
          <font-awesome-icon :icon="['fas', 'user-plus']" />
          <a id="login" href="#">เข้าสู่ระบบ</a>
        </div>
        <div class="my-[2px] h-auto border-l-2 border-white md:my-[8px]"></div>
        <div
          class="flex w-auto cursor-pointer items-center gap-x-0.5 font-normal duration-150 md:gap-x-3 text-[9px] text-white hover:text-teal-300 md:text-xs"
        >
          <font-awesome-icon :icon="['fas', 'lock']" />
          <a id="register" href="#">สมัครสมาชิก</a>
        </div>
        <button
          id="btn-flag"
          class="item-center flex cursor-pointer justify-center hidden sm:block"
        >
          <img class="h-[2rem]" src="/flag-th.svg" />
        </button>
      </div>
    </div>
  </div>
</template>
