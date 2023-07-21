import { Link } from 'react-router-dom'

function Header() {
    return(
        <nav className="pink darken-2 nav-menu">
            
            <span className="logoName" style={{padding: "0 0 0 2rem"}}>
                <Link to="/">React Food project</Link>
            </span>

            <ul id="nav-mobile" className="right " style={{padding: "0 2rem 0 0"}}>
                <li>
                    <Link to="/" className='home-about'>Home</Link>
                </li>

                <li>
                    <Link to="/about" className='home-about'>About</Link>
                </li>
            </ul>
                
            
        </nav>
    )
}

export default Header;