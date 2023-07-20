import React from 'react'
import '../css/posts.css';
import '../css/index.css';
import '../css/home.css';
import Comment from  './Comment';


const Posts = ({ posts }) => {

  const postCount = posts.length;
  
  return (
    <React.Fragment>
    {postCount > 0?
    (<div className='mt-5 w'>
        {posts.map(post => (
                <div key={post.id} className='mb-5 post'>
                    <h2 style={{textTransform: 'capitalize'}}>{post.title}</h2>
                    <p>{post.content}</p>
                    <b><small>author: {post.author.username}</small></b>
                    <Comment props={post} />
                    
                </div>
            )
        )}
    </div>):
    (<div className='mt-5'>
          <h3 className='mb-3'>No post at this time</h3>
          <h4>Create a post or check back later.</h4>
    </div>)
    }
    </React.Fragment>
  )
}

export default Posts;
