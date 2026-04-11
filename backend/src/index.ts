import express from "express";
import { maskPII } from './masking'

const app = express()
app.use(express.json())
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' })
})
app.post('/api/chat', (req, res) => {
    const { text } = req.body
    const maskedText = maskPII(text)
    res.json({
        originalText: text,
        maskedText: maskedText,
        response: 'Это мок-ответ от AI',
        tokensInput: 10,
        tokensOutput: 20,
        cost: 0.001
    })
})
app.listen(3005)