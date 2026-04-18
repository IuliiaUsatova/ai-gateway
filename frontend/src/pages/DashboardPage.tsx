import { useLogsStore } from '../stores/logsStore'

function DashboardPage() {
    const { logs } = useLogsStore()
    const preventedLeaks = logs.filter((log) => log.originalText !== log.maskedText).length
    const totalCost = logs.reduce((acc, log) => {
        return acc + log.cost
    }, 0)
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Дашборд</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-xl p-6">
                    <p className="text-gray-400 text-sm">Всего запросов</p>
                    <p className="text-3xl font-bold mt-2">{logs.length}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                    <p className="text-gray-400 text-sm">Предотвращённых утечек</p>
                    <p className="text-3xl font-bold mt-2 text-green-400">{preventedLeaks}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                    <p className="text-gray-400 text-sm">Общая стоимость</p>
                    <p className="text-3xl font-bold mt-2 text-blue-400">${totalCost.toFixed(4)}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage