const { Either } = require('../day10-validation/types')
const { List } = require('immutable-ext')

const toUpper =x => x.toUpperCase()
const exclaim = x => x.concat('!')

const Fn = run =>
({
  run,
  chain: f => Fn( x => f( run(x) ).run( x ) ),
  map: f => Fn(x => f( run(x) ) ),
  concat: other =>
    Fn( x => run(x).concat( other.run(x) ) )
})

const res = Fn(toUpper).concat( Fn(exclaim) ).run('FP sux')
console.log(res)