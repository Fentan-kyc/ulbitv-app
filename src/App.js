import React, { useState } from "react";
import PostItem from "./Components/PostItem";
import './styles/App.css'

function App() {

  const [posts,setPosts] = useState([
    {id: 1, title: 'PHP', body: 'DH'},
    {id: 2, title: 'Js', body: 'Hs'}
  ]);

  return (
    <div className="App">
      {posts.map(post =>
        <PostItem post = {post}/>)} 
    </div>
  );
}

export default App;   
