import React from 'react'

const PostItem = (props) => {
  return (
      <div>
          <div className="post" >
              <div className="post__content">
                  <h2 className="post__title">{props.post.id}. {props.post.title}</h2>
                  <div>
                      {props.post.body}
                  </div>                 
              </div>
              <div className="post__btns">
                  <button>Delete</button>
              </div>
          </div>
      </div>
  )
}

export default PostItem