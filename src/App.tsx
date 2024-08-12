import { Grid } from "./components/Grid/Grid";
import { PositionMatrix } from "./types/Position";
import { createPositionMatrix } from "./helpers/createPositionMatrix";
import {
  useState,
  useRef,
  useEffect,
  MutableRefObject,
  KeyboardEvent,
} from "react";
import { Direction } from "./types/Direction";
import { Coordinates } from "./types/Coordinates";
import { getNewPossibleCoordinates } from "./helpers/getNewPossibleCoordinates";
import { isBorderMet } from "./helpers/isBorderMet";

const rows = 5;
const columns = 5;

export const App = () => {
  const [direction, setDirection] = useState(Direction.up);
  const [currrentRobotCoordinates, setCurrrentRobotCoordinates] =
    useState<Coordinates>([0, 0]);
  const [positionMatrix, setPositionMatrix] = useState<PositionMatrix>([[]]);

  useEffect(() => {
    setPositionMatrix(
      createPositionMatrix(rows, columns, currrentRobotCoordinates)
    );
  }, [currrentRobotCoordinates]);

  const [previousKeyboardStroke, setPreviousKeyboardStroke] = useState("");

  const handleOnKeyboardStrokes = (event: KeyboardEvent<Element>) => {
    if (previousKeyboardStroke !== event.key) {
      switch (event.key) {
        case "ArrowUp":
          setDirection(Direction.up);
          break;

        case "ArrowDown":
          setDirection(Direction.down);
          break;

        case "ArrowLeft":
          setDirection(Direction.left);
          break;

        case "ArrowRight":
          setDirection(Direction.right);
          break;
      }
    } else {
      const newPossibleCoordinates = getNewPossibleCoordinates(
        event,
        currrentRobotCoordinates
      );
      const isRobotMeetBorder = isBorderMet(
        newPossibleCoordinates,
        rows,
        columns
      );

      if (!isRobotMeetBorder) {
        setCurrrentRobotCoordinates(newPossibleCoordinates);
      }
    }

    setPreviousKeyboardStroke(event.key);
  };

  const myRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <div
      className="App"
      tabIndex={-1}
      onKeyDown={handleOnKeyboardStrokes}
      ref={myRef}
    >
      <Grid
        positionMatrix={positionMatrix}
        handleOnKeyboardStrokes={handleOnKeyboardStrokes}
        direction={direction}
      />
    </div>
  );
};
