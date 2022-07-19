import React, { useState } from 'react'
import MyButton from './UI/buttons/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create({ ...post, id: Date.now() })
        setPost({ title: '', body: '' })
    }
    return (
        <form>
            <MyInput onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder="Name" value={post.title} />
            <MyInput onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder="Description" value={post.body} />
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    )
}

export default PostForm