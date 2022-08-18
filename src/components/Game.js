import React, { useEffect, useState } from "react";
import Card from "./Card";
import useScoreTracker from "./useScoreTracker";

export default function Game() {
  const { incrementScore, resetScore, score } = useScoreTracker();

  const createCards = () => {
    const cards = [];
    for (let i = 0; i < 14; i++) {
      cards[i] = (
        <Card
          key={i}
          data={i}
          incrementScore={incrementScore}
          resetScore={resetScore}
        />
      );
    }
    return cards;
  };

  const [cards, setCards] = useState(createCards);

  useEffect(() => {
    function shuffleCards() {
      setCards([...cards].sort(() => Math.random() - 0.5));
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
  }, [cards]);

  return (
    <>
      <div id="score-display" className="d-flex">
        <div style={{ margin: "10px" }}>
          <p>Score: {score.currentScore}</p>
        </div>
        <div style={{ margin: "10px" }}>
          <p>High score: {score.highScore}</p>
        </div>
      </div>
      <div className="d-flex">{cards}</div>
    </>
  );
}
