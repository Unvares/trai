import { defineNuxtConfig } from 'nuxt/config';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@pinia/nuxt',
  ],
  plugins: ['@/plugins/pageReload.ts'],
  typescript: {
    typeCheck: true,
  },
  runtimeConfig: {
    apiKey: process.env.API_KEY,
    assistantId: process.env.ASSISTANT_ID,
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
