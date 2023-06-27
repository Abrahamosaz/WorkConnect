import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav-bar-left'>
                <h1>WorkConnect</h1>
            </div>
            <div className='nav-bar-right'>
                <ul>
                    <li><Link to='/sign_up'>Sign up</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;