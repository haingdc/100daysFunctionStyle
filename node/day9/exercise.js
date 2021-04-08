const { List } = require('immutable-ext')

// const foldMap = (t, empty, xs) => xs.map(t).reduce((acc, x) => acc.concat(x), empty)
var sum = xs => List(xs).foldMap(Sum, Sum.empty())

var sum = xs => List(xs).map(Sum).fold(Sum.empty())


QUnit.test("Ex1: sum", assert => {
  assert.equal(String(sum([1,2,3])), "Sum(6)")
})

// Ex2: reimplement lessThanZero using foldMap and the Any Monoid
// =========================

var anyLessThanZero = xs =>
  List(xs).map(x => Any(x < 0)).fold(Any.empty())


QUnit.test("Ex2: anyLessThanZero", assert => {
  assert.equal(String(anyLessThanZero([-2, 0, 4])), "Any(true)")
   assert.equal(String(anyLessThanZero([2, 0, 4])), "Any(false)")
})
