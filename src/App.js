import React, { useState } from "react";
import Govno from "./Components/Govno";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import './styles/App.css'

function App() {

  const [posts,setPosts] = useState([
    {id: 1, title: 'PHP', body: 'DH'},
    {id: 2, title: 'Js', body: 'Hs'}
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) =>{
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    }

    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <form>
        <MyInput value = {title} onChange = {e => setTitle(e.target.value)} type="text" placeholder="Название"/>
        <MyInput value = {body} onChange = {e => setBody(e.target.value)} type="text" placeholder="Описание"/>
        <MyButton onClick = {addNewPost}>Создать пост</MyButton>
      </form>

      <PostList posts = {posts} title = 'Список бичей'/>
      <div className="container">

      </div>
    </div>
  );
}

export default App;   
