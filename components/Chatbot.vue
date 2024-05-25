<template>
  <div class="chatbot">
    <div class="messages">
      <MessageBubble
        v-for="(message, index) in messages"
        :key="index"
        :class="[
          'message',
          message.role === 'user' ? 'user-message' : 'system-message',
        ]"
      >
        {{ message.content }}
      </MessageBubble>
    </div>
    <div class="input-form">
      <v-textarea
        v-model="newMessageText"
        label="Message"
        @keydown.enter="sendMessage"
        variant="solo"
        class="input-field"
        rows="1"
        auto-grow
        rounded="lg"
      />
      <v-icon
        icon="mdi-send-variant"
        @click="sendMessage"
        color="primary"
        class="submit-button"
        size="x-large"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useChatbotStore } from "../stores/chatbotStore";
import type { Message } from "../stores/types";
import axios from "axios";

const store = useChatbotStore();
const messages = store.messages;
const newMessageText = ref("");

const sendMessage = async () => {
  if (newMessageText.value.trim()) {
    const newMessage: Message = {
      content: newMessageText.value,
      role: "user",
    };
    store.addMessage(newMessage);
    newMessageText.value = "";
    try {
      const response = await axios.post("/api/AiHandler", [newMessage]);
      store.addMessage({
        role: "system",
        content: response.data.content || "No response from AI.",
      });
    } catch (error) {
      console.error("Error communicating with AI:", error);
      store.addMessage({
        role: "system",
        content: "Failed to connect to AI.",
      });
    }
  }
};
</script>

<style scoped lang="scss">
.chatbot {
  margin: auto 0;
  padding: 20px 20px 0;
  width: 40%;
  max-width: 1200px;
  height: 70%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.messages {
  display: flex;
  flex-flow: column nowrap;
  overflow-y: auto;
  background: none;
}

.input-form {
  position: relative;
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 10px;
  max-height: 160px;
}

.input-field {
  max-height: 160px;
  overflow-y: auto;
}

.submit-button {
  margin-left: 10px;
  transform: translateY(-11px);
}
</style>
