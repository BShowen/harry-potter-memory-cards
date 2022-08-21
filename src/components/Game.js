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
      <nav
        className="nav sticky-top navbar-dark"
        style={{ backgroundColor: "#2B3036" }}
      >
        <ScoreDisplay {...score} />
      </nav>

      <div className="row justify-content-center pb-3">
        <div className="row justify-content-center">
          <div className="col">
            <div className="d-flex flex-wrap justify-content-center">
              {cards}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
