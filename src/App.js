import React, { useMemo, useState, useEffect } from "react";
import Govno from "./Components/Govno";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import './styles/App.css'
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'PHP', body: 'DH' },
    { id: 2, title: 'Js', body: 'Hs' }
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sortm, filter.query)

  async function fetchPosts(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data)
    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{marginTop: 30}} onClick={()=> setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
        </MyModal>
      

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
