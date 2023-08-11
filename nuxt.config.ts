// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "vue3-carousel-nuxt"],
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "vue3-carousel/dist/carousel.css",
  ],
});
