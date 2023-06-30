import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user.contexts';

const UserLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const  navigate = useNavigate();

    const { setIsLoggedIn } = useContext(UserContext);

    const handleSubmit = async (event) => {

        event.preventDefault();
        const url = 'http://localhost:8000/api/login/';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });
        const data = await response.json();
        if (response.status === 202) {
            localStorage.setItem('token', data.token);
            setIsError(false);
            setErrorMessage("");
            setIsLoggedIn(true);
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
                <label htmlFor="username">Username: 
                    <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label htmlFor="pass">Password: 
                <input
                type="password"
                name="pass"
                id="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
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