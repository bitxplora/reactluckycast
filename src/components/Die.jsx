export default function Die(props) {

  function dieFactory(numberOfDots) {
    return Array.from(Array(numberOfDots), () => {
      return <div key={nanoid()} className="dot"></div>
    })
  }

  return (
    <button onClick={() => props.freeze(props.id)} className={`die dice-${props.value} ${props.isFreezed ? 'freezed' : ''} `}>
      {dieFactory(props.value)}
    </button>
  );
}
