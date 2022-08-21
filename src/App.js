import React, { useCallback } from "react";
import Game from "./components/Game";
import { FiGithub } from "react-icons/fi";
import useScoreTracker from "./components/useScoreTracker";
import { ScoreDisplay } from "./components/ScoreDisplay";

export default function App() {
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

  return (
    <>
      <nav
        className="nav sticky-top navbar-dark"
        style={{ backgroundColor: "#2B3036" }}
      >
        <ScoreDisplay {...score} />
      </nav>

      <div id="app-container" className="container bg-dark">
        <Game updateScore={updateScore} />
      </div>

      <footer className="bg-secondary text-light">
        <div className="text-center p-4">
          <a
            href="https://github.com/BShowen"
            target="_blank"
            rel="noreferrer"
            className="text-light text-decoration-none fs-4"
          >
            <span>
              <FiGithub color="#FFC107" size="1.5rem" />{" "}
            </span>{" "}
            Bradley Showen
          </a>
        </div>
      </footer>
    </>
  );
}
