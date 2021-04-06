import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';

export function yahtzee(numbers: number[]): number {
  var groupNumber: { [key: string]: number } = {};
  var initialValue = { max: { dice: 0, sum: 0 }, group: groupNumber }

  var result = numbers.reduce(function sumAndMax({ max, group }, n) {
    group[n] = group[n] ? group[n]+n : n;
    let updateMax = max;
    if (group[n] > max.sum) {
      updateMax = { dice: n, sum: group[n] };
    }
    return { max: updateMax, group };
  }, initialValue);

  return result.max.sum;
}