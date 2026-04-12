import { useState } from "react"
import type { ChatResponse } from "../types"
import { sendMessage } from "../api/chat"

function AuditLogPage() {
    const [text, setText] = useState('')
    const [result, setResult] = useState<ChatResponse | null>(null)

    async function handleSubmit() {
        const data = await sendMessage(text)
        setResult(data)
    }
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSubmit}>Отправить</button>
            <div>{result && (
                <div>
                    <p>Оригинал: {result.originalText}</p>
                    <p>Маскировано: {result.maskedText}</p>
                    <p>Ответ AI: {result.response}</p>
                    <p>Токены: {result.tokensInput} / {result.tokensOutput}</p>
                    <p>Стоимость: {result.cost}</p>
                </div>
            )}</div>
        </div>
    )
}

export default AuditLogPage