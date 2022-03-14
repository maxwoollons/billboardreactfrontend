import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Posts from './components/posts'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from './components/home'
import Errorpage from "./components/errorpage.js"
import Login from "./components/login.js"







function App(){
  return (
    <>
    <Router>
      <li><a href="/">Home</a></li>
      <li><a href="/login">Login</a></li>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
  </Router> 
  </>
  )
  
}

export default App;
