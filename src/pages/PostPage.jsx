import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFething';

const PostPage = () => {
    const params = useParams();
    const [post,setPost] = useState(0)
    const [fetchingPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchingPostById(params.id)
    }, []);

  return (
    <div>
    <h1>Страница поста {params.id}</h1>

    {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
    }
    </div>
  )
}

export default PostPage