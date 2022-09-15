import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/UI/navbar/Navbar";
import { AuthContext } from "./context";
import './styles/App.css'

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setIsLoading(false);
  },[])

  return(
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;   
