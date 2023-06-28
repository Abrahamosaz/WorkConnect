import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <React.Fragment>
        <nav className='nav'>
            <div className='nav-bar-left'>
                <Link to=''><h1>WorkConnect</h1></Link>   
            </div>
            <div className='nav-bar-right'>
                <ul>
                    <li><Link to='/user_type'>Sign up</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </nav>
        <Outlet />
        </React.Fragment>
    )
}

export default Navbar;