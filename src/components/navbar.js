import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/materiais">Materiais</Link>
        </li>
        {/* <li>
            <Link to="/links">Links Úteis</Link>
        </li> */}

    </ul>
)

export default Navbar
