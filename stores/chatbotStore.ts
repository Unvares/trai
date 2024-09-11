import { defineStore } from 'pinia';
import type { Message, ThreadMessage } from '@/types/Messages';
import type { ChatHistory } from '@/types/ChatHistory';

export const useChatbotStore = defineStore('chatbot', {
  state: () => ({
    messages: [
      {
        content:
          'Welcome to your campus recycling assistant! 🌍 Have questions about waste sorting or recycling? I’m here to make it easy. Let’s work together to keep our university clean and sustainable. ♻️ Ask away!',
        role: 'assistant',
      },
    ] as unknown as ChatHistory,
    chatHasStarted: false,
  }),
  actions: {
    addMessage(message: Message | ThreadMessage) {
      this.messages.push(message);
    },
  },
});
