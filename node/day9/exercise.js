const { List } = require('immutable-ext')

// const foldMap = (t, empty, xs) => xs.map(t).reduce((acc, x) => acc.concat(x), empty)
var sum = xs => List(xs).foldMap(Sum, Sum.empty())

var sum = xs => List(xs).map(Sum).fold(Sum.empty())


QUnit.test("Ex1: sum", assert => {
  assert.equal(String(sum([1,2,3])), "Sum(6)")
})