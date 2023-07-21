import { Link } from 'react-router-dom'

function Header() {
    return(
        <nav className="pink darken-2 nav-menu">
            <div className="nav-wrapper">

                <span className="logoName">
                    <Link to="/">React Food project</Link>
                </span>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Header;