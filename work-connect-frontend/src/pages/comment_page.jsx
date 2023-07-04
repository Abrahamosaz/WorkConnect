import React, { useContext, useState, useRef} from 'react';
import { UserContext } from '../contexts/user.contexts';
import '../css/index.css';

const CommentPage = () => {

  const { postObject, setPostObject } = useContext(UserContext);
  const [commentvalue, setCommentValue] = useState('');
  const buttonRef  = useRef(null);

  const { id } = postObject.post;

  const postComment = async () => {
    const response = await fetch(`http://localhost:8000/api/post/${id}/comments/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${localStorage.getItem('token')}` },
        body: JSON.stringify({ content: commentvalue })
    });
    const data = await response.json();
    if (response.status === 201) { 
        setPostObject(() => {
            return {post: postObject.post, comments: [...postObject.comments, data] }
        })
        setCommentValue('');
    } else {
        console.log('error');
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
        buttonRef.current.click();
    }
  };


  return (
    <div className='container'>
        <div className='comment-post'>
            <div key={postObject.post.id}>
                <h2>{postObject.post.title}</h2>
                <p>{postObject.post.content}</p>
                <b><small>author: {postObject.post.author.username}</small></b>
                <hr></hr>
            </div>
            {postObject.comments.map((comment) => {
                const { id, content, created_at } = comment;
                return (<div key={id}>
                    <div className='display-comment'>
                        <h3>{content}</h3>
                        <h4><small>created at: {created_at}</small></h4>
                    </div>
                </div>)
            })
            }
            <div className='input-comment'>
                <input type='text'
                value={commentvalue}
                onChange={(e) => setCommentValue(e.target.value)}
                onKeyDown={handleKey}></input>
                <button type='submit' onClick={postComment} ref={buttonRef}>Add comment</button>
            </div>
        </div>
    </div>
  )
}

export default CommentPage