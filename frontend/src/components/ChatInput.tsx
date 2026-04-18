import type { ChatInputProps } from '../types'

function ChatInput({ text, onChange, onSubmit }: ChatInputProps) {
    return (
        <div>
            <input type="text" value={text} onChange={(e) => onChange(e.target.value)} />
            <button onClick={onSubmit}>Отправить</button>
        </div>
    )
}

export default ChatInput