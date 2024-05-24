<template>
  <v-app-bar scroll-behavior="hide" class="navbar">
    <template v-slot:prepend>
      <img src="/assets/images/logo.png" alt="Logo" class="logo" />
    </template>

    <v-app-bar-title>TRAI</v-app-bar-title>

    <template v-slot:append>
      <v-app-bar-nav-icon
        v-if="xs"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div v-else>
        <v-btn variant="plain" @click="scrollTo('home')">Home</v-btn>
        <v-btn variant="plain" @click="scrollTo('instructions')"
          >Instructions</v-btn
        >
        <v-btn variant="plain" @click="scrollTo('about')">About Us</v-btn>
      </div>
    </template>
  </v-app-bar>
  <v-navigation-drawer temporary v-model="drawer" location="top">
    <v-list class="list">
      <v-list-item @click="scrollTo('home')">Home</v-list-item>
      <v-list-item @click="scrollTo('instructions')">Instructions</v-list-item>
      <v-list-item @click="scrollTo('about')">About Us</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
const { xs } = useDisplay();

const drawer = ref(false);

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    drawer.value = false;
  }
};
</script>

<style scoped lang="scss">
.navbar {
  padding: 0 10px;
}

.logo {
  height: 40px;
}

.list {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
</style>
