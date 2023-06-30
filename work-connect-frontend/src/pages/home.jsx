import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Posts from '../components/posts';
import Navbar from './navbar';
/* css import */
import '../css/home.css';




function Home() {

    const [posts, setTitle] = useState([]);

    const getPost = async (url) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Token ${token}`
                }});
            const data = await response.json();
            if (response.status === 200) {
                // console.log(data);
                // console.log(data[0].title);
                setTitle(data);
            } else {
                console.log(data.error);
            }
        } catch (error) {
            console.log(error);
    
    }};

    useEffect (() => {
        const url = 'http://localhost:8000/api/post/';
        getPost(url);

    }, [])

    useEffect(() => {
        // console.log(posts);// Log the updated title value
    }, [posts]); // Run this effect only when the title changes


    return (
    <React.Fragment>
        <Navbar />
        <div className="home-page">
            <section className="App-header">
                <h1>WorkConnect App</h1>
                <h3>Welcome to WorkConnect App</h3>
                {/* {posts} */}
                <br />
            </section>
        </div>
    </React.Fragment>)
}

export default Home;