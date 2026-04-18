import { useState } from "react"
import type { ChatResponse } from "../types"
import { sendMessage } from "../api/chat"


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
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSubmit}>Отправить</button>
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