import React, {useState, useEffect} from "react";
import {usePosts} from '../hooks/usePosts';
import {useFetching} from '../hooks/useFething';
import PostService from '../API/PostService';
import {getPageCount} from '../utils/pages';
import MyButton from '../Components/UI/button/MyButton';
import MyModal from '../Components/UI/MyModal/MyModal';
import PostForm from '../Components/PostForm';
import PostFilter from '../Components/PostFilter';
import Loader from '../Components/UI/Loader/Loader';
import PostList from '../Components/PostList';
import Pagination from '../Components/UI/pagination/Pagination';





function Posts() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'PHP', body: 'DH' },
    { id: 2, title: 'Js', body: 'Hs' }
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sortm, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPages] = useState(1);




  const [fetchPosts, isPostsLoading, postError] = useFetching(async ()=>{
    const responce = await PostService.getAll(limit, page);
    setPosts(responce.data)
    const totalCount = responce.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  })


  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPages(page);
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

      {postError &&
        <h1>Error 404 {postError}</h1>
      }

      {isPostsLoading

      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
      : <PostList remove={removePost} title='List' posts={sortedAndSearchedPosts} />

      }

      <Pagination page = {page} changePage = {changePage} pages = {totalPages}/>
        
    </div>
  );
}

export default Posts;   
