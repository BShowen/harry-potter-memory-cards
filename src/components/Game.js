import React from "react";
import { Cards } from "./Cards";

export default function Game(props) {
  return (
    <div className="row justify-content-center pb-3">
      <div className="row justify-content-center">
        <div className="col">
          <Cards {...props} />
        </div>
      </div>
    </div>
  );
}
