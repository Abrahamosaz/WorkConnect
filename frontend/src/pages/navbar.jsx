import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import '../css/nav-bar.css';
import '../css/index.css';
import '../css/home.css';
import { UserContext } from "../contexts/user.contexts";

function Navbar() {

    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [users, setUsers] = useState([]);
    const [trigger, setTrigger] = useState(true);

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        setToken(null);
        setIsLoggedIn(false);
        navigate('/');
    }


    useEffect(() => {
        if (token === null || token === '') {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, [])

    useEffect(() => {
        console.log('useEffct run');
        if (localStorage.getItem('token')) {
            fetch('https://workconnect-production.up.railway.app/api/all-users/', {
                headers: { Authorization: `Token ${localStorage.getItem('token')}`}
            })
            .then((response) =>  {
                return response.json();
            })
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
        } else {
            setTrigger(!trigger)
        }
    }, [trigger]);

    const home_route = isLoggedIn ? '/home' : '/';

    const handleProfileClick = async () => {
        const response = await fetch('https://workconnect-production.up.railway.app/api/check_user/', {
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
            <nav className="navbar navbar-expand-lg px-5 bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                    <h1 className=""><Link to='/' className='navbar-brand me-auto fs-2'>WorkConnect</Link></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            {
                            isLoggedIn?
                            <React.Fragment>
                            <li className="nav-item" onClick={() => navigate('/jobs')}><Link className="nav-link active">Apply for Jobs</Link></li>
                            <div className='dropdown'>
                                <li className='nav-item'><Link className='nav-link'>Friends</Link></li>
                                <div className='dropdown-content'>
                                    {users && users.map((user) => {
                                        return (<div style={{margin: '5px', display: 'flex', alignItems: 'center'}} key={user.id}>
                                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: 'solid black 2px'}}></div>
                                            <div><p style={{fontWeight: 'bold', marginLeft: '5px', alignText: 'center'}}>{user.username}</p></div>
                                        </div>)
                                    })}

                                </div>
                            </div>
                            <li className="nav-item" onClick={() => navigate('/home')}><Link className="nav-link">Home</Link></li>
                            <li className="nav-item" onClick={logout}><Link to='/' className="nav-link">Logout</Link></li>
                            <li className="nav-item" onClick={handleProfileClick}><Link className="nav-link">Profile</Link></li>
                            </React.Fragment>
                            :
                            (
                                <React.Fragment>
                                    <li className="nav-item"><Link to='/login' className="nav-link">Login</Link></li>
                                    <li className="nav-item"><Link to='/sign_up' className="nav-link">Sign up</Link></li>
                                </React.Fragment>
                            )
                            }
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
            </div>
        </div>
        </nav>
        <Outlet />
        </React.Fragment>
    )
}

export default Navbar;