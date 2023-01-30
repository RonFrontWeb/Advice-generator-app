import '../components/Button.scss'
import axios from 'axios'
import React, {useState,useEffect } from "react";

const baseURL = "https://api.adviceslip.com/advice";

function Button({setPosts}) {
    
  function handleOnClick() {
    axios.get(baseURL)
    .then(response => {
      setPosts(response.data)
      // handle success
      // console.log(response.data)
    }) 
    .catch(error => {
       // handle error
       console.log(error)
    });
  }
  
  return (
      
      <button onClick={handleOnClick} className='icon'>
        <img className='icon__svg' src="./images/icon-dice.svg" alt="dice" />
      </button>   
  )
}
export default Button
