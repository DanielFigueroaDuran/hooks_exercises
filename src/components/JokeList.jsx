import React from 'react'
import JokeCard from './JokeCard';

const JokeList = ({ jokes }) => {
  //const joke = jokes;
  //console.log(jokes);

  return (
    <div className='jokeContainer'>
      {jokes.map((element, i) => <JokeCard key={i} joke={element} />)}
    </div>
  )
}

export default JokeList