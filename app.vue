<template>
  <v-app>
    <div class="container">
      <Navbar />
      <HeroSection />
      <Instructions />
      <AboutUs />
      <ContactUs />
    </div>
  </v-app>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}

h1 {
  font-size: 72px;
}

h2 {
  font-size: 36px;
}
</style>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6b8e23;
  background-image: url("assets/images/line-in-motion.svg");
  background-repeat: repeat;
}
</style>
