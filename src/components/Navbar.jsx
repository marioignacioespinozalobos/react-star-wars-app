import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (  
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <h1>Star wars May the forth</h1>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;