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
  var toSmorseCode = R.flip(R.prop)(dictionary);
  return R.pipe(
    split(''),
    R.map(toSmorseCode),
    R.join('')
  )(str);
}
console.log(smorseDictionary);

// example:
// smorse('sos', smorseDictionary); // -> ...---...


var text = await Deno.readTextFile('enable1.txt');

var list = text.split('\n');
var smorseCodes = list.map(s => smorse(s, smorseDictionary));


var initialValue = { countDot: 0, countDash: 0 };
var countCode = R.reduce(function counter(countRs, c) {
  var { countDot, countDash } = countRs;
  if (c === '.') {
    countDot += 1;
  } else if (c === '-') {
    countDash += 1;
  }
  return { countDot, countDash }
});

var countCodes = R.reduce(countCode, initialValue);

console.log( countCodes(smorseCodes) )

// https://www.reddit.com/r/dailyprogrammer/comments/cmd1hb/20190805_challenge_380_easy_smooshed_morse_code_1/