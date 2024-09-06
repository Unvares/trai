import OpenAI from 'openai';
import { readBody } from 'h3';
import type { Message } from '@/types/Messages';

const client = new OpenAI({
  apiKey: process.env.API_KEY,
});

export default defineEventHandler(async (event) => {
  try {
    const requestMessages: Message[] = await readBody(event);
    const responseMessage = await fetchResponse(requestMessages);
    return responseMessage;
  } catch (error) {
    event.node.res.statusCode = 500;
    return { error: 'Failed to fetch response from OpenAI' };
  }
});

async function fetchResponse(requestMessages: Message[]): Promise<Message> {
  const response = await client.chat.completions.create({
    model: 'gpt-3.5-turbo-1106',
    messages: requestMessages,
  });

  if (response.choices) {
    return response.choices[0].message as Message;
  } else {
    throw new Error('AI could not send a response.');
  }
}
