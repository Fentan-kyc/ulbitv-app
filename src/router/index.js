import About from '../pages/About';
import Posts from '../pages/Posts';
import PostPage from '../pages/PostPage';
import Login from '../pages/Login';

export const privateRoutes = [
    {path: '/about', component: <About/> },
    {path: '/posts', component: <Posts/> },
    {path: '/posts/:id', component: <PostPage/> }
]

export const publicRoutes = [
    {path: '/login', component: <Login/> },
]