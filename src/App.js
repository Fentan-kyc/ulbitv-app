import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/UI/navbar/Navbar";
import './styles/App.css'

function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    </BrowserRouter>
  )
}

export default App;   
