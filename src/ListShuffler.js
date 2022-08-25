import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import shuffle from "lodash.shuffle";

export function ListShuffler() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const shuffleList = () => setData(shuffle(data));

  return (
    <Flipper flipKey={Date.now().toLocaleString()} className="d-flex flex-row">
      {data.map((d) => (
        <Flipped key={d} flipId={d}>
          <p onClick={shuffleList} className="text-light">
            {d}
          </p>
        </Flipped>
      ))}
    </Flipper>
  );
}
