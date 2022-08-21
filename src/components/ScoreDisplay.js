import React from "react";
export function ScoreDisplay({ currentScore, highScore }) {
  return (
    <div className="d-flex flex-row justify-content-evenly align-items-center text-light fs-4 m-1 w-100">
      <div className="p-2">
        <p className="m-0">Current score: {currentScore}</p>
      </div>
      <div className="p-2">
        <p className="m-0">High score: {highScore}</p>
      </div>
    </div>
  );
}
