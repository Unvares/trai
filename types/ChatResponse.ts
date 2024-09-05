import type { Message } from './Message';

export type ChatResponse = {
  threadId?: string;
  message?: Message;
  error?: string;
};
