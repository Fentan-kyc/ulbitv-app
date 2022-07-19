import React, { useState } from "react";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import './styles/App.css'
import MyButton from "./Components/UI/buttons/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'PHP', body: 'DH' },
    { id: 2, title: 'Js', body: 'Hs' }
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList title='List' posts={posts} />
    </div>
  );
}

export default App;   
