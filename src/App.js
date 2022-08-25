import Game from "./components/Game";
import { FiGithub } from "react-icons/fi";
import useScoreTracker from "./components/useScoreTracker";
import { ScoreDisplay } from "./components/ScoreDisplay";

export default function App() {
  const [score, dispatch] = useScoreTracker();
  const setScore = (name) => dispatch({ name: `${name}` });

  return (
    <>
      <nav
        className="nav sticky-top navbar-dark"
        style={{ backgroundColor: "#6C757D" }}
      >
        <ScoreDisplay {...score} />
      </nav>

      <div id="app-container" className="container bg-dark">
        <Game setScore={setScore} />
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
