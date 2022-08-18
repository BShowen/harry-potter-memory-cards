import React from "react";
import ScoreTracker from "./ScoreTracker";
export default function AppNav(props) {
  return (
    <nav>
      <ScoreTracker {...props} />
    </nav>
  );
}
