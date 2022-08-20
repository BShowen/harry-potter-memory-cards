import { useState, useEffect } from "react";
import { Card } from "./Card";
export function useCards(updateScore) {
  const [clickedCards, setClickedCards] = useState({});
  const [cards, setCards] = useState(getCards);

  function handleCardClick(cardId) {
    setClickedCards((prevState) => {
      return prevState[cardId] ? {} : { ...prevState, ...{ [cardId]: 1 } };
    });
  }

  useEffect(() => {
    if (Object.values(clickedCards).some((clicks) => clicks === 1)) {
      updateScore(true);
    } else {
      updateScore(false);
    }
    setCards((prevCards) =>
      [...prevCards].sort(() => (Math.random() > 0.5 ? 1 : -1))
    );
  }, [clickedCards, updateScore]);

  function getCards() {
    const cards = [];
    for (let i = 0; i < 14; i++) {
      cards[i] = <Card key={i} id={i} handleClick={handleCardClick} />;
    }
    return cards;
  }

  return [cards];
}
