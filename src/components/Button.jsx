import React, { useState } from 'react'
import ParentComponent from './ParentComponent';



 const Button = (props) => {
  //console.log(props);
  
  return (
    
      <button className={`${props.setDark === "light" ? "black" : "light"}`} onClick={props.onClick}>dark</button>
      
    
  )
}

export default Button