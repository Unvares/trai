import { OpenAI } from 'openai';
import { createReadStream } from 'fs';
import { systemMessage, guidelines } from '@/assets/preprompt';
import type { Assistant } from 'openai/resources/beta/assistants.mjs';

const assistantName = 'TRAI Assistant';
const vectorStoreName = 'Waste Sorting Guidelines';
const model = 'gpt-4o-mini';
const docNames = ['WasteSeparation.pdf'];
const docs = docNames.map((name) => `assets/docs/${name}`);

const apiKey = 'sk-proj-gjy7kKwkCSHvVL8IqkDvT3BlbkFJIWioF4IOOBPlRNLWmO4v';
if (!apiKey) {
  throw new Error('API_KEY is not defined in the environment variables');
}

const client = new OpenAI({
  apiKey,
});

const createAssistant = async () => {
  const existingAssistants = await client.beta.assistants.list();
  let assistant = existingAssistants.data.find((a) => a.name === assistantName);

  if (assistant) {
    console.log(
      `Assistant "${assistantName}" already exists with ID: ${assistant.id}. Updating it.`
    );
    assistant = await client.beta.assistants.update(assistant.id, {
      instructions: systemMessage + guidelines,
      tools: [{ type: 'file_search' }],
      model,
    });
  } else {
    assistant = await client.beta.assistants.create({
      name: assistantName,
      instructions: systemMessage + guidelines,
      tools: [{ type: 'file_search' }],
      model,
    });
    console.log(`Created Assistant with ID ${assistant.id}`);
  }

  await createVectorStore(assistant);
  return assistant.id;
};

const createVectorStore = async (assistant: Assistant) => {
  const fileStreams = docs.map((path) => createReadStream(path));

  const existingVectorStores = await client.beta.vectorStores.list();
  let vectorStore = existingVectorStores.data.find(
    (vs) => vs.name === vectorStoreName
  );

  if (vectorStore) {
    console.log(
      `Vector Store "${vectorStoreName}" already exists with ID: ${vectorStore.id}. Deleting it.`
    );
    await client.beta.vectorStores.del(vectorStore.id);
  }

  vectorStore = await client.beta.vectorStores.create({
    name: vectorStoreName,
  });

  await client.beta.assistants.update(assistant.id, {
    tool_resources: { file_search: { vector_store_ids: [vectorStore.id] } },
  });

  console.log(
    `Starting to upload files: ${fileStreams
      .map((stream) => stream.path.toString().split('/').pop())
      .join(', ')}`
  );

  await client.beta.vectorStores.fileBatches.uploadAndPoll(vectorStore.id, {
    files: fileStreams,
  });
  console.log('All files uploaded!');
};

// Main function to run the script
(async () => {
  try {
    const assistantId = await createAssistant();
  } catch (error) {
    console.error('Error:', error);
  }
})();
