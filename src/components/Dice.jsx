function Dice(props) {

  style = {
    backgroundColor: green,
  }

  return (
    <button className="dice" style={isFreezed ? style : null}>
      {props.value}
    </button>
  );
}
