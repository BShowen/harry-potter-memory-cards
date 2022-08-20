import React from "react";
export default function ScoreTracker({ currentScore, highScore }) {
  return (
    <div id="score-container" className="d-flex flex-row">
      <div className="m-2">
        <p>Current score: {currentScore}</p>
      </div>
      <div className="m-2">
        <p>High score: {highScore}</p>
      </div>
    </div>
  );
}
