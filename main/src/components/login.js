import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';


const Login = () => {
  const [username,setUsername] = useState('') 
  const [password,setPassword] = useState('') 
  const axios = require('axios').default;
  
const Postdata = (e) => {
    e.preventDefault();
    // const axios = require('axios').default;



    // let res = axios.put('http://localhost:5000/users/add', { "username": username, "password": password});


    console.log("works")
};

let updateU = (e) => {
  setUsername(e.target.value)
}
let updateP = (e) => {
  setPassword(e.target.value)
}
 




  return (
    <div className='reg-background'>
    <div className='registerbox'>
        <h3>Login to your Account</h3>
         <form className='reg' onSubmit={Postdata}>
          <input className='in' type="text" onChange={updateU} name="username" id="password" placeholder='username'/><br />
          <input className='in' type="text" onChange={updateP} name="password" id="pass" placeholder='password' /><br />
          <button className='btn-reg' type='submit'>Submit</button>
        </form> 
     
    </div>
    </div>
    
  )
}

export default Login