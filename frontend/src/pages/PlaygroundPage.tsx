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
        <div className="p-8 max-w-3xl">
            <h1 className="text-2xl font-bold mb-6">Игровая площадка</h1>
            <ChatInput text={text} onChange={setText} onSubmit={handleSubmit} />
            {result && (
                <div className="mt-6 bg-gray-800 rounded-xl p-6">
                    <div className="mb-4">
                        <p className="text-gray-400 text-sm mb-1">Оригинал</p>
                        <p className="text-white">{result.originalText}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-400 text-sm mb-1">Маскировано</p>
                        <p className="text-green-400">{result.maskedText}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-400 text-sm mb-1">Ответ AI</p>
                        <p className="text-white">{result.response}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PlaygroundPage