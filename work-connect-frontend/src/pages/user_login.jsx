import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user.contexts';

const UserLogin = () => {
    const [userdetails, setUserdetails] = useState({email: '', password: ''});
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const  navigate = useNavigate();

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserdetails({...userdetails, [name]: value});
    };

    const handleSubmit = async (event) => {

        event.preventDefault();
        const url = 'http://localhost:8000/api/login/';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userdetails.email,
                password: userdetails.password,
            })
        });
        const data = await response.json();
        if (response.status === 202) {
            localStorage.setItem('token', data.token);
            setIsError(false);
            setErrorMessage("");
            setIsLoggedIn(true);
            console.log(isLoggedIn);
            navigate('/');
        } else {
            setIsError(true);
            setErrorMessage(data.message);
        }
    }
    return (
        <React.Fragment>
        <div className="App App-header">
            <h1>Welcome back</h1>
            <h3>Login to your WorkConnect Account</h3>
            <br />
            {isError && <h2>{errorMessage}</h2>}
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email: 
                    <input
                    type="email"
                    name="email"
                    id="email"
                    value={userdetails.username}
                    onChange={handleChange} />
                </label>
                <br />
                <label htmlFor="pass">Password: 
                <input
                type="password"
                name="password"
                id="pass"
                value={userdetails.password}
                onChange={handleChange}/>
                </label>
                <br />

                <input type="submit" value="Login" />
            </form>
            <br />

            <p>Don't have an account?</p>
            <Link to='/sign_up'>Register</Link>
        
        </div>
        </React.Fragment>
    )
}

export default UserLogin;