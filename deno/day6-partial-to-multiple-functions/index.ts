import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';

function dual(a: any, b: any) {
  return [a, b];
}

function trio(a: any, b: any, c: any) {
  return [a,b,c];
}

function quad(a: any, b: any, c: any, d: any) {
  return [a,b,c,d];
}

function penta(a: any, b: any, c: any, d: any, e: any) {
  return [a,b,c,d, e];
}

// prefix first value 'Sean Connery'
var partial007 = R.pipe( R.partialRight, R.unary )( R.partial, [[ 'Sean Connery' ]] );

var [dual007, trio007, quad007] = R.map(partial007)([dual, trio, quad]);

console.log(dual007('_'));
console.log(trio007('_', '_'));
console.log(quad007('_', '_', '_'));


// Second way, urgly?
var [dual007, trio007, quad007] = R.map(function (fn) {
  return R.partial(fn, ['Sean Connery']);
})
( [dual, trio, quad] );

console.log(dual007('_'));
console.log(trio007('_', '_'));
console.log(quad007('_', '_', '_'));


// Partial multi values
var [dualFilms, trioFilms, quadFilms] = R.map(
  R.pipe( R.partialRight, R.unary )( R.partial, [[ 'Dr.No', 'From Russia with Love' ]] )
)
( [ dual, trio, quad ] );

console.log( dualFilms() );
console.log( trioFilms('Goldfinger') );
console.log( quadFilms('Goldfinger', 'Thunderball') );

// Partial right
// order arguments: later1, later2,..., laterN, prefix1, prefix2, undefined, undefined
// here undefined for missing arguments

var partialLast007SeanFilm = R.pipe( R.partialRight, R.unary )( R.partialRight, [['Never Say Never Again']] );

// this case, if no value is passed, it will call prefix value first (edge case)
console.log( partialLast007SeanFilm(dual )(undefined)  );  // => undefined, 'Never Say Never Again'

console.log( partialLast007SeanFilm(trio )('_', '_' )  );  // => '_', '_', 'Never Say Never Again'
console.log( partialLast007SeanFilm(quad )('_', '_' )  );  // => '_', '_', 'Never Say Never Again', undefined
console.log( partialLast007SeanFilm(penta)('_', '_')   );  // => '_', '_', 'Never Say Never Again', undefined, undefined

