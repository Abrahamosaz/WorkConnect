import React from 'react';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function UserLogin() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="App App-header">
            <h1>Welcome back</h1>
            <h3>Login to your WorkConnect Account</h3>
            <br />
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email: 
                    <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label htmlFor="pass">Password: 
                <input type="password" name="pass" id="pass" />
                </label>
                <br />

                <input type="submit" value="Login" />
            </form>
            <br />

            <p>Don't have an account?</p>
            <Link to='/sign_up'>Register</Link>
        
        </div>
    )
}

export default UserLogin;