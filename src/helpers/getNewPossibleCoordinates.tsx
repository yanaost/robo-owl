import { Coordinates } from "../types/Coordinates";
import { KeyboardEvent } from "react";

export const getNewPossibleCoordinates = (
  event: KeyboardEvent,
  coordinates: Coordinates
): Coordinates => {
  const newCoordinates = JSON.parse(JSON.stringify(coordinates));
  switch (event.key) {
    case "ArrowUp":
      newCoordinates[1]--;
      break;

    case "ArrowDown":
      newCoordinates[1]++;
      break;

    case "ArrowLeft":
      newCoordinates[0]--;
      break;

    case "ArrowRight":
      newCoordinates[0]++;
      break;
  }

  return newCoordinates;
};
