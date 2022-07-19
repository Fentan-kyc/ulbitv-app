import React from 'react'
import PostItem from './PostItem'

const PostList = (props) => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{props.title}</h2>
            {props.posts.map((post, index) =>
                <PostItem number={index + 1} post={post} />)}
        </div>
    )
}

export default PostList