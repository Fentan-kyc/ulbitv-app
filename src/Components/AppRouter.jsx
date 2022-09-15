import React, {useContext} from 'react';
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import PostPage from '../pages/PostPage';
import Posts from "../pages/Posts";
import Login from '../pages/Login';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  if(isAuth)
  {
    return(
      <Routes>
      {privateRoutes.map(route => 
        <Route key={route.path} path={route.path} element={route.component}/>
      )}
      <Route path='*' element={<Error/>}/>
      <Route path='/' element={<Posts/>}/>
    </Routes>
    )
  }
  else{
    return (
      <Routes>
        {publicRoutes.map(route => 
          <Route key={Math.random()} path={route.path} element={route.component}/>
        )}
        <Route path='*' element={<Error/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    )
  }
}

export default AppRouter