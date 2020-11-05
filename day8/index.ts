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
console.log(smorse('sos', smorseDictionary));

const countWords = (s: string): number =>
  s.split(/\s+/g).filter(w => /[a-z0-9]/.test(w)).length;

var text = await Deno.readTextFile('enable1.txt');
// const count = countWords(text);
// console.log(`I read ${count} words.`);

var list = text.split('\N');
list.map(s => smorse(s, smorseDictionary));

