import React from "react";
export function CardImage({ characterName, imageUrl }) {
  const style = {
    width: "150px",
    height: "250px",
    objectFit: "cover",
  };

  return <img style={style} src={imageUrl} alt={characterName} />;
}
