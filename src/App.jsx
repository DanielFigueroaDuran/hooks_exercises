import { useState } from 'react'
import LikeButton from "./components/LikeButton";
import ParentComponent from './components/ParentComponent';
import PokeList from "./components/PokeList.jsx";
import AppDadJoke from './components/AppDadJoke';



function App() {


  return (

    <div className='container'>
      {/* <div><LikeButton/></div>

          <div className='container2'>
               <ParentComponent/>
          </div> */}

      {/* <PokeList/>  */}

      <AppDadJoke />


    </div>


  )
}

export default App
