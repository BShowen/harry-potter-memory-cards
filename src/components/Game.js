import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import useScoreTracker from "./useScoreTracker";
import { ScoreDisplay } from "./ScoreDisplay";

export default function Game() {
  const [incrementScore, resetScore, score] = useScoreTracker();
  const [clickedCards, setClickedCards] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    function handleCardClick(cardId) {
      if (clickedCards.includes(cardId)) {
        // This card was previously clicked.
        // reset the score
        // reset all the cards to "un-clicked" status
        resetScore();
        setClickedCards([]);
      } else {
        // This card was clicked for the first time.
        // Add id to clickedCards
        incrementScore();
        setClickedCards((prevCardArray) => [...prevCardArray, cardId]);
      }
    }

    setCards(() => {
      const cards = [];
      for (let i = 0; i < 14; i++) {
        cards[i] = <Card key={i} id={i} handleClick={handleCardClick} />;
      }
      return cards;
    });
  }, [clickedCards]);

  useEffect(() => {
    setCards((prevCards) =>
      [...prevCards].sort(() => (Math.random() > 0.5 ? 1 : -1))
    );
  }, [clickedCards]);

  return (
    <>
      <ScoreDisplay {...score} />
      <div className="d-flex">{cards}</div>
      <button onClick={() => console.log(clickedCards)}>
        Log clickedCards
      </button>
    </>
  );
}
