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
    <div className='py-5 bg-padding-x margin-nav'>
        <div className='post-form w-100 w-lg-75'>
            <form onSubmit={handleSubmit}>
              <div className="w-100 w-lg-75 mb-5">
                <label className='fs-2'>Title:</label><br />
                <input className='p-3 border' name='title' placeholder='post title' value={postInfo.title} onChange={handleChange}></input>
              </div>
                
              <div className="w-100 w-lg-75">
                <label className='fs-2'>Content:</label><br />
                <textarea className='p-3 me-5 border' name='content' rows='4' cols='50' placeholder='post content' value={postInfo.content} onChange={handleChange}></textarea>
              </div>

              <button className="btn btn-outline-primary fw-bold px-5 py-3 mt-3" type='submit'>Create</button>
            </form>
        </div>
    </div>
  )
}

export default CreatePost;