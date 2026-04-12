import { apiClient } from "."

export async function sendMessage(text: string) {
    const res = await apiClient.post('/api/chat', { text })
    return res.data
}