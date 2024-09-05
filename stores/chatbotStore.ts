import { defineStore } from 'pinia';
import type { Message } from '@/types/Message';
import type { ChatHistory } from '~/types/ChatHistory';

export const useChatbotStore = defineStore('chatbot', {
  state: () => ({
    messages: [] as unknown as ChatHistory,
  }),
  actions: {
    addMessage(message: Message) {
      this.messages.push(message);
    },
  },
});
