import React, { useState } from 'react'
import Button from './Button'

const ParentComponent = () => {
 
   const [dark, setDark] = useState("light");
    
   
  const handleClick = () => {
    setDark (prev => prev === "light" ? "dark" : "light");
    
  };


  return (
    <div className={`container2 ${dark}`}>
      <h1>Ejercicios</h1>
      <p>Lorem ipsum dolor sit amet consectetur   adipisicing elit. Quis        architecto a quas, ab  non ipsam eaque fugiat et deserunt quia  corporis, excepturi, voluptates cum  voluptatem aspernatur ipsum laboriosam   reprehenderit impedit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto a quas, ab non ipsam eaque fugiat et deserunt quia corporis, excepturi, voluptates cum voluptatem aspernatur ipsum laboriosam reprehenderit impedit.</p>
      < Button onClick={handleClick} setDark= {dark} />
    </div>
    
  )
}

export default ParentComponent