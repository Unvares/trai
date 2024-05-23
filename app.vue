<template>
  <v-app>
    <div class="container">
      <Navbar />
      <Chatbot />
      <Instructions />
      <AboutUs />
      <ContactUs />
    </div>
  </v-app>
</template>

<style lang="scss">
*, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Arial', sans-serif;
}
</style>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6B8E23;
}

</style>