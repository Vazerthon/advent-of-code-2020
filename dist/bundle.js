'use strict';

const realInput = [
  'LLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLL.LLLLLLLL.LLLLL.LLLLLLLL..LLLLLLLLL',
  'LLLLLLLLL.LLLL.LLLLL.L.LLLLLLL.LLLLLLLLL.LLLLLL.L.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLLLLLLL..LLL.LLLLL.LLLLLLLLL.LLLLLLLL..LLLLLLLL..LLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLL.L.LLLLLLLLL',
  'LLLLLLLLL.LLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLL...LLLLL.LLLLLLLLL.L',
  'LLLLLLLLL.LLLLLLLLLL.LLLLLLL.L.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.L.LLL.L.LLLL.LLLL',
  'LLLLLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLL.LLL..LLLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLLLLLLLLLLLLLLLLL.LLL.LLLLL.LLLLLLLLL.LLLL.LLLLLL..L..LLLLLLLLLLLL.LL.LLLLLLLLLLLLLLL.LLLLLL.LL',
  'L....L.....L..L...................L.....L..L..L..L...LL....LL....L...........L.L.L..LL.L..LL..L...',
  'LLLLLLLLL.LL.L.LLLLL.LLLLLLLLLLLLLLLLL.L.LLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLL..LLLLLL.LLLLLLLLL',
  'LLLLLL.LL.LLLL.LLLLL.LLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLL.LL..LLLLLLLLLLLLLL.LL.LLLLLL',
  'LLLLLLL.L.L.LLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLLLL..LLLLLLLLLLLLLLL..LL.LLLL.',
  'LLLL.LLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLL.LL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL',
  'L..L........L....LL.......L.......L.L..LLL.LL..L.LL.L..L.LLL..L.....L.L.......LLLL..........L.L...',
  'LLLLLLLLL.LLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLLLL.L.LLLLLLLLLL.LLL.LLLLL.LLLLLLLLL.LLLLLLLL.LLLLL.LLL.LLL.LLL.LLLL.LLLLLLLLLL.LLL..LLL.LLLLL',
  'LLLLLLLLLLLLLL.LLLLL.L.LLLLLLL.LLLLLLLLL.LL.LLLLLLLLLLLL.LLLLLL.LLL.LLLL.LLLLLL..LLLLLLLLLLLLLLLLL',
  'LLLLLLL.LLLLLL.LLLLL.LLLLL.LLLLLLLL.LLLL.LLLLLLLL.LLLLLL.LLLL.L.LLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLL',
  'LLLLLLLLL.LLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLL.LLL.L',
  'LL.L.LL.L.LLLLLL.LLLLLLL..LLLL.LLLLLLLLL.LLLLLLLL.LL.LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LL.LLLLL.LLLLLLLLL',
  'LLLLLLLLL.LLLL.L.LLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LL.LLLLLLL.L.LLLLLLL',
  'LLLLLLLLLLLLLL.LLL.L.LLLLLLLLL.LLLLLLLLL.LLLLLLL..LLL.LL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL',
  'L.LLL..L.L..LL.LL......L..LLLL.L..LL...L......LL.LL.LL.L.LLL.L..........L....L..L..L....L....L..LL',
  '.LLLLLLLL..LLL.LL.L..LLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLL',
  'LLLLLLLLL.LLLL.LLLLL.L.LLLLLLL.LLL.LLL.L.LLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL',
  'LLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLL.LL.LLLLL.LLLLLL.LLLLLL.LL.LLLLL.LLLLLLL..LLLLLL..LLLLL.LL',
  'LLLLLLLLL.LLLL..LLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLL..L',
  'LLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL..LLLLLL.LLLLLLL.LL.LLLLLL',
  'LLLLLL.LL.LLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL..L.LLLL.LL.LLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL',
  '.......L........LL.L...L......L...LL.....LL..LLL..L........LLLL.LL.LLLLL...L.LLL.LL..LL.LL...L....',
  'LLLLLLLLL.LLLL..LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLL.LL.LLLLLL.LLLLLLLL.L.LLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLL.LLL.L.LLLLLLLL.LLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL..LLLLLL.LLLLL.LLLLLLLLLLL',
  'L.LLLLLLL.L.LLLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLL..LLL.LLLLLLLLLLLLLLL.LLLLLLLL.',
  '.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLL.LL.LLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL',
  '...LL..L..L....L.....L...L.............LL....LLLL.L....L....L.....LL..LL.L....LLL.L..LLL.L.LL...LL',
  'LLLLLL.LL..LLL.LLLLLL.LLL.LLL..LL.LLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLLLLLL.LLLL.LLLLLLLLL.LLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLLLLLL.LLLL.LL.LL.LLLLLLLLLLLLLLLLLLL.LLLLLLL.LL.LLL..LL.LLL.LLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLLLLL.L.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLLLLLL.L.LL.LLLLL.LLLLLLLLL.LLLLLLLLL..LLLLLL.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL',
  '..LL..L.LLLL..L....L.....LLL...LL....L...LL...LLLL......L.........LLLL...LLLL.L..L..LL.L.LL....L..',
  '.LLLLL.L..LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLL.LLLLLLLLLLLLL.L.LLLLLLL.LLLLLLL.LLLLLLLLL',
  '.L.LL.LLL.LLLL.LLLLL.LLLLLLLLL.LL.LLLLLL.LLLLLLL...LLLLL.LLLLLL..LLLLLLL.LLLLLLL.LLLLLLL.L.LLLLLLL',
  'LLLLLLLLL.L..L.LL.LL.LLLLLLLLLLLLLLLLLLL.LLLLLL.L.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLLLLLL.LLLL.LLLLL.LLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLL..L.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.L',
  'LLLLLLLLLLLLL.LLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL',
  'LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLL..LLLLL..LLLLLLLLL',
  'LLLLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLLLLLL.LLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLLLLLLLL',
  '.......L.L.....LLLLL.L.L.L.L...L.L..L...L.......L....L....L.......L..LL........L..LL..L...........',
  'LLL.LLLLL.LLLL.LLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLL..LL.LLL.LLLLLL.L..LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL',
  'LLLLL.LLL.LL.L.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LLL.LLLLLLLLLLLL.LLL.LLLLLLLLLLLLL',
  'LL.LLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLLLLLLL.LLLL.LLLLLLLLLL.LLLL.LLLLLLLLL.L.LLLLLLLLLLLLL.LLLL.L.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL',
  'LLLLLLLLLLLLLL.LL.LL.LLLLLLLLL..LLL.LLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLL.LLLLLLL.LLL.LLLLLLLLL.LLLLLLL',
  '.L..LLL........L.LLL.L....L...LL....LLL.L.L.......LLL....LL..L.....LL.LLL.L.LLL..LL.L...L...L..LLL',
  'LLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL',
  '.LLLLLLLLLLLLL.LLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLL.L.LLLLLLL.LL.LLLL.LLLLLLLLL',
  'LLLLLLLLL.LLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL..LLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL',
  'LL.LLLLLL.LLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLL..LLLLLL.LLLLL.LL.L.LLLLLLLLLLLLL.LLLLLLLLL',
  '......L....L.........L.LL..L.....LL.L.LL.....L....L..L..............L...L.LL.LL..LL........L..L..L',
  'LLLLLLLLL.L.LL.LLLLL..LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLL..LLLLL.L.LLLLLL.LLLLLLL.LL.LLLL.LLLLLLLLL',
  'LLLLLLLLL.LLLL.LL.LL.LLLLLLLLL.LLLLLLLLL.LL.LLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL.LLLL.L',
  'LLLLLLL.L.LLLL..LLLLLLLLLL.LLL.LLLLLLLLL..L.LLLLL.LLLLLLLLLLLLL.LLLLLLL..L.LLLLL.LLLLLLL.LLLLLLLLL',
  'LLLLLL.LL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.L',
  '...LLL........L..L...L.L.LL.LL.....L...L......LL.L..LLLL....LL....L.L.L..L.L.L...L...L.L........L.',
  'LLLLLLLLL.LLLL..LLLL.LLLLLLLLL.LLLLLL.LL.LLL.LLLL.LLLLLL.LLLLLL.L.LLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLL',
  'LLLLLLLLLL.LLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLL.LLL..LL.LLLLLLLLLL..LLLLLLL.LLLL.LL.LLLLLL...LL.LLLLL',
  'LL.LLLLLL.LLLLLLLLLL.LLLLLLL.L.LLLLLLLLL..LLLLLLL.LLLLLL.LLLLLL.LLLL.L.L.LLLLL.LLL.LLLLL.LLLLLLLLL',
  'LLL.LLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLL...LLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL',
  '....L.LL.L......L....LL...L.L.L...L..L........L.L.L......LL...L.....LL..L......LL..........L..L...',
  'LLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLL..LLL.LLLLLLLL.LLLLL..LLLLLL.LLLLLLLL.LLLL.LL.LLLLLLL.LLLLLLLLL',
  'LLL.LLLLL.LLLL.LL.LL.LLLLLLLL.LLLLLLLLLL.LLL.L.LL.LL.LLL.LLLLLL.LLLLLLLL.LLLLLLL.L.LLLL..LLLLLLLLL',
  'LLLLLLLLL.LLLL..LLLL.LLLLLLLLL.LLLLLLLLL.LL.LLLLLLLLLLL..LLLLLLLLLLLLLLL.LLLLLL..LLLLLLL.LLLLLLLLL',
  'LLLLLLL.L.LLLL.LL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL..LLLLLL..L.LL.LL.LLLLLLL.LLLL.LL.L.LLLLLLL',
  '........LL....L.L.LL.L..L.....L...L..L.LL...LLLL.L.....L...L...L..L...L...L.L...LL..L.L.L....LLL..',
  'LLLLLLLLL.LLLLLLLL.LLLLLLLLLLL..LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLL.LLL.LLLLL.L.LLLLLLLLL',
  'LLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLL.L.L.LL.L.LLLLLLLLLLLLLLL.L.LLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLL',
  'LLLLL.LLLLLLL..LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL...LLLL.LLLLLL.LLLLLLLL..LLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLL.LLLL.LLLL.LLL.L.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLL.LL.L',
  'LLLLLLL...LLLL.LLLLL.LLL.LLLLL.LLLLLLLLL.LLLLLL.L.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL.LLL.LLLLLLLLL.LLL',
  'LLLLLLL.LLLLLL.LLLLL.LLLLL.LLLLLLLLLLLL.LL.LLLLLL.LLL.LLLLLLLLL..LLLL..LLLLL.LLL.LL.LLLL.LLLLLLLLL',
  'LLLLLLLLLLLLLL.LL.LL.LLLLLLLLL.LLLLLLLLL.LLLLLL.L.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L',
  'L.L.....L......LL....L.L...L..LL..LLLL.L.L....L.L.LL..LL....LL.LL...L..LL..LLL.LLL.L..L..L........',
  'LLLLLLLLL.LLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLL.LLLLLLLLLL',
  'LLLLLLLLL.LLLL.LLL.LLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.L',
  'LLLLLLLLL.LLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL',
  'LLLLLLLLL.LLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL',
  'LLLLLLLLLLLLLL.LLLLL.LL.LLLLLL.LLLLLLLLL.LLL.LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLL.LLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.L.LLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LL.LLLLLL',
  'LLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.L.LLLLL.LLLLLLL.LLLLLL..LLLLLLLLLLLLLLLLLLLLLLL.LLLLL...L',
  'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLL..LLLLLLLLLLLLLLL.LL.LLLLLLLLLLLL.LLLLLLLLL',
  'LLLLLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL..LLLL.LL.LL.LLLL.LLLLL.L.LLLLLLLLL',
  'LL.LLLLLL.LLLL.LLLLL.LLLLLLL.L..LLLLLLLL.LLLL..LLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL',
  'LLLLLLLLL.LLLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.L.LLLLL.LLLLLLLLL',
  '.LLL.LLLL.LLLL.L.LLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LL.LLL.LLLLLLLL.LLLLLLL.LLLLLLL..LLLLLLLL',
  'LLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL',
];

const stringToCharArray = (string) => string.split('');
const joinStrings = (a, b) => `${a}${b}`;
const reduceToString = (array) => array.reduce(joinStrings, '');
const atLeastZero = (num) => Math.max(num, 0);
const surroundingCells = (grid, rowNumber, cellNumber) => {
  const rowAbove = (grid[rowNumber - 1] || []).slice(
    atLeastZero(cellNumber - 1),
    cellNumber + 2,
  );
  const thisRow = [
    grid[rowNumber][cellNumber - 1],
    grid[rowNumber][cellNumber + 1],
  ];
  const rowBelow = (grid[rowNumber + 1] || []).slice(
    atLeastZero(cellNumber - 1),
    cellNumber + 2,
  );

  return [...rowAbove, ...thisRow, ...rowBelow];
};
const countWhere = (test) => (array) => array.filter(test).length;
const getOccupiedCount = countWhere((x) => x === '#');
const nextCellState = (grid, rowNumber) => (cell, cellNumber) => {
  const surrounding = surroundingCells(grid, rowNumber, cellNumber);
  const occupiedCount = getOccupiedCount(surrounding);

  if (cell === 'L' && occupiedCount === 0) {
    return '#';
  } else if (cell === '#' && occupiedCount >= 4) {
    return 'L';
  }
  return cell;
};
const nextRowState = (row, rowNumber, grid) =>
  row.map(nextCellState(grid, rowNumber));
const nextGridState = (grid) => grid.map(nextRowState);
const gridToString = (grid) => grid.map(reduceToString).reduce(joinStrings, '');

const one = (input) => () => {
  const process = (lastGrid) => {
    const nextGrid = nextGridState(lastGrid);
    const lastGridAsString = gridToString(lastGrid);
    const nextGridAsString = gridToString(nextGrid);
    const match = lastGridAsString === nextGridAsString;
    return match ? lastGrid : process(nextGrid);
  };

  const grid = input.map(stringToCharArray);
  const settled = process(grid);
  return getOccupiedCount(gridToString(settled).split(''));
};

const two = (input) => () => 'Not implemented';

const partOne = one(realInput);
const partTwo = two();

console.log("Part 1: ", partOne());
console.log("Part 2: ", partTwo());
