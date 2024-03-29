import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate()
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
                    <MyButton onClick= {() => router('/posts/' + props.post.id)} >Открыть</MyButton>
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem