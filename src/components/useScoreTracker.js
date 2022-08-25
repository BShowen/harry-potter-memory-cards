import { useReducer, useState } from "react";

export default function useScoreTracker() {
  const [clickedCharacters, setClicked] = useState([]);
  const [state, dispatch] = useReducer(reducer, { score: 0, highScore: 0 });

  // A modified version of the reducer your probably used to seeing.
  // character = {name: "foo-bar"}
  function reducer(state, character) {
    if (clickedCharacters.includes(character.name)) {
      setClicked([]);
      return {
        score: 0,
        highScore: state.highScore,
      };
    } else {
      setClicked(clickedCharacters.concat(character.name));
      return {
        score: state.score + 1,
        highScore:
          state.score + 1 > state.highScore ? state.score + 1 : state.highScore,
      };
    }
  }

  return [state, dispatch];
}
