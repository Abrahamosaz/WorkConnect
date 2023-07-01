import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import '../css/nav-bar.css';
import { UserContext } from "../contexts/user.contexts";

function Navbar() {

    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    if (token === null || token === '') {
        setIsLoggedIn(false);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsLoggedIn(false);
        navigate('/login');
    }


    useEffect(() => {
        if (!token) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, [])

    return (
        <React.Fragment>
        <nav className='nav'>
            <div className='nav-bar-left'>
                <Link to='/'><h1>WorkConnect</h1></Link>   
            </div>
            <div className='nav-bar-right'>
                <ul>
                    
                    {
                    isLoggedIn? 
                    <li onClick={logout}><Link to='/'>Logout</Link></li>:
                    (
                        <React.Fragment>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/sign_up'>Sign up</Link></li>
                        </React.Fragment>
                    )
                    }
                </ul>
            </div>
        </nav>
        <Outlet />
        </React.Fragment>
    )
}

export default Navbar;