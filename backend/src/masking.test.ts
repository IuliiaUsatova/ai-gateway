import { describe, it, expect } from 'vitest'
import { maskPII } from './masking'

describe('maskPII', () => {
    it('маскирует номер карты', () => {
        const result = maskPII('карта 4276 5500 1234 5678')
        expect(result).toBe('карта [MASKED_CARD]')
    })

    it('маскирует email', () => {
        const result = maskPII('email: test@gmail.com')
        expect(result).toBe('email: [MASKED_EMAIL]')
    })

    it('маскирует телефон', () => {
        const result = maskPII('тел: +7 999 123 45 67')
        expect(result).toBe('тел: [MASKED_PHONE]')
    })

    it('маскирует паспорт', () => {
        const result = maskPII('паспорт 4510 123456')
        expect(result).toBe('паспорт [MASKED_PASSPORT]')
    })

    it('маскирует СНИЛС', () => {
        const result = maskPII('снилс 123-456-789 01')
        expect(result).toBe('снилс [MASKED_SNILS]')
    })

    it('маскирует ИНН', () => {
        const result = maskPII('ИНН 1234567890')
        expect(result).toBe('[MASKED_INN]')
    })

    it('маскирует расчётный счёт', () => {
        const result = maskPII('р/с 40817810099910004312')
        expect(result).toBe('[MASKED_ACCOUNT]')
    })

    it('не меняет текст без персданных', () => {
        const result = maskPII('обычный текст')
        expect(result).toBe('обычный текст')
    })
})