const testInput = [
  "L.LL.LL.LL",
  "LLLLLLL.LL",
  "L.L.L..L..",
  "LLLL.LL.LL",
  "L.LL.LL.LL",
  "L.LLLLL.LL",
  "..L.L.....",
  "LLLLLLLLLL",
  "L.LLLLLL.L",
  "L.LLLLL.LL",
];

const realInput = [];

const stringToCharArray = (string) => string.split("");
const joinStrings = (a, b) => `${a}${b}`;
const reduceToString = (array) => array.reduce(joinStrings, "");
const surroundingCells = (grid, rowNumber, cellNumber) => {
  const rowAbove = (grid[rowNumber - 1] || []).slice(
    cellNumber - 1,
    cellNumber + 2
  );
  const thisRow = grid[rowNumber].slice(cellNumber - 1, cellNumber + 2);
  const rowBelow = (grid[rowNumber + 1] || []).slice(
    cellNumber - 1,
    cellNumber + 2
  );
  return [...rowAbove, ...thisRow, ...rowBelow];
};
const countWhere = (test) => (array) => array.filter(test).length;
const nextCellState = (grid, rowNumber) => (cell, cellNumber) => {
  const getOccupiedCount = countWhere((x) => x === "#");
  const surrounding = surroundingCells(grid, rowNumber, cellNumber);
  const occupiedCount = getOccupiedCount(surrounding);
  if (cell === "L" && occupiedCount === 0) {
    return "#";
  } else if (cell === "#" && occupiedCount >= 4) {
    return "L";
  }
  return cell;
};
const nextRowState = (row, rowNumber, grid) =>
  row.map(nextCellState(grid, rowNumber));
const nextGridState = (grid) => grid.map(nextRowState);
const gridToString = (grid) => grid.map(reduceToString).reduce(joinStrings, "");

const one = (input) => () => {
  const process = (lastGrid) => {
    const nextGrid = nextGridState(lastGrid);
    const lastGridAsString = gridToString(lastGrid);
    const nextGridAsString = gridToString(nextGrid);
    console.log(nextGridAsString);
    const match = lastGridAsString === nextGridAsString;
    return match ? lastGrid : process(nextGrid);
  };

  const grid = input.map(stringToCharArray);
  const settled = process(grid);
  console.log(settled);
};

const two = (input) => () => "Not implemented";

export const partOne = one(testInput);
export const partTwo = two(testInput);
