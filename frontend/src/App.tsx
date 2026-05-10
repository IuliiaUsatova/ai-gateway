import { Route, Routes } from 'react-router-dom'
import { useEffect } from "react"
import { getLogs } from "./api/chat"
import { useLogsStore } from './stores/logsStore'
import DashboardPage from './pages/DashboardPage'
import AuditLogPage from './pages/AuditLogPage'
import PlaygroundPage from './pages/PlaygroundPage'
import AuditLogViewerPage from './pages/AuditLogViewerPage'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const { setLogs } = useLogsStore()
  useEffect(() => {
    async function fetchLogs() {
      const data = await getLogs()
      setLogs(data)
    }
    fetchLogs()
  }, [])
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/audit' element={<AuditLogPage />} />
        <Route path='/playground' element={<PlaygroundPage />} />
        <Route path='/logs' element={<AuditLogViewerPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
