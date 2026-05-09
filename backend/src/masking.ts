export function maskPII(text: string) {
    return text
        .replace(/\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}/g, '[MASKED_CARD]')
        .replace(/[\w.-]+@[\w.-]+\.\w+/g, '[MASKED_EMAIL]')
        .replace(/(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}/g, '[MASKED_PHONE]')
}