# AI Gateway

**Live Demo: [ai-gateway-sandy.vercel.app](https://ai-gateway-sandy.vercel.app)**

Умный прокси-сервер между вашей компанией и AI провайдерами (OpenAI, Claude, Gemini), который защищает персональные данные и контролирует затраты.

---

## Проблема

Финтех компании хотят использовать ChatGPT, но боятся:
- Сотрудники случайно отправляют номера карт и персданные клиентов
- Затраты на токены растут бесконтрольно
- Нет аудита — непонятно кто и что спрашивает у AI

## Решение

AI Gateway перехватывает каждый запрос, маскирует персональные данные и даёт полную видимость — команда получает мощь AI без риска утечки данных.

---

## Возможности

**Защита персональных данных (PII)**
Автоматически находит и маскирует номера карт, телефоны и email до отправки в OpenAI. AI никогда не видит реальные данные клиентов.

**Live Dashboard**
Статистика в реальном времени: всего запросов, предотвращённых утечек и общая стоимость — всё хранится в PostgreSQL.

**Audit Log**
Полная история каждого запроса: исходный текст → замаскированный текст → ответ AI, с количеством токенов и стоимостью.

**Playground**
Тестируйте запросы в безопасной среде.

---

## Архитектура

```
┌─────────────┐     HTTP      ┌─────────────────┐     API      ┌──────────────┐
│   React     │ ────────────▶ │   Node.js +     │ ──────────▶  │   OpenAI     │
│  Frontend   │               │   Express       │              │  (GPT-4o-mini)│
│  (Vercel)   │ ◀──────────── │   (Railway)     │ ◀──────────  └──────────────┘
└─────────────┘               └─────────────────┘
                                      │
                                      │ insert/select
                                      ▼
                               ┌─────────────────┐
                               │   Supabase      │
                               │  (PostgreSQL)   │
                               └─────────────────┘
```

**Как работает маскировка:**
```
Пользователь вводит:
"Клиент жалуется на карту 4276 5500 1234 5678, тел: +7 999 123 45 67"
        ↓
maskPII() на бэкенде:
"Клиент жалуется на карту [MASKED_CARD], тел: [MASKED_PHONE]"
        ↓
Безопасный текст уходит в OpenAI
        ↓
GPT отвечает на замаскированный запрос
        ↓
Лог сохраняется в Supabase
```

---

## Demo сценарий

1. Откройте [ai-gateway-sandy.vercel.app](https://ai-gateway-sandy.vercel.app)
2. Перейдите на страницу **Аудит**
3. Введите текст с персданными, например:
   ```
   Клиент Иванов жалуется на списание с карты 4276 5500 1234 5678, 
   email: ivanov@mail.ru, тел: +7 999 123 45 67
   ```
4. Нажмите **Отправить**
5. Увидите: оригинал → замаскированный текст → ответ GPT
6. На **Дашборде** обновится счётчик предотвращённых утечек

---

## Тесты

```bash
cd backend
npm test
```

```
✓ маскирует номер карты
✓ маскирует email  
✓ маскирует телефон
✓ не меняет текст без персданных
```

---

An intelligent proxy server that sits between your company and AI providers (OpenAI, Claude, Gemini), protecting sensitive data and controlling costs.

## The Problem

Fintech companies want to use ChatGPT but fear:
- Employees accidentally leaking card numbers and financial data
- Uncontrolled token spending with no visibility
- No audit trail of what employees are asking AI

## The Solution

AI Gateway intercepts every request, masks sensitive data, and provides full observability — so your team gets the power of AI without the compliance risk.

## Features

**PII Protection**
Automatically detects and masks credit card numbers, phone numbers, and personal data before sending to OpenAI. The AI never sees real customer data.

**Live Dashboard**
Real-time statistics: total requests, prevented data leaks, and total cost — all persisted in PostgreSQL.

**Audit Log**
Full history of every request: original text → masked text → AI response, with token usage and cost per request.

**Playground**
Test masking rules and AI responses in a safe environment before deploying to production.

## Tech Stack

**Frontend**
- React 18 + TypeScript
- Vite
- Zustand (state management)
- React Router
- Axios
- Tailwind CSS

**Backend**
- Node.js + Express
- TypeScript
- OpenAI API (gpt-4o-mini)
- Supabase (PostgreSQL)
- dotenv

## Getting Started

### Prerequisites
- Node.js 18+
- OpenAI API key
- Supabase account

### Setup

1. Clone the repository
```bash
git clone https://github.com/IuliiaUsatova/ai-gateway.git
cd ai-gateway
```

2. Setup backend
```bash
cd backend
npm install
```

Create `.env` file in `/backend`:
```
OPENAI_API_KEY=your_openai_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

3. Setup frontend
```bash
cd ../frontend
npm install
```

4. Run the project

Backend (port 3005):
```bash
cd backend && npm run dev
```

Frontend (port 5173):
```bash
cd frontend && npm run dev
```

5. Open `http://localhost:5173`

## How It Works

```
User types: "Check transaction on card 4276 5500 1234 5678"
        ↓
AI Gateway intercepts the request
        ↓
Masks PII: "Check transaction on card [MASKED_CARD]"
        ↓
Sends safe text to OpenAI
        ↓
Returns AI response + logs to database
        ↓
Dashboard shows: 1 leak prevented, $0.0001 spent
```

## Author

Iuliia Usatova — Frontend Engineer