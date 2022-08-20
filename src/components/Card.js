import React from "react";

export function Card({ handleClick, id }) {
  const style = {
    border: "3px solid green",
    margin: "5px",
    padding: "5px",
  };

  return (
    <div
      className="game-card"
      style={style}
      onClick={() => {
        handleClick(id);
      }}
    >
      <h1>{id}</h1>
    </div>
  );
}
