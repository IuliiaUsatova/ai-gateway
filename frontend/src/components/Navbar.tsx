import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <Link to='/'>Дашборд</Link>
            <Link to='/audit'>Аудит</Link>
            <Link to='/playground'>Игровая</Link>
        </nav>
    )
}

export default Navbar