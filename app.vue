<template>
  <div class="container">
    <Navbar />
    <Instructions />
    <AboutUs />
    <ContactUs />
  </div>
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
}
</style>