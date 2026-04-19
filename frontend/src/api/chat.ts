import { apiClient } from "."

export async function sendMessage(text: string) {
    const res = await apiClient.post('/api/chat', { text })
    return res.data
}

export async function getLogs() {
    const res = await apiClient.get('/api/logs')
    return res.data.map((log: any) => ({
        id: log.id.toString(),
        originalText: log.original_text,
        maskedText: log.masked_text,
        response: log.response,
        tokensInput: log.tokens_input,
        tokensOutput: log.tokens_output,
        cost: log.cost
    }))
} 