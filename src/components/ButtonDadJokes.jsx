import React from 'react'

const ButtonDadJokes = ({ txt, setCategories }) => {
  //console.log(txt, setCategories);

  const handleClick = () => {
    setCategories(txt)
  }

  return (

    <button onClick={handleClick} className='btnJoke'>{txt}</button>

  )
}

export default ButtonDadJokes