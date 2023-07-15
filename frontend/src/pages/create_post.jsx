import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [postInfo, setPostInfo] = useState({title: '', content: ''});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPostInfo({...postInfo, [name]: value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://workconnect-production.up.railway.app/api/post/';
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Token ${localStorage.getItem('token')}`},
        body: JSON.stringify(postInfo)
    });
    const data = await response.json();
    if (response.status === 201) {
        navigate('/home');
    } else {
        console.log(data);
    }
  };

  return (
    <div className='container'>
        <div className='post-form'>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input name='title' placeholder='post title' value={postInfo.title} onChange={handleChange}></input>
                <br></br>
                <label>Content:</label>
                <textarea name='content' rows='4' cols='50' placeholder='post content' value={postInfo.content} onChange={handleChange}></textarea>
                <input type='submit' value='Create' />
            </form>
        </div>
    </div>
  )
}

export default CreatePost;