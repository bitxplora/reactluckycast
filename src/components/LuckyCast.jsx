import { useState } from 'react';

import Die from "./Die";
import { nanoid } from "nanoid";

export default function LuckyCast() {

  function diceNumber() {
    return Math.ceil(Math.random() * 6);
  }

  const data = Array.from(Array(10), ()=> {
    return {
      id: nanoid(),
      isFreezed: false,
      value: diceNumber(),
    }
  })

  const [ diceData, setDiceData ] = useState(data);

  const Dice = Array.from(diceData, (data) => {
    return <Die key={data.id} value={data.value} isFreezed={data.isFreezed} />
  })

  return (
    <div>
      <div className="luckycast">
        {Dice}
      </div>
      <button>Roll</button>
    </div>
  );
}
