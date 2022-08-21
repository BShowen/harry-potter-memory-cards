import React from "react";
import { useCards } from "./useCards";

export default function Game({ updateScore }) {
  const [cards] = useCards(updateScore);

  return (
    <div className="row justify-content-center pb-3">
      <div className="row justify-content-center">
        <div className="col">
          <div className="d-flex flex-wrap justify-content-center">{cards}</div>
        </div>
      </div>
    </div>
  );
}
