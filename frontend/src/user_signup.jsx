import React from 'react';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, Navigate } from 'react-router-dom';

function UserSignup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/signup_success');
    }

    return (
        <div className="App App-header">
            <h1>Create an Account</h1>
            <h3>Set up your WorkConnect App in seconds</h3>
            <small>We only need a few details</small>
            <br />
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name: 
                    <input
                    type="text"
                    name="full_name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
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
                <label htmlFor="pass_confirm">Confirm Password: 
                    <input type="password" name="pass_confirm" id="pass_confirm" />
                </label>
                <br />

                <input type="submit" value="Sign Up" />
            </form>
            <br />

            <p>Already signed up?</p>
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default UserSignup;