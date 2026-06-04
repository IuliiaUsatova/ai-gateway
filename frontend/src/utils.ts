import type { Filter } from "./types"

export function getRiskLevel(masked: string): Filter {
    const masks = ['[MASKED_CARD]', '[MASKED_EMAIL]', '[MASKED_PHONE]',
        '[MASKED_PASSPORT]', '[MASKED_SNILS]', '[MASKED_INN]', '[MASKED_ACCOUNT]']
    const maskCount = masks.filter(mask => masked.includes(mask)).length
    return (maskCount === 0 ? 'safe' : maskCount === 1 ? 'masked'
        : 'high-risk'
    )
}