import React, { useState } from 'react'
import Number from './Number'
import Dice from './Dice'
import '../Components/Styles/Game.css'
const Game = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedDice, setSelectedDice] = useState(1);
  const [total, setTotal] = useState(0);
  const resetScore = ()=>{
    setTotal(0);
    setSelectedDice(1);
    setSelectedNumber(1);
  }
  const handleDiceSelect = (diceNumber)=>{
    setSelectedDice(diceNumber);
    winCondition(diceNumber, selectedNumber);
  }
  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    }

    const winCondition = (diceNumber, selectedNumber)=>{
      if(diceNumber === selectedNumber){
        setTotal((prevTotal)=> prevTotal+4);
    } else{
      setTotal((prevTotal) => prevTotal-2);
    }
  }

  return (
    <div className='flex flex-col '>
        <Number total={total} onNumberSelect={handleNumberSelect}/>
        <div className='flex justify-center min-h-[40rem] mt-[4rem] '>
        <Dice resetScore={resetScore} selectedNumber={selectedNumber} onDiceRoll={handleDiceSelect}/>
        
        </div>
        
      
    </div>
  )
}

export default Game
