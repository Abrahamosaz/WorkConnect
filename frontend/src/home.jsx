import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';


function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>WorkConnect App</h1>
                <h3>Welcome to WorkConnect App</h3>
                <br />
                <Link to='/sign_up'>Sign Up</Link>
            </header>
        </div>
    )
}

export default Home;