import React, { useState } from 'react'

const LikeButton = () => {

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [color, setColor] = useState(0); 
  const [color2, setColor2] = useState(0);
  

  const [likeCounter, setlikeCounter] = useState(0);
  const [counter, setCounter] = useState(0);

  

  
  const handleClick = () => {
    setlikeCounter(pre => pre += 1);
    setColor (pre => Math.floor(Math.random()*6) )
    
  };
  
  const handleClick2 = () => {
    setCounter(pre => pre += 1);
    setColor2 (pre => Math.floor(Math.random()*6) )
  };

 

  return (
    <div>
      
      <button style={{backgroundColor:`${colors[color]}`}} onClick={handleClick}><span>{likeCounter}</span>likes</button>
      
      <button style={{backgroundColor:`${colors[color2]}`}} onClick={handleClick2}><span>{ counter}</span>likes</button>
    </div>
  )
}

export default LikeButton