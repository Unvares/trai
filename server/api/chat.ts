import OpenAI from 'openai';
import { readBody } from 'h3';
import type { Message } from '@/types/Messages';

const client = new OpenAI({
  apiKey: process.env.API_KEY,
});

export default defineEventHandler(async (event) => {
  try {
    console.info('Received request at /api/chat. Processing started.');
    console.info('Parsing request body');
    const requestMessages: Message[] = await readBody(event);

    if (requestMessages.length === 0) {
      throw new Error('No messages were provided');
    }
    console.info('Request body successfully parsed');

    console.info('Fetching response from OpenAI');
    const responseMessage = await fetchResponse(requestMessages);
    console.info('Response successfully fetched. Returning...');

    return responseMessage;
  } catch (error) {
    console.error('Error encountered. Aborting execution...');
    console.error('Error details: ' + error);
    event.node.res.statusCode = 500;
    return { error };
  } finally {
    // Log a newline to visually separate this
    // request from subsequent requests in the logs.
    console.log();
  }
});

async function fetchResponse(requestMessages: Message[]): Promise<Message> {
  console.info('Invoking OpenAI API with provided messages');
  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: requestMessages,
  });

  if (response.choices) {
    console.info('OpenAI API response received');
    return response.choices[0].message as Message;
  } else {
    console.error('OpenAI API did not return any choices');
    throw new Error('AI could not send a response.');
  }
}
