export function maskPII(text: string) {
    return text.replace(/\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}/g, '[MASKED_CARD]')
}