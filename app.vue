<template>
  <v-app>
    <div class="container">
      <HeroSection />
      <Header v-if="!(chatHasStarted && smAndDown)" />
      <Instructions v-if="!(chatHasStarted && smAndDown)" />
      <AboutUs v-if="!(chatHasStarted && smAndDown)" />
      <Footer v-if="!(chatHasStarted && smAndDown)" />
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { useChatbotStore } from '@/stores/chatbotStore';
import { useDisplay } from 'vuetify';

const store = useChatbotStore();
const chatHasStarted = computed(() => store.chatHasStarted);

const { smAndDown } = useDisplay();
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Questrial', sans-serif;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Avenir Light', sans-serif;
}

h1 {
  font-size: 72px;
}

@media (max-width: 960px) {
  h1 {
    font-size: 56px;
  }
}

h2 {
  font-size: 36px;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
