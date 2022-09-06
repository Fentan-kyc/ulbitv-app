import React from 'react';
import MyButton from './UI/buttons/MyButton';

const PostItem = (props) => {
    return (
        <div>
            <div className="post" >
                <div className="post__content">
                    <h2 className="post__title">{props.number}. {props.post.title}</h2>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem