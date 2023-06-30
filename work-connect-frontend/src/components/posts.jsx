import React from 'react'

const Posts = ({ posts }) => {
  const postCount = posts.length;
  return (
    <React.Fragment>
    {postCount > 0?
    (<div>
        {posts.map(post=> (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <b><small>{post.author.username}</small></b>
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
