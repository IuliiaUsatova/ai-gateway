import { useState } from 'react'
import { useLogsStore } from '../stores/logsStore'
import RiskBadge from '../components/RiskBadge'
import { getRiskLevel } from "../utils"
import type { Filter } from "../types"

function AuditLogViewerPage() {
    const { logs } = useLogsStore()
    const [search, setSearch] = useState('')
    const [selectedRisk, setSelectedRisk] = useState<Filter>('Показать все')
    const filteredLogs = logs.filter(log => log.originalText.toLowerCase().includes(search.toLowerCase()) && (selectedRisk === 'Показать все' || getRiskLevel(log.maskedText) === selectedRisk))
    return (
        <div className="overflow-x-auto">
            <div className="p-4 md:p-8 mb-4">
                <input type="text"
                    placeholder="Поиск по запросу..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white mb-4" />
                <select
                    value={selectedRisk}
                    onChange={(e) => setSelectedRisk(e.target.value as Filter)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white mb-4"
                >
                    <option value="Показать все">Показать все</option>
                    <option value="safe">Safe</option>
                    <option value="masked">Masked</option>
                    <option value="high-risk">High Risk</option>
                </select>
            </div>

            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-gray-700 text-gray-400">
                        <th className="text-left py-3 px-4">Дата</th>
                        <th className="text-left py-3 px-4">Оригинал</th>
                        <th className="text-left py-3 px-4">Маскировано</th>
                        <th className="text-left py-3 px-4">Риск</th>
                        <th className="text-left py-3 px-4">Стоимость</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLogs.map((log) => (
                        <tr key={log.id} className="border-b border-gray-800 hover:bg-gray-800">
                            <td className="py-3 px-4 text-gray-400">{log.id}</td>
                            <td className="py-3 px-4">{log.originalText.substring(0, 50)}...</td>
                            <td className="py-3 px-4 text-green-400">{log.maskedText.substring(0, 50)}...</td>
                            <td className="py-3 px-4">
                                <RiskBadge original={log.originalText} masked={log.maskedText}></RiskBadge>
                            </td>
                            <td className="py-3 px-4 text-blue-400">${log.cost.toFixed(6)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AuditLogViewerPage