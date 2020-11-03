var AtoZ = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'.split(' ');
var initialValue = { characters: {} as { [key: string]: string}, number: 97 };
var { characters: smorseDictionary } = AtoZ.reduce(function map({ characters, number }, code) {
  var char = String.fromCharCode(number);
  return {
    characters: { ...characters, [char]: code },
    number: number + 1,
  };
}, initialValue);

function smorse(str: string) {
  var smorseCodes = str.split('').map(function mapCharacterToSmorseCode(c) {
    return smorseDictionary[c];
  });
  return smorseCodes.join('');
}
console.log(smorseDictionary);
console.log(smorse('sos'));