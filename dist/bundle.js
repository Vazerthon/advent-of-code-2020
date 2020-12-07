'use strict';

const testInput = [
  'light red bags contain 1 bright white bag, 2 muted yellow bags.',
  'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
  'bright white bags contain 1 shiny gold bag.',
  'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
  'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
  'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
  'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
  'faded blue bags contain no other bags.',
  'dotted black bags contain no other bags.',
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
  const newTotal = total + entries.reduce((sum, [, count]) => sum + count, 0);

  const next = entries.map(([colour]) => sumBags(dictOfBags, Object.entries(dictOfBags[colour]), total));
  console.log(next);

  return newTotal;
};

const two = (input) => () => {
  const dictOfBags = descriptiveListToDictionary(input);
  const contents = Object.entries(dictOfBags['shiny gold']);
  const result = sumBags(dictOfBags, contents, 0);
  return result;
};
const partTwo = two(testInput);

console.log(partTwo());
