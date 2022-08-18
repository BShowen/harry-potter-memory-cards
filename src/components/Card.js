import React, { useState } from "react";

export default function Card(props) {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    if (clicked) {
      props.resetScore();
    } else {
      props.incrementScore();
      setClicked(true);
    }
  };

  const style = {
    border: clicked ? "3px solid red" : "3px solid green",
    margin: "5px",
    padding: "5px",
  };
  return (
    <div className="game-card" style={style} onClick={clickHandler}>
      <h1>{clicked.toString()}</h1>
    </div>
  );
}
