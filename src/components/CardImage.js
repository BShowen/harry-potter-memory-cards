import React from "react";
export function CardImage({ characterName, imageUrl }) {
  const style = {
    height: "175px",
    width: "auto",
    objectFit: "cover",
    objectPosition: "top",
  };
  return (
    <img
      className="rounded-top"
      style={style}
      src={imageUrl}
      alt={characterName}
    />
  );
}
