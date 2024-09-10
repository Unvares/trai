import { ChatOpenAI } from '@langchain/openai';
import { readBody } from 'h3';
import type { Message } from '@/types/Messages';
import {
  AIMessage,
  BaseMessage,
  HumanMessage,
  SystemMessage,
} from '@langchain/core/messages';
import {
  systemMessage as preprompt,
  guidelines,
  relatedToWasteRecyclingPrompt,
  handleDeviationPrompt,
} from '@/assets/preprompt';

const model = new ChatOpenAI({
  model: 'gpt-4o-mini',
  apiKey: process.env.API_KEY,
});

export default defineEventHandler(async (event) => {
  try {
    console.info('Received request at /api/langchain. Processing started.');
    console.info('Parsing request body');
    const requestMessages: Message[] = await readBody(event);

    if (requestMessages.length === 0) {
      throw new Error('No messages were provided');
    }
    console.info('Request body successfully parsed');

    const lastFiveMessages = requestMessages
      .slice(-5)
      .map(convertToLangchainMessages);
    console.info('LangChain message objects successfully generated');

    const deviationCheckSystemMessage = new SystemMessage(
      preprompt + relatedToWasteRecyclingPrompt
    );
    const relatedToWasteRecyclingRequest = [
      deviationCheckSystemMessage,
      ...lastFiveMessages,
    ];

    console.info('Determining if the last message deviates from the topic');
    const deviationCheckResponse = await model.invoke(
      relatedToWasteRecyclingRequest
    );
    console.info('Deviation check completed.');
    const allMessages = requestMessages.map(convertToLangchainMessages);
    allMessages.unshift(new SystemMessage(preprompt + guidelines));

    if (deviationCheckResponse.content === 'redirect') {
      const deviationMessage = new SystemMessage(handleDeviationPrompt);
      allMessages.push(deviationMessage);
    }

    console.info('Invoking the LLM to generate a response');
    const response = await model.invoke(allMessages);
    console.info('Response successfully generated. Returning...');

    return {
      role: 'assistant',
      content: response.content,
    };
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

function convertToLangchainMessages(message: Message): BaseMessage {
  switch (message.role) {
    case 'user':
      return new HumanMessage(message.content);
    case 'assistant':
      return new AIMessage(message.content);
    case 'system':
      return new SystemMessage(message.content);
    default:
      throw new Error(`Unknown message role: ${message.role}`);
  }
}
