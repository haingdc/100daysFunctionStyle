function whoisVegan(i: number) {
  let animalFoodTuple = [
    ['rabbit'    , true],
    ['eagle'     , false ],
    ['crocodile' , false ],
    ['dog'       , false ],
  ];
  animalFoodTuple = animalFoodTuple.filter(([animal, isVeterian]) => {
    return isVeterian;
  });
  return animalFoodTuple[i][0];
}

console.log(whoisVegan(0));