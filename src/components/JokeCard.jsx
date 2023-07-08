import React from 'react'

const JokeCard = ({ joke }) => {
  //console.log(joke);
  return (
    <div className='jokeCard'>
      {joke.joke}
    </div>
  )


}

export default JokeCard