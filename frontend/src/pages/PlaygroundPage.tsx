import { useState } from "react"
import type { ChatResponse } from "../types"
import { sendMessage } from "../api/chat"
import ChatInput from '../components/ChatInput'

function PlaygroundPage() {

    const [text, setText] = useState('')
    const [result, setResult] = useState<ChatResponse | null>(null)

    async function handleSubmit() {
        const data = await sendMessage(text)
        setResult(data)
    }
    return (
        <div>
            <h1>Игровая площадка</h1>
            <ChatInput text={text} onChange={setText} onSubmit={handleSubmit} />
            <div>{result && (
                <div>
                    <p>Оригинал: {result.originalText}</p>
                    <p>Маскировано: {result.maskedText}</p>
                    <p>Ответ AI: {result.response}</p>
                </div>
            )}</div>
        </div>
    )
}

export default PlaygroundPage