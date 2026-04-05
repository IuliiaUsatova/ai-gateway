import express from "express";

const app = express()
app.use(express.json())
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' })
})
app.post('/api/chat', (req, res) => {
    const { text } = req.body
    res.json({
        originalText: text,
        maskedText: text,
        response: 'Это мок-ответ от AI',
        tokensInput: 10,
        tokensOutput: 20,
        cost: 0.001
    })
})
app.listen(3005)