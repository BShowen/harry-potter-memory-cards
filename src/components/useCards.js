import { useState, useEffect } from "react";
import { Card } from "./Card";
export function useCards(updateScore) {
  const [clickedCards, setClickedCards] = useState({});
  const [cardData, setCardData] = useState([]);
  const [cards, setCards] = useState([]);

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

    if (cards.length === 0) return;
    setCards((prevCards) =>
      [...prevCards].sort(() => (Math.random() > 0.5 ? 1 : -1))
    );
  }, [cards.length, clickedCards, updateScore]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        "https://hp-api.herokuapp.com/api/characters"
      );

      const data = await response.json();
      return data.slice(0, 14);
    }

    fetchImages()
      .then((characters) => {
        const characterData = [];
        characters.forEach((character) => {
          const { name, image } = character;
          characterData.push({ name, image });
        });
        setCardData(characterData);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  useEffect(() => {
    const createCards = () => {
      const cards = [];
      for (let i = 0; i < 14; i++) {
        cards[i] = (
          <Card
            key={i}
            id={i}
            cardData={cardData[i]}
            handleClick={handleCardClick}
          />
        );
      }
      return cards;
    };

    if (cardData.length === 0) return;
    setCards(createCards);
  }, [cardData]);

  return [cards];
}
