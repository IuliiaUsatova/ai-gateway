import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import AuditLogPage from './pages/AuditLogPage'
import PlaygroundPage from './pages/PlaygroundPage'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/audit' element={<AuditLogPage />} />
        <Route path='/playground' element={<PlaygroundPage />} />
      </Routes>
    </div>
  )
}

export default App
