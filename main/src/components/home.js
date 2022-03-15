import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Posts from './posts'
import "../App.css"

function Home(){

  
  
    return (
      <div className="App">
        <Posts />
      </div>
    );
  }
  
  export default Home;
  