import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function sendToOpenAI(text: string) {
    const response = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: text }]
    })
    
    return {
        answer: response.choices[0].message.content,
        tokensInput: response.usage?.prompt_tokens ?? 0,
        tokensOutput: response.usage?.completion_tokens ?? 0,
    }
}