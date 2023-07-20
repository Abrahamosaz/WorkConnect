import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Posts from '../components/posts';
/* css import */
import '../css/home.css';
import '../css/index.css';




function Home() {
    const [posts, setPosts] = useState([]);
    const [searchpost, setSearchPost] = useState('');
    const [checkpost, setCheckpost] = useState('');
    const navigate = useNavigate();

    
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
        const url = 'https://workconnect-production.up.railway.app/api/post/';
        getPost(url);

    }, [])

    useEffect(() => {}, [posts]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const  response = await fetch(`https://workconnect-production.up.railway.app/api/post/?title=${searchpost}`, {
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
            <section className="py-5 bg-padding-x margin-nav w-100 abs">
                <div className="text-center my-3">
                <form className="d-flex" role="search">
                    <input 
                    className="form-control me-2" 
                    type="search" 
                    name='search' 
                    value={searchpost} 
                    onChange={(e) => setSearchPost(e.target.value)} 
                    placeholder="Search Posts" 
                    aria-label="Search" />
                    <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
                </form>
                </div>
                <button className="btn btn-outline-dark px-5 py-2 mt-1" onClick={() => navigate('/create-post')}>Create Post</button>
                {!checkpost? <Posts posts={posts} /> : <h3>No post found</h3>}
            </section>
            )
        
}

export default Home;