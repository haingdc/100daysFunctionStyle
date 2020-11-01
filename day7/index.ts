import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';

var FROM = 'Ha Noi';
// var TO  = 'Dong Hoi';
var TO  = 'Da Lat';

// Hải có đi từ Ha Noi tới những thành phố sau (HCM, Da Lat, Da Nang, Nha Trang, Hue, Hoi An) hay ko?

var places = ['Ha Noi', 'HCM', 'Da Lat', 'Da Nang', 'Nha Trang', 'Hue', 'Hoi An'];

function equals(cityA: string, cityB: string) {
  return cityA == cityB;
}

var [compareFrom, compareTo] = R.map( R.curry( equals ) )( [ FROM, TO ] );

var [start, ...ends] = places;
var comparePlacesTuples = R.zip( [ [start], ends ], [compareFrom, compareTo] );
var [is_FROM_be_start, is_TO_be_one_of_ends] = R.map(function includes([places, comparePlaceMethod]) {
  return R.filter( comparePlaceMethod )(places).length == 1;
})(comparePlacesTuples);

if (is_FROM_be_start && is_TO_be_one_of_ends) {
  console.log('Hải đi từ Ha Noi tới một trong những thành phố đó')
} else {
  console.log('Nope');
}

function imperativeWay() {
  if (FROM == 'Ha Noi' && places.includes(TO)) {
    console.log('Hải đi từ Ha Noi tới một trong những thành phố đó')
  } else {
    console.log('Nope')
  }
}

imperativeWay();

