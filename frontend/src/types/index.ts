export interface ChatResponse {
    originalText: string,
    maskedText: string,
    response: string,
    tokensInput: number,
    tokensOutput: number,
    cost: number
}