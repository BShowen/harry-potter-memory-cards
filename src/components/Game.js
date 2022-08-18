import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Game() {
  const [cards, setCards] = useState(() => {
    const cards = [];
    for (let i = 0; i < 14; i++) {
      cards[i] = <Card key={i} data={i} />;
    }
    return cards;
  });

  useEffect(() => {
    function randomize() {
      setCards((prevState) => {
        return [...prevState].sort(() => Math.random() - 0.5);
      });
    }

    function clickHandler(e) {
      e.stopPropagation();
      e.preventDefault();
      const cardClicked = e.path.some((item) => {
        return item.className === "game-card";
      });
      if (cardClicked) randomize();
    }
    document.addEventListener("click", clickHandler);

    return () => {
      console.log("cleaning up");
      document.removeEventListener("click", clickHandler);
    };
  });

  return <div className="d-flex">{cards}</div>;
}
