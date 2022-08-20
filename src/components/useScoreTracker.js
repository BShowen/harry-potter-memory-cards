import { useCallback, useState } from "react";

export default function useScoreTracker() {
  const [score, setCurrentScore] = useState({
    currentScore: 0,
    highScore: 0,
  });

  const incrementScore = useCallback(() => {
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
  }, []);

  const resetScore = useCallback(() => {
    setCurrentScore((prevScore) => {
      return { ...prevScore, currentScore: 0 };
    });
  }, []);

  return [incrementScore, resetScore, score];
}
