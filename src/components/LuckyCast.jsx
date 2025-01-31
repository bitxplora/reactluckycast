import { useState, useRef } from 'react';

import Die from "./Die";
import { nanoid } from "nanoid";

export default function LuckyCast() {

  const [ isRoll, setIsRoll ] = useState(true);

  // This holds the value of the first freeze button.
  // It can only be changed by starting new game.
  const freezeRef = useRef(null);

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

  const Dice = Array.from(diceData, (data) => {
    return <Die key={data.id} id={data.id} value={data.value} isFreezed={data.isFreezed} freeze={freeze} />
  })

  function onRoll() {
    let newDiceData = diceData.map((newData) => {
      if (newData.isFreezed) {
        return { ...newData }
      } else {
        return { ...newData, id: nanoid(), value: diceNumber()  }
      }
    });
    setDiceData(newDiceData);
  }

  function freezeCheck(value) {
    if (freezeRef.current === null) {
      freezeRef.current = value;
      return true;
    } else if (freezeRef.current === value) {
      return true;
    } return false;
  }

  function freeze(id) {
    let freezedData = diceData.map((data) => {
      if (data.id === id && data.isFreezed === false) {
        if (freezeCheck(data.value)) {
          return { ...data, isFreezed: true }
        } else {
          return data;
        }
      } else {
        return data;
      }
    });
    setDiceData(freezedData);
  }

  return (
    <div className="luckycastcontainer">
      <div>
        <p>LuckyCast</p>
        <p>
           Choose a number and click on the dice that show that value to freeze it.
           Then roll and freeze until all the dice show the same number.
           Click each die to freeze it at its current value between rolls.
        </p>
      </div>
      <div className="luckycast">
        {Dice}
      </div>
      <button onClick={onRoll} className="rollGame">{ isRoll ? "Roll" : "New Game" }</button>
    </div>
  );
}
