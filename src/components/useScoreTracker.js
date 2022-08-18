import { useState } from "react";

export default function useScoreTracker() {
  const [score, setCurrentScore] = useState({
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

  return { incrementScore, resetScore, score };
}
