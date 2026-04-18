export interface ChatResponse {
    originalText: string,
    maskedText: string,
    response: string,
    tokensInput: number,
    tokensOutput: number,
    cost: number
}

export interface ChatInputProps {
    text: string,
    onChange: (value: string) => void,
    onSubmit: () => void
}