'use strict';

const testInput = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];

const realInput = [
  77,
  10,
  143,
  46,
  79,
  97,
  54,
  116,
  60,
  91,
  80,
  132,
  20,
  154,
  53,
  14,
  103,
  31,
  65,
  110,
  43,
  38,
  47,
  120,
  112,
  87,
  24,
  95,
  33,
  104,
  73,
  22,
  66,
  137,
  21,
  109,
  118,
  63,
  55,
  124,
  146,
  148,
  84,
  86,
  147,
  125,
  23,
  85,
  117,
  71,
  48,
  136,
  151,
  130,
  83,
  56,
  140,
  9,
  49,
  113,
  131,
  133,
  74,
  37,
  127,
  34,
  32,
  106,
  1,
  78,
  11,
  72,
  40,
  96,
  17,
  64,
  92,
  102,
  123,
  126,
  90,
  105,
  57,
  99,
  27,
  70,
  98,
  111,
  30,
  50,
  67,
  2,
  155,
  5,
  119,
  8,
  39,
];

const numericalOrder = (a, b) => a - b;

const toDiffWithPreviousItem = (current, i, all) => {
  const prev = i === 0 ? 0 : all[i - 1];
  const diff = current - prev;
  return diff;
};

const toGroupings = (all, current) => ({
  ...all,
  [current]: all[current] + 1,
});

const one = (input) => () => {
  // last jump is always 3 so start with it counted
  const startingCounts = { 1: 0, 3: 1 };

  const grouped = input
    .sort(numericalOrder)
    .map(toDiffWithPreviousItem)
    .reduce(toGroupings, startingCounts);

  return grouped[1] * grouped[3];
};

const two = (input) => () => {
  const process = (sets, all) => {
    const nextSets = sets.map((set) => {
      const lastInSet = set[set.length - 1];
      const nextOptions = all.filter((x) => x > lastInSet && x <= lastInSet + 3);
      return nextOptions.map((option) => ([...set, option]));
      
    });

    console.log(nextSets);
    // if (nextSets === sets) {
    //   return nextSets;
    // }

    // return process(nextSets, all);
  };

  const sorted = input.sort(numericalOrder);
  const starters = sorted.filter((x) => x <= 3).map((starter) => ([ starter ]));
  return process(starters, sorted);
};

const partOne = one(realInput);
const partTwo = two(testInput);

console.log("Part 1: ", partOne());
console.log("Part 2: ", partTwo());
