import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';

function getSmorseDictionary() {
  var AtoZ = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'.split(' ');
  var initialValue = { characters: {} as { [key: string]: string}, number: 97 };
  var { characters: smorseDictionary } = AtoZ.reduce(function map({ characters, number }, code) {
    var char = String.fromCharCode(number);
    return {
      characters: { ...characters, [char]: code },
      number: number + 1,
    };
  }, initialValue);
  return smorseDictionary;
}

var smorseDictionary = getSmorseDictionary();
var split = R.invoker(1, 'split');

function smorse(str: string, dictionary: { [key: string]: string }) {
  // var smorseCodes = str.split('').map(function mapCharacterToSmorseCode(c) {
  //   return smorseDictionary[c];
  // });
  // return smorseCodes.join('');

  function toSmorseCode(c) {
    return dictionary[c];
  }

  return R.pipe(
    split(''),
    R.map(toSmorseCode),
    R.join('')
  )(str);
}
console.log(smorseDictionary);
console.log(smorse('sos', smorseDictionary));