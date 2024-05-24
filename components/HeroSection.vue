<template>
  <div class="hero" id="home">
    <div class="title">
      <h1>TRAI</h1>
      <h2>Promoting Smart Recycling Habits</h2>
      <v-btn
        class="button"
        prepend-icon="mdi-message-arrow-right"
        size="large"
        color="amber"
        elevation="4"
      >
        Start Chatbot
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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

  &::after {
    pointer-events: none;
    position: absolute;
    content: "";
    width: 100%;
    height: 60vh;
    max-height: 650px;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
  }
}

.title {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  top: 25%;
  padding: 0 20px;
}

h1,
h2 {
  text-align: center;
}

.button {
  margin-top: 10px;
}
</style>
