import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';

var Helpers = {
  logDirection(title: string, param: Object) {
    console.log(title, param);
  },
};

logStatus('east', 'great go ahead');
logStatusImperative('east', 'great go ahead');

function logStatus(currentDir, newStatus) {
  const title = 'Where do we go?';

  const statusTuples = [
    ['east' , 'ship' , 'air-plane'],
    ['west'  , 'moto-cycle'  , 'walk' ],
  ];

  function chooseDir(currentDir, [direction, vehicle1, vehicle2]) {
    return currentDir === direction;
  }

  function getParams(vehicle1, vehicle2, answer) {
    const params = { vehicle1, vehicle2, answer };
    return params;
  }

  const logDirection = R.invoker(2, 'logDirection');
  R.pipe(
    R.filter( R.curry( chooseDir )( currentDir ) ),
    R.map( function mapParam([tabName, clientType, campaignName]) {
      return [clientType, campaignName, newStatus];
    }),
    R.forEach(
      R.pipe(
        R.apply( getParams ),
        R.partialRight( logDirection(title), [Helpers])
      )
    )
  )(statusTuples);
}

function logStatusImperative(currentDir, newStatus) {
  const title = 'Where do we go?';
  if (currentDir === 'east') {
    Helpers.logDirection(title, { vehicle1: "ship", vehicle2: "air-plane", answer: newStatus });
  } else if (currentDir === 'west') {
    Helpers.logDirection(title, { vehicle1: "moto-cycle", vehicle2: "walk", answer: newStatus });
  }
}