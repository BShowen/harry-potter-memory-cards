import { Card } from "./Card";
import { useState, useEffect } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import shuffle from "lodash.shuffle";
export function Cards(props) {
  const [characterData, setCharacterData] = useState([]);
  const shuffleCards = () => setCharacterData(shuffle(characterData));

  // Fetch the images from harry potter API.
  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        "https://hp-api.herokuapp.com/api/characters"
      );

      const data = await response.json();
      return data.slice(0, 14);
    }

    async function preLoadImages(characters) {
      const characterData = characters.map((character) => {
        return new Promise((resolve, reject) => {
          const { name, image: src } = character;

          const image = new Image();
          image.src = src;
          image.onload = () => resolve({ name, image });
          image.onerror = () => reject();
        });
      });

      return await Promise.all(characterData);
    }

    fetchImages()
      .then((characters) => preLoadImages(characters))
      .then((characterData) => setCharacterData(characterData))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <>
      {!characterData.length && <p className="text-light">Loading...</p>}
      {characterData.length && (
        <Flipper
          flipKey={Date.now().toLocaleString()}
          className="d-flex flex-wrap justify-content-center"
        >
          {characterData.map((character) => (
            //key and flipId need to not change on each render in order for
            //flipper to work properly.
            <Flipped key={character.name} flipId={character.name}>
              {/* //Use render props when rendering your own component using flipper */}
              {(flippedProps) => (
                <Card
                  cardData={character}
                  shuffleCards={shuffleCards}
                  flippedProps={flippedProps} //These are the render props from flipper
                  setScore={props.setScore}
                />
              )}
            </Flipped>
          ))}
        </Flipper>
      )}
    </>
  );
}
