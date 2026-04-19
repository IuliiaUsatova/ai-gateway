import 'dotenv/config'
import express from "express";
import cors from 'cors'
import { maskPII } from './masking'
import { sendToOpenAI } from './openai'
import { supabase } from './supabase';

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
    
    const cost = (aiResponse.tokensInput + aiResponse.tokensOutput) * 0.000001
    
    await supabase.from('logs').insert({
        original_text: text,
        masked_text: maskedText,
        response: aiResponse.answer,
        tokens_input: aiResponse.tokensInput,
        tokens_output: aiResponse.tokensOutput,
        cost: cost
    })
    
    res.json({
        id: Date.now().toString(),
        originalText: text,
        maskedText: maskedText,
        response: aiResponse.answer,
        tokensInput: aiResponse.tokensInput,
        tokensOutput: aiResponse.tokensOutput,
        cost: cost
    })
})

app.listen(3005)