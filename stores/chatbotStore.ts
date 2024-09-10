import { defineStore } from 'pinia';
import type { Message, ThreadMessage } from '@/types/Messages';
import type { ChatHistory } from '@/types/ChatHistory';

export const useChatbotStore = defineStore('chatbot', {
  state: () => ({
    messages: [] as unknown as ChatHistory,
  }),
  actions: {
    addMessage(message: Message | ThreadMessage) {
      this.messages.push(message);
    },
  },
});
