import React from "react";
import Game from "./components/Game";
import { FiGithub } from "react-icons/fi";

export default function App() {
  return (
    <>
      <div id="app-container" className="container bg-dark">
        <Game />
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
