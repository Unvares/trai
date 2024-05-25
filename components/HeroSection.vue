<template>
  <div class="hero" id="home">
    <Chatbot v-if="chatHasStarted" />
    <div class="content" v-if="!chatHasStarted">
      <h1 class="title">
        <div ref="logo" class="logo" />
        <span>TRAI</span>
      </h1>
      <h2>Promoting Smart Recycling Habits</h2>
      <v-btn
        class="button"
        prepend-icon="mdi-message-arrow-right"
        size="large"
        color="amber"
        elevation="4"
        @click="startChat"
      >
        Start Chatbot
      </v-btn>
    </div>
    <v-btn v-if="showHint" class="scroll-hint" @click="scrollDown" icon>
      <v-icon icon="mdi-chevron-down" size="large" />
      Scroll to Learn More
    </v-btn>
  </div>
</template>

<script setup lang="ts">
const chatHasStarted = ref(false);
const startChat = () => {
  chatHasStarted.value = true;
};

const showHint = ref(true);

const scrollDown = () => {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  showHint.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      showHint.value = false;
    }
  });
});

import logoData from "assets/images/logo.min.json";
const logo = ref();
onMounted(() => useLogoAnimation(logo, logoData));
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  max-height: 1080px;
  background-image: url("assets/images/forest_and_skies.svg");
}

.content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 20px;
  z-index: 1;
}

.title {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.logo {
  $logo_size: 80px;
  width: $logo_size;
  height: $logo_size;
}

h1,
h2 {
  text-align: center;
}

.button {
  margin-top: 10px;
}

.scroll-hint {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  animation: bounce 2s infinite;
  width: 20%;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
