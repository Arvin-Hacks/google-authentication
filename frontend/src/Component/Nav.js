// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbarr'>
            <ul >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
