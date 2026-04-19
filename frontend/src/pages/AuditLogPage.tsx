import { useState } from "react"
import { sendMessage } from "../api/chat"
import { useLogsStore } from '../stores/logsStore'
import ChatInput from '../components/ChatInput'

function AuditLogPage() {

    const { logs, addLog } = useLogsStore()
    const [text, setText] = useState('')
    async function handleSubmit() {
        const data = await sendMessage(text)
        addLog(data)
    }
    return (
        <div className="p-8 max-w-3xl">
            <h1 className="text-2xl font-bold mb-6">Аудит</h1>
            <ChatInput text={text} onChange={setText} onSubmit={handleSubmit} />
            {logs.map((log) => (
                <div key={log.id} className="mt-4 bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <p className="text-gray-400 text-sm mb-1">Оригинал</p>
                    <p className="text-white mb-2">{log.originalText}</p>
                    <p className="text-gray-400 text-sm mb-1">Маскировано</p>
                    <p className="text-green-400 mb-2">{log.maskedText}</p>
                    <span className="text-blue-400 text-sm">${log.cost}</span>
                </div>
            ))}
        </div>
    )
}

export default AuditLogPage