import { defineStore } from 'pinia';
import type { Message } from './types';  // Assuming you moved the ChatMessage type to a separate types.ts file

export const useChatbotStore = defineStore('chatbot', {
  state: () => ({
    messages: [] as Message[],  // Define messages as an array of ChatMessage
  }),
  actions: {
    addMessage(message: Message) {
      this.messages.push(message);
    },
  },
});