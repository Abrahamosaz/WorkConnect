import React, { useState, useRef, useEffect, useContext }from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user.contexts';

const Comment = ({ props }) => {
  const { id } = props;
  const token = localStorage.getItem('token');
  const [likeCount, setLikeCount] = useState(0);
  const likeRef = useRef();

  const navigate = useNavigate();

  const { setPostObject } = useContext(UserContext);

  const getComment = async () => {

    const url = `https://workconnect-production.up.railway.app/api/post/${id}/comments/`;
    const response = await fetch(url, {
        headers: { 'Authorization': `Token ${token}` }
    });
    const comment_data = await response.json();
    if (response.status === 200) {
        setPostObject({post: props, comments: comment_data});
        navigate('/comment-page');
    } else {
        console.log('error');
        console.log(comment_data)
    }
  };

  const handleLikes = () => {
    fetch(`https://workconnect-production.up.railway.app/api/likes/?post_id=${id}`, {
      method: 'POST',
      headers: { Authorization: `Token ${localStorage.getItem('token')}`}
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.check) {
        console.log('check', data);
        fetch(`https://workconnect-production.up.railway.app/api/likes/?post_id=${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Token ${localStorage.getItem('token')}` }
        })
        .then((res) => res.jsson())
        .then((data) => {
          setLikeCount(() => data.like_count);
        })
        .catch((error) => console.log(error))

      } else {
        setLikeCount(() => data.like_count);
      }
    })
    .catch((error) => console.log(error));
  }

  useEffect (() => {
    fetch(`https://workconnect-production.up.railway.app/api/likes/?post_id=${id}`, {
      headers: { Authorization: `Token ${localStorage.getItem('token')}` }
    })
    .then((response) => response.json())
    .then((data) => setLikeCount(() => data.like_count))
    .catch((error) => console.log('error from comment', error));
  }, []);

  return (
    <div className='comment'>
      <div style={{display: 'block'}}>
        <div style={{marginLeft: '20px'}}>{likeCount}</div>
        <div className='all-comments'>
        </div>
        <div className='d-flex'>
            <div className='me-3'>
            <button className='btn btn-light px-3' onClick={handleLikes} ref={likeRef}>Like</button>
            </div>
            <div className=''>
              <button onClick={getComment} className='btn btn-dark px-3'>Comment</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;