import { useState } from 'react';

import Die from "./Die";
import { nanoid } from "nanoid";

export default function LuckyCast() {

  // let isRoll = true;
  const [ isRoll, setIsRoll ] = useState(true);

  function diceNumber() {
    return Math.ceil(Math.random() * 6);
  }

  function dataFactory() {
   return Array.from(Array(10), ()=> {
    return {
      id: nanoid(),
      isFreezed: false,
      value: diceNumber(),
      }
    })
  }

  const [ diceData, setDiceData ] = useState(dataFactory());
  // console.log(diceData);

  const Dice = Array.from(diceData, (data) => {
    return <Die key={data.id} value={data.value} isFreezed={data.isFreezed} />
  })

  function onRoll() {
    setIsRoll(!isRoll);
  }

  return (
    <div>
      <div className="luckycast">
        {Dice}
      </div>
      <button onClick={onRoll} className="rollGame">{ isRoll ? "Roll" : "New Game" }</button>
    </div>
  );
}
