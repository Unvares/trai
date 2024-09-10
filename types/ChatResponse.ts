import type { Message } from './Messages';

export type ChatResponse = {
  threadId?: string;
  message?: Message;
  error?: string;
};
