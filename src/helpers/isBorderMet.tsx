import { Coordinates } from "../types/Coordinates";

export const isBorderMet = (
  coordinates: Coordinates,
  rows: number,
  columns: number
): boolean => {
  if (
    coordinates[0] >= 0 &&
    coordinates[0] < columns &&
    coordinates[1] >= 0 &&
    coordinates[1] < rows
  ) {
    return false;
  }
  return true;
};
