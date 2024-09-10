export type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export type ThreadMessage = Message & {
  role: 'user' | 'assistant';
  isNewMessage: boolean;
};
