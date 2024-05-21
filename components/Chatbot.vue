<template>
    <div class="chatbot-section" id="chatbot">
      <div class="chatbot">
        <ul>
          <li v-for="message in messages" :key="message.id">
            <strong>{{ message.sender }}:</strong> {{ message.text }}
          </li>
        </ul>
        <button @click="sendMessage">Send Message</button>
      </div>
      <div class="scroll-hint" v-if="showHint" @click="scrollDown">
        Scroll down to learn more
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useChatbotStore } from '~/stores/chatbotStore';
  import type { ChatMessage } from '~/stores/types';
  
  const store = useChatbotStore();
  const messages = store.messages;
  
  const showHint = ref(true);
  
  const sendMessage = () => {
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      text: 'Hello, this is a new message!',
      sender: 'user',
    };
    store.addMessage(newMessage);
  };
  
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    showHint.value = false;
  };
  
  onMounted(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        showHint.value = false;
      }
    });
  });
  </script>
  