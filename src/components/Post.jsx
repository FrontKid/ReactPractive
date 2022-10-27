import React from 'react'

const Post = ({ number, post }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong className="post__title">{number}. {post.title}</strong>
        <div className="post__text">
          {post.body}
        </div>
      </div>
      <div className="post__btns">
        <button className="post__btn btn">Delete</button>
      </div>
    </div>
  )
}

export default Post