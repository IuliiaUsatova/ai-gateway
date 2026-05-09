export function maskPII(text: string) {
    return text
        .replace(/р\/с\s?\d{20}/gi, '[MASKED_ACCOUNT]')
        .replace(/БИК\s?\d{9}/gi, '[MASKED_BIK]')
        .replace(/\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}/g, '[MASKED_CARD]')
        .replace(/[\w.-]+@[\w.-]+\.\w+/g, '[MASKED_EMAIL]')
        .replace(/(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}/g, '[MASKED_PHONE]')
        .replace(/\d{4}\s\d{6}/g, '[MASKED_PASSPORT]')
        .replace(/\d{3}-\d{3}-\d{3}\s\d{2}/g, '[MASKED_SNILS]')
        .replace(/ИНН\s?\d{10,12}/gi, '[MASKED_INN]')
}