import Die from "./Die";
import { nanoid } from "nanoid";

export default function LuckyCast() {

  const Dice = Array.from(Array(10), () => {
    return <Die key={nanoid()} value={6} isFreezed={false} />
  })

  return (
    <div className="luckycast">
      {Dice} 
    </div>
  );
}
