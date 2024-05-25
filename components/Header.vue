<template>
  <v-app-bar scroll-behavior="hide" class="navbar">
    <template v-slot:prepend>
      <div
        class="title"
        @click="scrollTo('home')"
        @mouseover="handleTitleHover"
      >
        <div ref="logo" class="logo" />
        <span>TRAI</span>
      </div>
    </template>

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

import logoData from "assets/images/logo.min.json";

const logo = ref();
const logoAnim = ref();
onMounted(() => (logoAnim.value = useLogoAnimation(logo, logoData, false)));

function handleTitleHover(): void {
  logoAnim.value.play();
}
</script>

<style scoped lang="scss">
.navbar {
  padding: 0 10% !important; // redefines bugged padding-inline-end property from Vuetify
}

$logo_size: 40px;

.logo {
  width: $logo_size;
  height: $logo_size;
  margin-right: 10px;
}

.title {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: $logo_size;
  text-transform: none;
}

.list {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
</style>
