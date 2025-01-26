import { useState } from 'react';

import Die from "./Die";
import { nanoid } from "nanoid";

export default function LuckyCast() {

  function diceNumber() {
    return Math.ceil(Math.random() * 6);
  }

  const Dice = Array.from(Array(10), () => {
    return <Die key={nanoid()} value={diceNumber()} isFreezed={false} />
  })

  return (
    <div className="luckycast">
      {Dice} 
    </div>
  );
}
