import immutableExt from 'https://cdn.skypack.dev/immutable-ext';

const Sum = x =>
({
  x,
  concat: other => Sum(x + other.x),
})

const res = Sum(3).concat(Sum(5))
console.log( res )