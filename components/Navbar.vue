<template>
  <div class="navbar-container">
    <v-app>
      <v-app-bar class="navbar" :elevation="0"> <!-- Set elevation to 0 to match your design -->
        <v-app-bar-title> TRAI<!-- Place the title -->
          <div class="logo-container">
            <img src="/assets/images/logo.png" alt="Logo" class="logo">
          </div>
        </v-app-bar-title>
        <div class="menu">
          <v-btn @click="scrollToSection('chatbot')">Chatbot</v-btn>
          <v-btn @click="scrollToSection('instructions')">Instructions</v-btn>
          <v-btn @click="scrollToSection('about')">About Us</v-btn>
        </div>
        <!-- Optionally, you can add action items and overflow menu here -->
      </v-app-bar>
    </v-app>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped lang="scss">
.navbar-container {
  position: relative;
  width: 100%;
  top: 0;
  z-index: 1000; /* Ensure the navbar is above other content */
}

.navbar {
  display: relative;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
}

.logo-container {
  flex: 0 0 auto;
  float: left;
}

.logo {
  height: 40px;
  width: auto;
}

.menu {
  display: relative;
  gap: 10px;
  padding-right: 20px;
}
</style>
