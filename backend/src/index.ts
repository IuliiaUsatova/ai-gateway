import 'dotenv/config'
import express from "express";
import cors from 'cors'
import { maskPII } from './masking'
import { sendToOpenAI } from './openai'

const app = express()
app.use(cors())
app.use(express.json())
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' })
})
app.post('/api/chat', async (req, res) => {
    const { text } = req.body
    const maskedText = maskPII(text)
    const aiResponse = await sendToOpenAI(maskedText)
    res.json({
        id: Date.now().toString(),
        originalText: text,
        maskedText: maskedText,
        response: aiResponse.answer,
        tokensInput: aiResponse.tokensInput,
        tokensOutput: aiResponse.tokensOutput,
        cost: (aiResponse.tokensInput + aiResponse.tokensOutput) * 0.000001
    })
})
app.listen(3005)