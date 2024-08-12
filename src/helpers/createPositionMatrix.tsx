import { Coordinates } from "../types/Coordinates";
import { PositionMatrix, PositionRow } from "../types/Position";

export const createPositionMatrix = (
  rows: number,
  columns: number,
  robotCoordinates: Coordinates
): PositionMatrix => {
  let robotPositioningMatrix: PositionMatrix = [];

  for (let i = 0; i < rows; i++) {
    let currentRow: PositionRow = [];

    for (let y = 0; y < columns; y++) {
      i === robotCoordinates[1] && y === robotCoordinates[0]
        ? currentRow.push(1)
        : currentRow.push(0);
    }

    robotPositioningMatrix.push(currentRow);
  }

  return robotPositioningMatrix;
};
