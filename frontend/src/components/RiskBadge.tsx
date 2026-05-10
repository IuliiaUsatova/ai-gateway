interface RiskBadgeProps {
    original: string,
    masked: string
}

function RiskBadge({ original, masked }: RiskBadgeProps) {
    const masks = ['[MASKED_CARD]', '[MASKED_EMAIL]', '[MASKED_PHONE]',
        '[MASKED_PASSPORT]', '[MASKED_SNILS]', '[MASKED_INN]', '[MASKED_ACCOUNT]']
    const maskCount = masks.filter(mask => masked.includes(mask)).length
    return (maskCount === 0 ? <span className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded">safe</span> : maskCount === 1 ? <span className="text-yellow-400 text-xs bg-yellow-400/10 px-2 py-1 rounded">masked</span>
        : <span className="text-red-400 text-xs bg-red-400/10 px-2 py-1 rounded">high-risk</span>
    )
}

export default RiskBadge