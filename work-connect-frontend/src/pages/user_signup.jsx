import React, { useContext } from 'react';
import { useState, createContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, Navigate } from 'react-router-dom';
import '../css/user_signup.css';
import { UserContext } from '../contexts/user.contexts';

function UserSignup() {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setCofirmpassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");


    
    const navigate = useNavigate();

    const { setIsLoggedIn } = useContext(UserContext);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = 'http://localhost:8000/api/users/';
        const response = fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                first_name: firstname,
                last_name: lastname,
                confirm_password: confirmpassword
            })
        });
        const data = await response;
        const json_data = await data.json()
        if (data.status === 201) {
            console.log('success');
            localStorage.setItem('token', data.token);
            setIsError(false);
            setError("");
            setUsername("");
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
            setCofirmpassword("");
            setIsLoggedIn(true);
            navigate('/user_type');
        } else {
            setIsError(true);
            setError(json_data.error);
        }
    }

    return (
        <React.Fragment>
        <div className="sign-up">
            <h1>Create an Account</h1>
            <h3>Set up your WorkConnect App in seconds</h3>
            <small>We only need a few details</small>
            <br />
            <h3>{isError && error}</h3>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">UserName:</label>
                    <input
                    type="text"
                    name="userName"
                    id="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                <label htmlFor="firstname">FirstName:</label>
                    <input
                    type="text"
                    name="firstName"
                    id="email"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                <label htmlFor="last_name">LastName:</label>
                    <input
                    type="text"
                    name="lastName"
                    id="last_name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    name="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                <label htmlFor="pass">Password:</label>
                <input 
                type="password"
                name="pass"
                id="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                <label htmlFor="pass_confirm">Confirm Password:</label>
                    <input
                    type="password"
                    name="pass_confirm"
                    id="pass_confirm"
                    value={confirmpassword}
                    onChange={(e) => setCofirmpassword(e.target.value)} />
                </div>
                <div>
                <input type="submit" value="Sign Up" />
                </div>
            </form>
            <br />

            <p>Already signed up?</p>
            <Link to='/login'>Login</Link>
        </div>
        </React.Fragment>
    );
}

export default UserSignup;