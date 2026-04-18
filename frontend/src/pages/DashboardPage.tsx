import { useLogsStore } from '../stores/logsStore'

function DashboardPage() {
    const { logs } = useLogsStore()
    const preventedLeaks = logs.filter((log) => log.originalText !== log.maskedText).length
    const totalCost = logs.reduce((acc, log) => {
        return acc + log.cost
    }, 0)
    return (
        <div>
            <h1>Дашборд</h1>
            <p>Всего запросов: {logs.length}</p>
            <p>Предотвращённых утечек: {preventedLeaks}</p>
            <p>Общая стоимость : {totalCost}</p>
        </div>
    )
}

export default DashboardPage