export interface ChatResponse {
    id: string,
    originalText: string,
    maskedText: string,
    response: string,
    tokensInput: number,
    tokensOutput: number,
    cost: number
}

export interface ChatInputProps {
    text: string,
    isLoading: boolean,
    onChange: (value: string) => void,
    onSubmit: () => void
}

export type Filter = 'Показать все' | 'safe' | 'masked' | 'high-risk'
