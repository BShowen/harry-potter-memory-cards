import React from "react";
import { CardImage } from "./CardImage";
export function Card({ cardData, shuffleCards, flippedProps, setScore }) {
  return (
    <div
      className="card p-1 m-1 border-0 col-5 col-sm-4 col-md-3 col-lg-2"
      {...flippedProps} //Flipper render props must be added to the container
      onClick={() => {
        shuffleCards();
        setScore(cardData.name);
      }}
    >
      <CardImage characterName={cardData.name} imageUrl={cardData.image.src} />
      <div className="card-body bg-dark px-1 py-0 text-center rounded-bottom">
        <p className="card-text text-light p-0 m-0">{cardData.name}</p>
      </div>
    </div>
  );
}
