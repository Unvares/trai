<template>
    <div class="navbar">
      <div class="logo">
        <img src="/assets/images/logo.png" alt="Logo">
      </div>
      <div class="menu">
        <a @click="scrollToSection('chatbot')">Chatbot</a>
        <a @click="scrollToSection('instructions')">Instructions</a>
        <a @click="scrollToSection('about')">About Us</a>
      </div>
    </div>
  </template>
  
<script setup>
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  </script>
  