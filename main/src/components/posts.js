import React, { useState,useEffect } from 'react'
import axios from 'axios'



function Posts() { 
    const [responsedata, setResponse] = useState([])
    const [userData, setUser] = useState([])
    
    useEffect(() =>{
        
        
       
        axios.get('http://localhost:5000/posts').then(function(response) {
        // handle success
            setResponse(response.data);
            console.log(responsedata)
             
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
     })

    },[])
   

    


  return (
    <div>

       <div className="flex-container">
       {responsedata.map((data, index)=>{
                return (
                
                <div className="box"  key={data.postid} ><h1>{data.user_id} {data.content}</h1>
                <div>By {data.user_id.username}</div>
                </div>
                )
                
              })} 
       
       </div>

    </div>
  )
}

export default Posts