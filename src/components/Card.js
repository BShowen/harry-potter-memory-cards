import React from "react";
import { CardImage } from "./CardImage";
export function Card({ handleClick, id, cardData }) {
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
      <CardImage characterName={cardData.name} imageUrl={cardData.image.src} />
      <p>{cardData.name}</p>
    </div>
  );
}
