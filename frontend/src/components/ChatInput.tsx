import type { ChatInputProps } from '../types'

function ChatInput({ text, onChange, onSubmit }: ChatInputProps) {
    return (
        <div className="flex gap-3 mb-6">
            <input
                type="text"
                value={text}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Введите текст..."
            />
            <button
                onClick={onSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
            >
                Отправить
            </button>
        </div>
    )
}

export default ChatInput