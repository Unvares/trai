import axios from 'axios';

export class AIApiAdapter implements AIServicePort {
    private apiUrl: string;
    private apiKey: string;

    constructor(apiUrl: string, apiKey: string) {
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
    }

    public async askQuestion(question: string): Promise<String> {
        try {
            const response = await axios.post(`${this.apiUrl}`, question, {
                headers: {'Authorization': `Bearer ${this.apiKey}` }
            });
            return response.data;
        } catch (error: any) {  
            throw new Error('Failed to establish connection to AI API ' + error.message);
        }
    }
}
