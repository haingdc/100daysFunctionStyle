function isCorn(i: string) {
  return i == '🌽';
}

function isCauliflower(i: string) {
  return i == '🥦';
}

export function filterTo(predicates: Function[], list: any[]) {
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

