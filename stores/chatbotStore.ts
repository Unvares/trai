import { defineStore } from 'pinia';
import type { ChatMessage } from './types';  // Assuming you moved the ChatMessage type to a separate types.ts file

export const useChatbotStore = defineStore('chatbot', {
  state: () => ({
    messages: [] as ChatMessage[],  // Define messages as an array of ChatMessage
  }),
  actions: {
    addMessage(message: ChatMessage) {
      this.messages.push(message);
    },
  },
});