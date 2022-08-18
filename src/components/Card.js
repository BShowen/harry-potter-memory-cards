import React, { useState } from "react";

export default function Card() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
  };

  const style = {
    border: "1px solid red",
    margin: "5px",
    padding: "5px",
  };
  return (
    <div className="game-card" style={style} onClick={clickHandler}>
      <h1>{clicked.toString()}</h1>
    </div>
  );
}
