import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import AuditLogPage from './pages/AuditLogPage'
import PlaygroundPage from './pages/PlaygroundPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/audit' element={<AuditLogPage />} />
      <Route path='/playground' element={<PlaygroundPage />} />
    </Routes>
  )
}

export default App
