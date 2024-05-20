interface AIServicePort {
    askQuestion(question: string): Promise<String>;
}
