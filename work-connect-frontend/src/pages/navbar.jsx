import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import '../css/nav-bar.css';

function Navbar() {

    const navigate = useNavigate();
    const [isLogin, setIslogin] = useState("");
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (!token) {
            setIslogin(false);
        } else {
            setIslogin(true);
        }
    }, [])

    return (
        <React.Fragment>
        <nav className='nav'>
            <div className='nav-bar-left'>
                <Link to=''><h1>WorkConnect</h1></Link>   
            </div>
            <div className='nav-bar-right'>
                <ul>
                    <li><Link to='/sign_up'>Sign up</Link></li>
                    {isLogin? 
                    <li><Link to='/logout'>Logout</Link></li>:
                    <li><Link to='/login'>Login</Link></li>}
                </ul>
            </div>
        </nav>
        <Outlet />
        </React.Fragment>
    )
}

export default Navbar;