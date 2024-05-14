import { useEffect, useState } from "react"
import axios from "axios";
// import React {useState} from 'react'

const App = () => {

const [text, setText]=useState(0);

useEffect(()=>{
  alert("I am Clicked");
});

  return (
    <div>
      <button onClick={() =>{
setText(text+1);
      }}
    
    
  
    >Click Me {text}</button>

    
    </div>
  )
}

export default App
