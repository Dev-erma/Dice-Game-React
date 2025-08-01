import { useState } from 'react'

import './App.css'

import Startgame from './conmponents/startingpage/Startgame'
import GamePlay from './conmponents/GamePlay/GamePlay';

function App() {
  const[isGameStarted,setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setIsGameStarted(prev => !prev)
  }

  return (
    <>
    {isGameStarted? <GamePlay/>:<Startgame toggle = {toggleGamePlay}/>}
    
    </>
  )
}

export default App
