import React, { useCallback } from "react";
import useScoreTracker from "./useScoreTracker";
import { ScoreDisplay } from "./ScoreDisplay";
import { useCards } from "./useCards";

export default function Game() {
  const [incrementScore, resetScore, score] = useScoreTracker();

  const updateScore = useCallback(
    (shouldUpdate) => {
      if (shouldUpdate) {
        incrementScore();
      } else {
        resetScore();
      }
    },
    [incrementScore, resetScore]
  );

  const [cards] = useCards(updateScore);

  return (
    <>
      <ScoreDisplay {...score} />
      <div className="d-flex">{cards}</div>
    </>
  );
}
