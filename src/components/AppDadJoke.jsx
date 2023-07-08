import React, { useEffect, useState } from 'react'
import JokeList from './JokeList';
import ButtonDadJokes from './ButtonDadJokes';

const AppDadJoke = () => {

  const [categories, setCategories] = useState('car');
  const [jokes, setJokes] = useState([]);




  const apiDadJoke = `https://icanhazdadjoke.com/search?term=${categories}&limit=5`;

  const getData = async (url) => {
    try {
      const response = await fetch(url, {
        headers: {
          "Accept": "application/json",
        }
      });
      const data = await response.json();
      const newData = data.results;

      //console.log(newData);
      setJokes(newData);


    } catch (error) {
      console.log('Error');
    };

  };

  useEffect(() => {
    getData(apiDadJoke);
  }, [categories])

  //console.log(categories);

  return (
    <>
      <div className='btnGroup'>
        <ButtonDadJokes txt={"Birds"} setCategories={setCategories} />
        <ButtonDadJokes txt={"Duck"} setCategories={setCategories} />
        <ButtonDadJokes txt={"Hipster"} setCategories={setCategories} />
        <ButtonDadJokes txt={"Dad"} setCategories={setCategories} />
      </div>

      <JokeList jokes={jokes} />
    </>

  )
}

export default AppDadJoke