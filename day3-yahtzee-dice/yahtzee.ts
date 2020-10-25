import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';

export function yahtzee(numbers: number[]) {
  var groupNumber: { [key: string]: number } = {};

  numbers.reduce(function sumIntoGroup(group, n) {
    group[n] = group[n] ? group[n]+n : n;
    return group;
  }, groupNumber);
  // => groupNumber = { "2": 2, "3": 3, "5": 10, "6": 6 }

  var groupNumberTuples = Object.keys(groupNumber).map(n => [n, groupNumber[n]]);
  // groupNumberTuples = [ [ "2", 2 ], [ "3", 3 ], [ "5", 10 ], [ "6", 6 ] ]

  var largest = groupNumberTuples.reduce(function max([numA, sumA], [numB, sumB]) {
    return sumA > sumB ? [numA, sumA] : [numB, sumB];
  });
  // largest = ["5", 10]

  return largest[1];
}