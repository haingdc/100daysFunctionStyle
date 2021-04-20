const { Either } = require('../day10-validation/types')
const { List } = require('immutable-ext')

const toUpper =x => x.toUpperCase()
const exclaim = x => x.concat('!')
const template = x => {
  return `${x.map(x => x.toString()).join(', ')}-BeerCraft`
}

const Fn = run =>
({
  run,
  chain: f => Fn( x => f( run(x) ).run( x ) ),
  map: f => Fn(x => f( run(x) ) ),
  concat: other =>
    Fn( x => run(x).concat( other.run(x) ) )
})

Fn.of = x => Fn(() => x)


var config = {
  port: 3000,
  toString: function() {
    return `port ${this.port}`
  },
}

// const res = Fn(toUpper).concat( Fn(exclaim) ).map(x => x.slice(1)).run('FP sux')
const res = Fn.of('hello')
            .map(toUpper)
            .map(exclaim)
            .chain( upper => Fn(config => [upper, config]) )
            .map(template)
            .chain( foo => Fn(config => [foo, config]) )
            // .run({ port: 3000})
            .run(config)
console.log(res)
