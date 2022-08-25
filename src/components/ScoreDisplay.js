import React from "react";
export function ScoreDisplay({ score, highScore }) {
  return (
    <div className="d-flex flex-row justify-content-evenly align-items-center text-light fs-4 m-1 w-100">
      <div className="p-2">
        <p className="m-0">Current score: {score}</p>
      </div>
      <div className="p-2">
        <p className="m-0">High score: {highScore}</p>
      </div>
    </div>
  );
}
