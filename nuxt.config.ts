import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
  ],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    apiKey: process.env.API_KEY
  }
});
