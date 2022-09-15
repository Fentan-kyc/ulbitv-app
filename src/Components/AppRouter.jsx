import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import PostPage from '../pages/PostPage';
import Posts from "../pages/Posts";
import { routes } from '../router';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route => 
        <Route key={Math.random()} path={route.path} element={route.component}/>
      )}
    </Routes>
  )
}

export default AppRouter