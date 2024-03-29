import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFething';

const PostPage = () => {
    const params = useParams();
    const [post,setPost] = useState({});
    const [comments,setComments] = useState([])
    const [fetchingPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchingComments, isComLoading, comError] = useFetching( async (id) => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
      console.log(comments)
  });

    useEffect(() => {
        fetchingPostById(params.id)
        fetchingComments(params.id)
    }, []);

  return (
    <div>
    <h1>Страница поста {params.id}</h1>

    {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
    }

    <h1>Комментарии</h1>

    {isComLoading
        ? <Loader/>
        : <div>{comments.map( (comm) => <div key={comm.id} style={{marginTop: 15}}><h5>{comm.email}</h5><div>{comm.body}</div> </div>)}</div>
    }
    
    </div>
  )
}

export default PostPage