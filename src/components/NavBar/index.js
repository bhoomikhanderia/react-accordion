import React from 'react';
import Logo from '../../logo.png';

const NavBar = () => (
    <nav>
        <a className="nav-brand" href="/"><img src={Logo} alt="aesop logo" aria-label="logo"/></a>
    </nav>
)

export default NavBar
