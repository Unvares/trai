import { defineNuxtPlugin } from "#app";
import Vuetify from "vuetify";
import "vuetify/styles";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { createVuetify } from "vuetify";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    directives,
    components
    
  });
  nuxtApp.vueApp.use(vuetify);
});