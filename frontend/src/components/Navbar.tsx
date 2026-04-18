import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-gray-900 border-b border-gray-700 px-6 py-4 flex gap-6">
            <Link to='/' className="text-gray-300 hover:text-white">Дашборд</Link>
            <Link to='/audit' className="text-gray-300 hover:text-white">Аудит</Link>
            <Link to='/playground' className="text-gray-300 hover:text-white">Игровая</Link>
        </nav>
    )
}

export default Navbar