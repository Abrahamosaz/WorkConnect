import React, { useState, useRef, useEffect  }from 'react'

const Comment = ({ props }) => {
  const { id } = props;
  const [allComment, setAllComment] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [comment, setComment] = useState({ content: ''});
  const token = localStorage.getItem('token');

  const commentRef = useRef(null);

  const getComment = async () => {
    setToggle((prev_toggle) => !prev_toggle);

    if (toggle) {
        commentRef.current.style.display = 'inline';
        const url = `http://localhost:8000/api/post/${id}/comments/`;
        const response = await fetch(url, {
            headers: { 'Authorization': `Token ${token}` }
        });
        const comment_data = await response.json();
    
        setAllComment(() => {
            return [...comment_data];
        });
    } else {
        commentRef.current.style.display = 'none';
        setAllComment(() => []);
    }
  }
  
  const postComment = async () => {
    const response = await fetch(`http://localhost:8000/api/post/${id}/comments/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` },
        body: JSON.stringify(comment)
    });
    const data = await response.json();
    setAllComment(() => {
        return [...allComment, data]
    })
    setComment({ content: ''});
  }

  useEffect(() => {
    commentRef.current.style.display = 'none';
  }, []);


  return (
    <div className='comment'>
        <div className='all-comments'>
            {allComment.map((comment) => {
                const { id, content, created_at } = comment;
                return (<div key={id}>
                    <div className='display-comment'>
                        <h3>{content}</h3>
                        <h4><small>created at: {created_at}</small></h4>
                    </div>
                </div>)
            })
            }
        </div>
        <div className='section-comment'>
            <div className='like-posts'><a>Like</a></div>
            <div className='comment-posts'><button onClick={getComment}>comment</button></div>
            <div className='create-comment' ref={commentRef}>
                <input type='text' name='content' value={comment.content} onChange={(e) => setComment({content: e.target.value})}></input>
                <button type='submit' onClick={postComment}>Add comment</button>
            </div>
        </div>
    </div>
  )
}

export default Comment