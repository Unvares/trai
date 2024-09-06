import { defineStore } from 'pinia';
import type { Message, ThreadMessage } from '@/types/Messages';
import type { ChatHistory } from '@/types/ChatHistory';
import preprompt from '@/assets/preprompt';

export const useChatbotStore = defineStore('chatbot', {
  state: () => ({
    messages: [preprompt] as unknown as ChatHistory,
  }),
  actions: {
    addMessage(message: Message | ThreadMessage) {
      this.messages.push(message);
    },
  },
});
