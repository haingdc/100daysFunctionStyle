import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';

var reduce = R.invoker(1, 'reduce');

export function same_necklace(str1: string, str2: string) {
  let value: boolean;
  if (str1.length !== str2.length) {
    return false;
  }

  // prepare list that includes all variations of necklace.
  var variations: string[] = R.pipe(
    R.prop('length'),
    Array,
    Array.from,
  )(str1);
  variations[0] = str1; // of course, variations must includes itself

  variations = R.pipe(
    reduce(fillRemainVariations),
    listify
  )(variations);

  return variations.includes(str2);

  // @ts-ignore
  function fillRemainVariations(acc, _currentValue, index, arr) {
    var prevItem = arr[index - 1];
    var item = swapString(prevItem);
    arr[index] = item;
    return arr;
  }
}

function swapString(str: string) {
  var [firstCharacter, ...remainCharacters] = str;
  return remainCharacters.join('') + firstCharacter;
}

// @ts-ignore
function listify(listOrItem) {
  if (!Array.isArray( listOrItem )) {
      return [ listOrItem ];
  }
  return listOrItem;
}

export function same_necklace_imperative_way(str1: string, str2: string) {
  if (str1.length != str2.length) {
    return false;
  }
  for (var i = 0; i < str1.length; i++) {
    if (str1 === str2) {
      return true;
    }
    str1 = swapString(str1)
  }
  return false;
}