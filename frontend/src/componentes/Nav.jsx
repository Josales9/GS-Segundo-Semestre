import {} from 'react'
import '../sass/styleNav.scss'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <>
        <header className='menu'>
            <nav className='nav-menu'>
                <ul>
                    <Link to="/" className="tlink">
                        Home
                    </Link>
                    <Link to="/Projeto" className="tlink">
                        Projeto
                    </Link>
                    <Link to="/Login" className="tlink">
                        Login
                    </Link>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Nav