import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';

function isCorn(i: string) {
  return i == '🌽';
}

function isCauliflower(i: string) {
  return i == '🥦';
}

export function filterToDump(predicates: Function[], list: any[]) {
  let initial = [[], [], []];
  initial = list.reduce(function reducer([corns, cauliFlowers, others], item) {
    if (isCorn(item)) {
      corns = corns.concat(item);
    } else {
      if (isCauliflower(item)) {
        cauliFlowers = cauliFlowers.concat(item);
      } else {
        others = others.concat(item);
      }
    }
    return [corns, cauliFlowers, others];
  }, initial);
  console.log(initial);
  return initial;
}

export function filterTo(predicates: Function[], list: any[]) {
  var groups = Array( predicates.length ).fill([])

  function keepFilterIn(index: number, predicate: Function) {
    // @ts-ignore
    return step => (acc, item) => {
      if (!predicate(item) ) {
        return step(acc, item)
      } else {
        acc[index] = acc[index].concat(item);
        return acc;
      }
    };
  };


  // @ts-ignore
  function reducer(acc, item) {
    // console.log('\nhere', acc, item);
    return acc;
  }

  var makeKeepFilterInFns = predicates.map((fn, i) => keepFilterIn(i, fn));
  var [keepCorns, keepCauliflower] = makeKeepFilterInFns;
  var allInOne = keepCorns( keepCauliflower( reducer ) );

  // var allInOne = R.compose(...makeKeepFilterInFns, reducer)();
  return list.reduce(allInOne, groups);
}