import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';

const PokeList = () => {
  const apiPoke = "https://pokeapi.co/api/v2/pokemon/";


  const [pokemon, setPokemon] = useState([]);
  const [newPokemon, setNewPokemon] = useState([]);
  const [counter, setCounter] = useState(20);

  const getData = async (url) => {

    try {
      const response = await fetch(url);
      const data = await response.json();
      const dataResults = data.results;
      //console.log(data.results);

      const promises = dataResults.map(async (element) => {
        const response2 = await fetch(element.url);
        const dataPok = await response2.json();
        //console.log(dataPok.id);

        return dataPok;

      });
      const promi = await Promise.all(promises);
      // console.log(promi)
      setPokemon(promi)
    } catch (error) {
      console.log('Error');
    }

  }

  //console.log(pokemon);
  const getNewData = async (url) => {
    const response = await fetch(url);
    const newData = await response.json();
    // console.log(newData.results);

    const newPromises = newData.results.map(async (element) => {
      const newResponse = await fetch(element.url);
      const newData2 = await newResponse.json();
      // console.log(newData2);

      return newData2;

    });

    const newPromi = await Promise.all(newPromises);
    return newPromi;
  }

  const handleClick = async () => {
    setCounter(prev => prev += 10);
    let porkeFinal = await getNewData(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${counter}`);
    setPokemon(prev => [...prev, ...porkeFinal])
    console.log(counter);
  }


  useEffect(() => {
    getData(apiPoke);
  }, [])
  console.log(newPokemon);
  return (

    <div className='containerPoke'>
      <button className='btn' onClick={handleClick}>Give me more!</button>
      <div className="containerCard">
        {pokemon.map((element, i) => {
          return <PokeCard key={element.id} pokemon={element} setPokemon={setPokemon} />
        })
        }

        {/* {newPokemon.map((element, i) => {
          return <PokeCard key={i} pokemon={element} setNewPokemon= {setNewPokemon}/>
            })

        } */}
      </div>

    </div>


  )
}

export default PokeList