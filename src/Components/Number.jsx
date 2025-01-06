import React, { useState } from "react";
import "../Components/Styles/Number.css";

const Number = ({ total, onNumberSelect }) => {
  // total and onNumberSelect is the props
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className=" ml-[150px] mt-[50px] " id="main">
      <div className="w-[135px] h-[151px] gap-[3px] ">
        <h1 className="text-[5rem] w-[135px] h-[112px] text-center">{total}</h1>
        <p className="text-[22px] text-center w-[135px] h-[36px] font-bold ">
          Total Score
        </p>
      </div>

      <div className=" ml-[55rem]">
        <div className="flex gap-[24px] w-[552px] h-[100px] p-2 ">
          {numbers.map((num) => (
            <button
              key={num}
              className="border border-black w-[72px] h-[72px]"
              id="btns"
              onClick={() => onNumberSelect(num)}
              title={`Select ${num}`}
            >
              {num}
            </button>
          ))}
        </div>
        <h1 id="select" className="ml-[23rem] text-center">
          Select Number
        </h1>
      </div>
    </div>
  );
};

export default Number;
