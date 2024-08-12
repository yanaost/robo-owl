import "./Grid.css";
import { PositionMatrix } from "../../types/Position";
import { Robot } from "../Robot/Robot";
import { Direction } from "../../types/Direction";
import { KeyboardEvent } from "react";

type Props = {
  positionMatrix: PositionMatrix;
  handleOnKeyboardStrokes: (event: KeyboardEvent<HTMLInputElement>) => void;
  direction: Direction;
};
export const Grid: React.FC<Props> = ({
  positionMatrix,
  handleOnKeyboardStrokes,
  direction,
}) => {
  const rows = positionMatrix.length;
  const columns = positionMatrix[0].length;

  const gridTemplateStyle = {
    rows,
    gridTemplate: `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`,
  };

  let cellKey = 0;

  return (
    <div className="grid" style={gridTemplateStyle}>
      {positionMatrix.map((row) =>
        row.map((cell) => {
          cellKey++;

          return (
            <div className="cell" key={cellKey}>
              {cell === 1 && <Robot direction={direction} />}
            </div>
          );
        })
      )}
    </div>
  );
};
