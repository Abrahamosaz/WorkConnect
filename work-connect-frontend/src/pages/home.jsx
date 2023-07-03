import React, { useEffect, useState, useRef } from 'react';
import Posts from '../components/posts';
/* css import */
import '../css/home.css';




function Home() {

    const [posts, setPosts] = useState([]);
    const [searchpost, setSearchPost] = useState('');
    const [checkpost, setCheckpost] = useState('');

    const buttonRef = useRef(null);
    const inputRef = useRef(null);

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

        inputRef.current.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                buttonRef.current.click();
            }
        });

        getPost(url);

    }, []);

    useEffect(() => {}, [posts]);

    const handleSearch = async () => {
        const  response = await fetch(`http://localhost:8000/api/post/?title=${searchpost}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        });
        const data = await response.json();
        if (data.length > 0) {
            setPosts(data);
            setCheckpost(false);
        } else {
            setCheckpost(true);
        }
    };


    return (
    <React.Fragment>
        <div className="home-page">
            <section className="App-header">
                <h1>WorkConnect App</h1>
                <h2>Welcome to WorkConnect App</h2>
                <br />
                <div className='search-post'>
                    <input
                    type='text'
                    name='search'
                    value={searchpost}
                    onChange={(e) => setSearchPost(e.target.value)} ref={inputRef}></input>
                    <button onClick={handleSearch} ref={buttonRef}>Search</button>
                </div>
                {!checkpost? <Posts posts={posts} /> : <h3>no post found</h3>}
            </section>
        </div>
    </React.Fragment>)
}

export default Home;