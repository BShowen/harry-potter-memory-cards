import React from "react";

export function Card({ handleClick, id, cardData }) {
  const style = {
    border: "3px solid green",
    margin: "5px",
    padding: "5px",
  };

  const clickHandler = () => {
    console.log({ id, name: cardData.name });
  };
  return (
    <div
      className="game-card"
      style={style}
      onClick={() => {
        clickHandler();
        handleClick(id);
      }}
    >
      <h1>{id}</h1>
    </div>
  );
}
