import React from 'react'
import Post from './Post'

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, i) =>
        <Post number={i + 1} post={post} key={post.id} />
      )}
    </div>
  )
}

export default PostList