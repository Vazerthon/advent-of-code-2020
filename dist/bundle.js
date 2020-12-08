'use strict';

const testInput2 = [
  'shiny gold bags contain 2 dark red bags.',
  'dark red bags contain 2 dark orange bags.',
  'dark orange bags contain 2 dark yellow bags.',
  'dark yellow bags contain 2 dark green bags.',
  'dark green bags contain 2 dark blue bags.',
  'dark blue bags contain 2 dark violet bags.',
  'dark violet bags contain no other bags.',
];

const splitStringOn = (splitter) => (string) => string.split(splitter);
const splitStringOnContain = splitStringOn('contain');
const splitOnComma = splitStringOn(',');
const splitOnSpace = splitStringOn(' ');

const trimOn = (trim) => (string) => string.split(trim)[0];
const trimOnBags = trimOn('bags');
const trimOnBag = trimOn('bag');
const trimOnDot = trimOn('.');
const trimWhitespace = (string) => string.trim();

const toColourWithCount = (string) => {
  const [count, ...colour] = splitOnSpace(string);
  return {
    [colour.join(' ')]: Number(count),
  };
};

const toSingleDictionary = (acc, curr) => ({ ...acc, ...curr });

const processStringList = (string) =>
  splitOnComma(string)
    .map(trimWhitespace)
    .map(trimOnBags)
    .map(trimOnBag)
    .map(trimWhitespace)
    .filter((x) => x !== 'no other')
    .map(toColourWithCount)
    .reduce(toSingleDictionary, {});

const processLine = (string) => {
  const [head, tail] = splitStringOnContain(string);
  const colour = trimOnBags(head.trim()).trim();

  return {
    [colour]: processStringList(trimOnDot(tail)),
  };
};

const descriptiveListToDictionary = (list) =>
  list.reduce(
    (acc, curr) => ({
      ...acc,
      ...processLine(curr),
    }),
    {},
  );

const sumBags = (dictOfBags, entries, total) => {
  const totals = entries.map(([colour, quantity]) => {
    const nextEntries = Object.entries(dictOfBags[colour]);
    console.log(colour, nextEntries);
    if (!nextEntries.length) {
      console.log('returning', colour, quantity);
      return quantity;
    }
    return quantity * sumBags(dictOfBags, nextEntries, total);
  });

  const sum = total + totals.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

const two = (input) => () => {
  const dictOfBags = descriptiveListToDictionary(input);
  const contents = Object.entries(dictOfBags['shiny gold']);
  const entriesCount = contents.reduce((acc, [, count]) => acc + count, 0);
  const result = sumBags(dictOfBags, contents, 0) + entriesCount;
  return result
};
const partTwo = two(testInput2);

console.log(partTwo());
