<template>
  <div class="flex relative h-screen w-full flex-col">
    <header class="w-full fixed top-0 z-50">
      <slot name="header"></slot>
    </header>
    <main class="h-auto w-full">
      <slot></slot>
    </main>
    <footer class="bg-[#1E1E1E]">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
