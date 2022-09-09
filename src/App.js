import React, { useMemo, useState } from "react";
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

  const [selectedSort, setSelectedSort] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts  = useMemo(() => {
    console.log("memo");
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;

  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  },[searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr style={{margin: '15px 0px'}}/>

      <MyInput type='text' placeholder = 'Поиск...' value = {searchQuery} onChange = {e => setSearchQuery(e.target.value )}/>

      <MySelect
        defaultOpt="Sort by"
        value={selectedSort}
        onChange={sortPosts}
        opts={[
          { value: 'title', name: 'title' },
          { value: 'body', name: 'body' }
        ]}
      />

      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} title='List' posts={sortedAndSearchedPosts} />
        : <h1 style={{ textAlign: 'center' }}>Not Found</h1>
      }
    </div>
  );
}

export default App;   
