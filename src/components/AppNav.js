import React from "react";
import ScoreDisplay from "./ScoreDisplay";
export default function AppNav(props) {
  return (
    <nav>
      <ScoreDisplay {...props} />
    </nav>
  );
}
