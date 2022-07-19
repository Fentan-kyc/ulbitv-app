import React, { useState } from "react";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import './styles/App.css'
import MyButton from "./Components/UI/buttons/MyButton";
import MyInput from "./Components/UI/input/MyInput";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'PHP', body: 'DH' },
    { id: 2, title: 'Js', body: 'Hs' }
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault()

    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form>
        <MyInput onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder="Name" value={post.title} />
        <MyInput onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder="Description" value={post.body} />
        <MyButton onClick={addNewPost}>Create</MyButton>
        <PostList title='List' posts={posts} />
      </form>
    </div>
  );
}

export default App;   
