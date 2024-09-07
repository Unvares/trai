import OpenAI from 'openai';
import type { TextContentBlock } from 'openai/resources/beta/threads/messages';
import type { ThreadCreateParams } from 'openai/resources/beta/threads/threads';
import type { ThreadMessage } from '@/types/Messages';

const client = new OpenAI({
  apiKey: process.env.API_KEY,
});

export default defineEventHandler(async (event) => {
  try {
    console.info('Received request at /api/assistant. Processing started.');
    console.info('Parsing request body');
    const requestMessages: ThreadCreateParams.Message[] = await readBody(event);

    if (requestMessages.length === 0) {
      throw new Error('No messages were provided');
    }
    console.info('Number of received messages:', requestMessages.length);

    let threadId = getHeader(event, 'Thread-Id');
    let thread;
    if (!threadId) {
      console.info('Thread ID not found in the header');
      thread = await client.beta.threads.create({
        messages: requestMessages as ThreadCreateParams.Message[],
      });
      threadId = thread.id;
      console.info('Created new thread with ID:', threadId);
    } else {
      console.info('Thread ID found in header:', threadId);
      thread = await client.beta.threads.retrieve(threadId);
      console.info('Retrieved existing thread:', thread);
      for (const message of requestMessages) {
        console.info('Adding message to existing thread:', message);
        await client.beta.threads.messages.create(threadId, message);
      }
    }

    const assistantId = process.env.ASSISTANT_ID;
    if (!assistantId) {
      throw new Error('ASSISTANT_ID is not defined in environment variables');
    }
    console.info('Using assistant ID:', assistantId);
    const run = await client.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
      stream: true,
      response_format: { type: 'text' },
    });
    console.info('Run created');

    let message: ThreadMessage | null = null;

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
        console.info('Message from assistant:', message);
      }
    }

    if (message) {
      console.info('Returning response with thread ID and message:', {
        threadId,
        message,
      });
      return { threadId, message };
    } else {
      throw new Error('AI could not send response.');
    }
  } catch (error: any) {
    console.error('Error encountered. Aborting execution...');
    console.error('Error details:', error);
    event.node.res.statusCode = 500;
    return {
      error:
        error.message || 'Error unknown: Failed to fetch response from OpenAI',
    };
  } finally {
    // Log a newline to visually separate this
    // request from subsequent requests in the logs.
    console.log();
  }
});
