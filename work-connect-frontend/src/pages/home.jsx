import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/user.contexts';
import Posts from '../components/posts';
/* css import */
import '../css/home.css';
import '../css/index.css';




function Home() {
    const [posts, setPosts] = useState([]);
    const [searchpost, setSearchPost] = useState('');
    const [checkpost, setCheckpost] = useState('');

    const {isLoggedIn } = useContext(UserContext);
    const [ displayLandingPage, setDisplayLandingPage ] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            setDisplayLandingPage(false);
        } else {
            setDisplayLandingPage(true);
        }
    })

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
        getPost(url);

    }, [])

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
            <section className="App-header">
                <div className='search-post'>
                    <input
                    type='text'
                    name='search'
                    value={searchpost}
                    onChange={(e) => setSearchPost(e.target.value)}></input>
                    <button onClick={handleSearch}>Search</button>
                </div>
                {!checkpost? <Posts posts={posts} /> : <h3>no post found</h3>}
            </section>
            )
        
}

export default Home;