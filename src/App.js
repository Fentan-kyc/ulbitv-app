import React, { useState } from "react";
import Govno from "./Components/Govno";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import './styles/App.css'
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'PHP', body: 'DH' },
    { id: 2, title: 'Js', body: 'Hs' }
  ]);
  const [selectedSort, setSelectedSort] = useState()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr style={{margin: '15px 0px'}}/>

      <MySelect
        defaultOpt="Sort by"
        value={selectedSort}
        onChange={sortPosts}
        opts={[
          { value: 'title', name: 'title' },
          { value: 'body', name: 'body' }
        ]}
      />

      {posts.length !== 0
        ? <PostList remove={removePost} title='List' posts={posts} />
        : <h1 style={{ textAlign: 'center' }}>Not Found</h1>
      }
    </div>
  );
}

export default App;   
