import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Game({ gameOver, ...props }) {
  const createCards = () => {
    const cards = [];
    for (let i = 0; i < 14; i++) {
      cards[i] = <Card key={i} data={i} {...props} />;
    }
    return cards;
  };

  const [cards, setCards] = useState(createCards);

  useEffect(() => {
    function shuffleCards() {
      setCards(cards.sort(() => Math.random() - 0.5));
    }

    function handleCardClick(e) {
      e.stopPropagation();
      e.preventDefault();
      const cardWasClicked = e.path.some(
        (item) => item.className === "game-card"
      );
      if (cardWasClicked) shuffleCards();
    }
    document.addEventListener("click", handleCardClick);

    return () => {
      document.removeEventListener("click", handleCardClick);
    };
  }, [cards, gameOver]);

  return <div className="d-flex">{cards}</div>;
}
