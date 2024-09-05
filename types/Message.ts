export type Message = {
  role: 'user' | 'assistant';
  content: string;
  isNewMessage: boolean;
};
