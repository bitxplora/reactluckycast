import { nanoid } from 'nanoid';

export default function Die(props) {

  function dieFactory(numberOfDots) {
    return Array.from(Array(numberOfDots), () => {
      return <div key={nanoid()} className="dot"></div>
    })
  }

  return (
    <button className={`die dice-${props.value} ${props.isFreezed ? 'freezed' : ''} `}>
      {dieFactory(props.value)}
    </button>
  );
}
