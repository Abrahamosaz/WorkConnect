import React from 'react'
import '../css/posts.css';
import Comment from  './Comment';


const Posts = ({ posts }) => {
  const postCount = posts.length;
  return (
    <React.Fragment>
    {postCount > 0?
    (<div className='posts'>
        {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <b><small>author: {post.author.username}</small></b>
                    <hr></hr>
                    <Comment props={post} />
                </div>
            )
        )}
    </div>):
    (<div>
          <h4>Login to see posts</h4>
    </div>)
    }
    </React.Fragment>
  )
}

export default Posts;
