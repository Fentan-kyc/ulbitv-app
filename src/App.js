import React, { useMemo, useState } from "react";
import Govno from "./Components/Govno";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import './styles/App.css'
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import PostFilter from "./Components/PostFilter";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'PHP', body: 'DH' },
    { id: 2, title: 'Js', body: 'Hs' }
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts  = useMemo(() => {
    console.log("memo");
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;

  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  },[filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr style={{margin: '15px 0px'}}/>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
        <PostList remove={removePost} title='List' posts={sortedAndSearchedPosts} />
    </div>
  );
}

export default App;   
