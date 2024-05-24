<template>
  <v-container class="chatbot-section" id="chatbot">
    <v-card class="chatbot-frame">
      <v-card-text class="chatbot">
        <v-list>
          <v-list-item v-for="(message, index) in messages" :key="index" class="chat-message">
            <v-list-item-content>
              <v-list-item-title class="message-bubble">
                <strong>{{ message.role }}:</strong> {{ message.content }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions class="chatbot-input">
        <v-text-field
          v-model="newMessageText"
          placeholder="Type a message"
          @keyup.enter="sendMessage"
          outlined
          dense
          class="chatbot-input-field"
        ></v-text-field>
        <v-btn @click="sendMessage" color="primary" class="chatbot-enter-button">Enter</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn v-if="showHint" class="scroll-hint" @click="scrollDown" icon>
      <v-icon>mdi-chevron-down</v-icon> 
      Scroll to Learn More
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useChatbotStore } from '../stores/chatbotStore';
import type { Message } from '../stores/types';
import axios from 'axios';

const store = useChatbotStore();
const messages = store.messages;
const newMessageText = ref('');
const showHint = ref(true);

const sendMessage = async () => {
  if (newMessageText.value.trim()) {
    const newMessage: Message = {
      content: newMessageText.value,
      role: "user",
    };
    store.addMessage(newMessage);
    newMessageText.value = '';
    try {
      const response = await axios.post('/api/AiHandler', [newMessage]);
      store.addMessage({
        role: 'system',
        content: response.data.content || 'No response from AI.',
      });
    } catch (error) {
      console.error('Error communicating with AI:', error);
      store.addMessage({
        role: 'system',
        content: 'Failed to connect to AI.',
      });
    }
  }
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

<style scoped lang="scss">
.chatbot-section {
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 100px); /* Adjusted height */
  position: relative;
  overflow: visible;
  box-sizing: border-box; /* Include padding and border in width and height */
  background:  #87CEEB;
  border-radius: 10px;
}


.chatbot-frame {
  width: 80%;
  height: 70%; 
  border: 1px solid #ccc;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  z-index: 1;
}

.chatbot {
  flex-grow: 1;
  overflow-y: auto;
}

.chatbot-input {
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 10px;
  height : 20px;
}

.chatbot-input-field {
  flex-grow: 1;
}

.chatbot-enter-button {
  margin-left: 10px;
}

.message-bubble {
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
  word-wrap: break-word; /* Ensures words are wrapped correctly */
  white-space: pre-wrap; /* Maintains whitespace and line breaks */
  overflow-wrap: break-word; /* Breaks long words at the boundary */
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
  animation: bounce 2s infinite;
  width: 24%;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
