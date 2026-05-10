import { useLogsStore } from '../stores/logsStore'
import RiskBadge from '../components/RiskBadge'

function AuditLogViewerPage() {
    const { logs } = useLogsStore()
    return (
        <div className="overflow-x-auto">
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
                    {logs.map((log) => (
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