type ChatHistory = [Message];

type Message = {
    role: "function" | "system" | "user" | "assistant" ;
    content: string;
}

export type {ChatHistory, Message};
