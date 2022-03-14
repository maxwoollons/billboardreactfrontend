import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Posts from './posts'

function Home(){
    const [username,setUsername] = useState('') 
    const [password,setPassword] = useState('') 
    const axios = require('axios').default;
    
  let postdata = (e) => {
      e.preventDefault();
  
  
  
    let res = axios.put('http://localhost:5000/users/add', { "username": username, "password": password});
  
  
  };
  
  let updateU = (e) => {
    setUsername(e.target.value)
  }
  let updateP = (e) => {
    setPassword(e.target.value)
  }
   
  
  
    return (
      <div className="App">
        <form>
          <input type="text" onChange={updateU} /><br />
          <input type="text" onChange={updateP} name="pass" id="pass" /><br />
          <button onSubmit={postdata}>Submit</button>
        </form>
        <Posts />
      </div>
    );
  }
  
  export default Home;
  