import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from  './navbar';
import '../css/home.css';



function Home() {
    return (<React.Fragment>

        <Navbar />
        <div className="home-page">
            <section className="App-header">
                <h1>WorkConnect App</h1>
                <h3>Welcome to WorkConnect App</h3>
                <br />
                <Link to='/user_type'>Sign Up</Link>
            </section>
        </div>
    </React.Fragment>)
}

export default Home;