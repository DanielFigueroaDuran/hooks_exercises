import React from 'react'

const PokeCard = ({ pokemon, setPokemon }) => {
  console.log(pokemon);

  // console.log(setPokemon);

   const handleClick = (id) => {
     setPokemon((prev) => {
      return  prev.filter((pokemon) => {
         return pokemon.id !== id
       })
        })
     //console.log(id);

      
   }
 
  
  return (
    
    <div className= {`card ${pokemon.id % 2 == 0 ? "dark" : "light"}`}>
      <h1>{pokemon.name.toUpperCase()}</h1>
      <p>{pokemon.id}</p>
      <img src={pokemon.sprites.front_default} alt="" />
      <button onClick={()=> {handleClick(pokemon.id)}}>Delete</button>
    </div>
  )
}




export default PokeCard