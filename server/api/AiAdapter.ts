import OpenAI from 'openai'

const client = new OpenAI({apiKey: process.env.API_KEY});

type Messages = Array<Message>

type Message = {
    role: "function" | "system" | "user" | "assistant" ;
    content: string;
}

async function fetchResponse(requestMessages: Messages): Promise<Message> {
    const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: requestMessages
    });

    if (response.choices) {
        const aiMessage = response.choices[0].message;
        return {
            role: aiMessage.role,
            content: aiMessage.content
        };
    } else {
        throw new Error('AI could not send response.')
    }
}