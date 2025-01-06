import React, { useState } from "react";
import "../Components/Styles/Dice.css";
import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";

const diceImages = [null, dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = ({ resetScore, selectedNumber, onDiceRoll }) => {
  const [currentDice, setCurrentDice] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  const handleDiceClick = () => {
    setIsRolling(true);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setCurrentDice(randomNumber);
      onDiceRoll(randomNumber);
      setIsRolling(false);
    }, 1000);
  };

  return (
    <div id="main" className="flex flex-col items-center">
      <div className="w-[250px] h-[301px]">
        <div className="w-[250px] ">
          <h1 className="ml-10">Selected Number = {selectedNumber}</h1>
          <img
            src={diceImages[currentDice]}
            alt="Dice"
            className={`dice-img ${isRolling ? "rolling" : ""}`}
            onClick={handleDiceClick}
          />
        </div>
        <h1 className="flex justify-center">Click on Dice to roll</h1>
      </div>
      <div className="flex flex-col gap-5">
        <button id="reset" onClick={resetScore}>
          Reset Score
        </button>
        <button id="btn" onClick={toggleDiv}>
          {isVisible ? "Hide Rules" : "Show Rules"}
        </button>
        {isVisible && (
          <div className="absolute bg-red-200 mt-[152px] ml-[-15rem] p-4 rounded-lg">
            <h1 className="text-center text-[24px]">How to play dice game</h1>
            <ul className="text-sm">
              <li>Select any number</li>
              <li>Click on dice image</li>
              <li>
                After click on dice if selected number is equal to dice number
                you will get same point as dice
              </li>
              <li>If you get wrong guess then 2 point will be deducted</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dice;
