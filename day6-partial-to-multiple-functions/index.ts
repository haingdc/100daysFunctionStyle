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