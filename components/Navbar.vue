<template>
  <v-app-bar app dense class="navbar">
    <v-toolbar-title class="logo-container">
      <img src="/assets/images/logo.png" alt="Logo" class="logo">
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="menu">
      <v-btn @click="scrollToSection('chatbot')">Chatbot</v-btn>
      <v-btn @click="scrollToSection('instructions')">Instructions</v-btn>
      <v-btn @click="scrollToSection('about')">About Us</v-btn>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
}

.logo-container {
  padding: 10px 20px;
}

.logo {
  height: 40px;
  width: auto;
}

.menu {
  display: flex;
  gap: 10px;
  padding-right: 20px;
}
</style>