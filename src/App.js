import React, { useState } from "react";
import Game from "./components/Game";
import AppNav from "./components/AppNav";

export default function App() {
  const [currentScore, setCurrentScore] = useState({
    currentScore: 0,
    highScore: 0,
  });

  const incrementScore = () => {
    setCurrentScore((prevScore) => {
      const { currentScore: previousScore, highScore: previousHighScore } =
        prevScore;

      const currentScore = previousScore + 1;
      return {
        currentScore,
        highScore:
          currentScore > previousHighScore ? currentScore : previousHighScore,
      };
    });
  };

  const resetScore = () => {
    setCurrentScore((prevScore) => {
      return { ...prevScore, currentScore: 0 };
    });
  };

  return (
    <>
      <AppNav {...currentScore} />
      <div id="app-container">
        <Game incrementScore={incrementScore} resetScore={resetScore} />
      </div>
    </>
  );
}
