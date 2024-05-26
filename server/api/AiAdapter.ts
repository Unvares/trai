import OpenAI from 'openai'
import type {Message} from '@/types';

const client = new OpenAI({
    apiKey: process.env.API_KEY
});


export async function fetchResponse(requestMessages: Message[]): Promise<Message> {
    const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: requestMessages
    });

    if (response.choices) {
        return response.choices[0].message as Message;
    } else {
        throw new Error('AI could not send response.');
    }

}
