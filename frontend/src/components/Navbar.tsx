import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-gray-900 border-b border-gray-700 px-6 py-4 flex flex-wrap gap-4 items-center">
            <span className="text-white font-bold mr-4">AI Gateway</span>
            <Link to='/' className="text-gray-300 hover:text-white text-sm">Дашборд</Link>
            <Link to='/audit' className="text-gray-300 hover:text-white text-sm">Аудит</Link>
            <Link to='/playground' className="text-gray-300 hover:text-white text-sm">Игровая</Link>
        </nav>
    )
}

export default Navbar