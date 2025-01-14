export default function Die(props) {

  return (
    <button className={`die ${props.isFreezed ? 'freezed' : null} `}>
      {props.value}
    </button>
  );
}
