<template>
  <div class="container">
    <Navbar />
    <NuxtPage />
    <ContactUs />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
import ContactUs from '~/components/ContactUs.vue';
</script>


<style lang="css">
body {
  margin: 0;
  font-family: Arial, sans-serif;

  .whatever {
    
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.chatbot-section {
  width: 60%;
  border: 1px solid #ccc;
  margin: 20px 0;
  padding: 20px;
  background-image: url('/assets/images/background.jpg');
  background-size: cover;
  position: relative;
}

.chatbot {
  background: white;
  padding: 20px;
  border-radius: 10px;
  overflow-y: auto;
  max-height: 500px;
}

.scroll-hint {
  position: fixed;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.instructions-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.instructions-images {
  display: flex;
  flex-direction: column;
}

.instructions-images img {
  margin: 10px;
  width: 100px;
  height: 100px;
}

.instructions-text {
  margin-left: 20px;
}

.about-section {
  text-align: center;
  margin: 20px 0;
}

.about-section img {
  width: 200px;
  height: 200px;
}

.about-section .text {
  margin-top: 20px;
}

.contact-us {
  background: #f0f0f0;
  padding: 20px;
  width: 100%;
  text-align: center;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #333;
  color: white;
}

.navbar .logo img {
  width: 50px;
}

.navbar .menu {
  display: flex;
  gap: 20px;
}

.navbar .menu a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

</style>