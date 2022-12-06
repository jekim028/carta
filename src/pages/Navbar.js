import React from 'react';
import Logo from '../images/logo.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="header">
            <Link to="/"><img src={Logo} alt="logo" className="nav--logo"/></Link>
            {/* <img src={CartaLogo} alt="Carta Logo" className="nav--logo"><Link to="/"></Link></img> */}
            {/* <h1><Link to="/">Home</Link></h1> */}
        </nav>
    )
}