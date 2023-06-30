import React, { useEffect, useState } from 'react';
import Posts from '../components/posts';
/* css import */
import '../css/home.css';




function Home() {

    const [posts, setPosts] = useState([]);

    const getPost = async (url) => {
        const token = localStorage.getItem('token');
        if (token)
        {
            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Token ${token}`
                    }});
                const data = await response.json();
                if (response.status === 200) {
                    console.log(data);
                    setPosts(data);
                } else {
                    console.log(data.error);
                }
            } catch (error) {
                console.log(error);
        }
    
    }};

    useEffect (() => {
        const url = 'http://localhost:8000/api/post/';
        getPost(url);

    }, [])

    useEffect(() => {}, [posts]);

    return (
    <React.Fragment>
        <div className="home-page">
            <section className="App-header">
                <h1>WorkConnect App</h1>
                <h2>Welcome to WorkConnect App</h2>
                <br />
                <Posts posts={posts} />
            </section>
        </div>
    </React.Fragment>)
}

export default Home;