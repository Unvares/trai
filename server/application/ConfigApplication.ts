import { AIApiAdapter } from '../adapters/AIApiAdapter';

class ConfigApplication {
    public static configureAiService(): AIServicePort {
        const apiUrl = "https://api.aiexample.com";
        const apiKey = "YOUR_API_KEY";
        return new AIApiAdapter(apiUrl, apiKey);
    }
}