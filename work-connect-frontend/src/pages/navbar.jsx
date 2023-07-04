import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import '../css/nav-bar.css';
import { UserContext } from "../contexts/user.contexts";

function Navbar() {

    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsLoggedIn(false);
        navigate('/auth/login');
    }


    useEffect(() => {
        if (token === null || token === '') {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, [])

    const handleProfileClick = async () => {
        const response = await fetch('http://localhost:8000/api/check_user/', {
            headers: { Authorization: `Token ${localStorage.getItem('token')}` }
        });
        const data = await response.json();
        if (response.status === 200) {
            (data.user === 'employee')? navigate('/profile_employee_page'): navigate('/profile_employer_page');
        } else {
            console.log(data);
        }
    };

    return (
        <React.Fragment>
        <nav className='nav'>
            <div className='nav-bar-left'>
                <Link to='/'><h1>WorkConnect</h1></Link>   
            </div>
            <div className='nav-bar-right'>
                <ul>
                    <li onClick={() => navigate('/')} className="btn">Apply for jobs</li>
                    <li onClick={() => navigate('/')} className="btn">Hire Developers</li>
                    {
                    isLoggedIn?
                    <React.Fragment>
                        <li onClick={handleProfileClick} className="btn">Profile</li>
                        <li onClick={logout} className="btn"><Link to='/'>Logout</Link></li>
                    </React.Fragment>
                    :
                    (
                        <React.Fragment>
                            <li><Link to='/auth/sign_up' className="btn">Sign up</Link></li>
                            <li><Link to='/auth/login' className="btn">Login</Link></li>
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