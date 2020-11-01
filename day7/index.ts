import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';

var start = 'Ha Noi';
var end  = 'HCM';

// Hải có đi từ Ha Noi tới những thành phố sau (HCM, Da Lat, Da Nang, Nha Trang, Hue, Hoi An) hay ko?

var cities = ['Ha Noi', 'HCM', 'Da Lat', 'Da Nang', 'Nha Trang', 'Hue', 'Hoi An'];

function equals(cityA: string, cityB: string) {
  return cityA == cityB;
}

var compareEndPointsCityMethods = R.map( R.curry( equals ) )[start, end];


