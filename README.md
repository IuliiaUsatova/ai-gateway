# AI Gateway

AI Gateway is a fintech-oriented proof-of-work project that demonstrates how a company can safely route employee AI requests through a controlled proxy layer.

The core idea:

```text
employee request -> PII masking -> AI provider -> audit log -> usage dashboard
```

**Live demo:** [ai-gateway-sandy.vercel.app](https://ai-gateway-sandy.vercel.app)

## Why This Project Exists

Fintech teams often want to use AI tools, but they need guardrails:

- employees may accidentally send card numbers, phone numbers, emails, or other sensitive data to an AI provider;
- token usage and costs can grow without visibility;
- there may be no audit trail showing who sent what and how the request was handled;
- compliance and data-protection requirements make raw AI usage risky.

This project explores a safer pattern: AI requests go through a gateway that masks sensitive data, sends only sanitized text to the AI provider, and stores an auditable record of the flow.

## What It Demonstrates

- PII masking before sending data to an AI provider.
- Request/response audit trail.
- Token usage and estimated cost tracking.
- Dashboard metrics for total requests, prevented leaks, and cost.
- Frontend playground for testing safe AI requests.
- Full-stack integration between React, Node.js, OpenAI API, and Supabase.

## Demo Scenario

1. Open the live demo.
2. Go to the audit/playground flow.
3. Submit text that contains sensitive data, for example:

```text
Customer Ivan Petrov asks about card 4276 5500 1234 5678,
email ivan.petrov@example.com, phone +7 999 123 45 67.
```

4. The gateway masks sensitive values before calling the AI provider:

```text
Customer Ivan Petrov asks about card [MASKED_CARD],
email [MASKED_EMAIL], phone [MASKED_PHONE].
```

5. The dashboard updates request, leak-prevention, and cost metrics.
6. The audit log stores the original text, masked text, AI response, token usage, and estimated cost.

## Architecture

```text
React frontend
    |
    | HTTP request
    v
Node.js / Express API
    |
    | maskPII()
    v
OpenAI API
    |
    | response + usage metadata
    v
Supabase PostgreSQL
    |
    | audit log + dashboard metrics
    v
React dashboard
```

## Key Implementation Areas

### PII Masking

The backend detects and masks sensitive values before sending the request to the AI provider.

Covered examples:

- card numbers;
- phone numbers;
- email addresses.

The masking logic is intentionally placed on the backend so the AI provider receives sanitized text, not raw customer data.

### Audit Log

Each request can be inspected as a full flow:

```text
original text -> masked text -> AI response -> token usage -> estimated cost
```

This is important for regulated or risk-sensitive environments where observability matters as much as the user-facing feature.

### Cost Visibility

The project tracks estimated token cost per request and aggregates it on the dashboard. In a production system, this layer could be extended with budgets, alerts, team-level limits, and provider-level cost comparison.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Zustand
- React Router
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express
- TypeScript
- OpenAI API
- Supabase / PostgreSQL
- dotenv

## Project Structure

```text
frontend/          React UI, dashboard, audit views, playground
backend/src/       Express API, masking logic, OpenAI integration, Supabase persistence
backend/src/*.test Type-level and masking-related tests
```

## Local Setup

### Prerequisites

- Node.js 18+
- OpenAI API key
- Supabase project

### Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
OPENAI_API_KEY=your_openai_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

Run the backend:

```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

## Validation

Run backend tests:

```bash
cd backend
npm test
```

Example test coverage:

- masks card numbers;
- masks emails;
- masks phone numbers;
- leaves safe text unchanged.

Run frontend build:

```bash
cd frontend
npm run build
```

## What I Would Improve In Production

- Add authentication and role-based access control.
- Add team-level usage limits and budget alerts.
- Replace demo cost calculation with provider-specific billing rules.
- Expand PII detection for names, addresses, account numbers, passport/ID numbers, and custom company policies.
- Add request redaction policies and retention rules.
- Add structured logging, monitoring, and alerting.
- Add queue/retry handling for provider failures.
- Add OpenAPI documentation for internal consumers.

## Why This Project Matters

This project reflects the kind of engineering I am interested in: not just building UI, but designing reliable internal tools around data, risk, automation, auditability, and business constraints.

It connects frontend engineering with fintech-domain thinking: the interface is only one part of the system; the important work is in the flow, the data contract, the safety layer, and the operational visibility.

## Author

Iuliia Usatova  
Frontend Engineer focused on fintech, business logic, internal tools, AI-assisted workflows, and data-heavy interfaces.
