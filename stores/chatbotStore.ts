import { defineStore } from 'pinia';
import type { Message } from './types';

export const useChatbotStore = defineStore('chatbot', {
  state: () => ({
    messages: [] as Message[],
  }),
  actions: {
    addMessage(message: Message) {
      this.messages.push(message);
    },
  },
});
