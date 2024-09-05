import OpenAI from 'openai';
import type { TextContentBlock } from 'openai/resources/beta/threads/messages';
import type { ThreadCreateParams } from 'openai/resources/beta/threads/threads';
import type { Message } from '~/types/Message';

const client = new OpenAI({
  apiKey: process.env.API_KEY,
});

export default defineEventHandler(async (event) => {
  try {
    console.log('Request received');
    const requestMessages: ThreadCreateParams.Message[] = await readBody(event);
    console.log('Number of received messages: ', requestMessages.length);

    let threadId = getHeader(event, 'Thread-Id');
    let thread;
    if (!threadId) {
      console.log('Thread ID not found in the header');
      thread = await client.beta.threads.create({
        messages: requestMessages as ThreadCreateParams.Message[],
      });
      threadId = thread.id;
      console.log('Created new thread with ID:', threadId);
    } else {
      console.log('Thread ID from header:', threadId);
      for (const message of requestMessages) {
        console.log('Adding message to existing thread:', message);
        await client.beta.threads.messages.create(threadId, message);
      }
      thread = await client.beta.threads.retrieve(threadId);
      console.log('Retrieved existing thread:', thread);
    }

    const assistantId = process.env.ASSISTANT_ID;
    if (!assistantId) {
      throw new Error('ASSISTANT_ID is not defined in environment variables');
    }
    console.log('Using assistant ID:', assistantId);
    const run = await client.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
      stream: true,
      response_format: { type: 'text' },
    });
    console.log('Run created');

    let message: Message | null = null;

    for await (const event of run) {
      if (event.event === 'thread.message.completed') {
        const content = event.data.content
          .filter(
            (content): content is TextContentBlock => content.type === 'text'
          ) // Type guard for TextContentBlock
          .map((content) => content.text.value)
          .join(' ');
        message = {
          role: 'assistant',
          content,
          isNewMessage: false,
        };
        console.log('Message from assistant:', message);
      }
    }

    if (message) {
      console.log('Returning response with thread ID and message:', {
        threadId,
        message,
      });
      return { threadId, message };
    } else {
      throw new Error('AI could not send response.');
    }
  } catch (error: any) {
    console.error('Error occurred:', error);
    event.node.res.statusCode = 500;
    return {
      error:
        error.message || 'Error unknown: Failed to fetch response from OpenAI',
    };
  }
});
