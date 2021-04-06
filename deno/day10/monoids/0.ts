// import immutable from 'https://cdn.skypack.dev/immutable'
// import immutableExt from '../../lib/immutable-ext.js'

const Product = x =>
({
  x,
  concat: other =>
    Product(x * other.x)
})
Product.empty = () => Product(1)

const Sum = x =>
({
  x,
  concat: other => Sum(x + other.x),
})
Sum.empty = () => Sum(0)

const Any = x =>
({
  x,
  concat: other => Any(x || other.x)
})
Any.empty = () => Any(false)

const All = x =>
({
  x,
  concat: other =>
    All(x && other.x)
})

All.empty = () => All(true)

// const res = [false, false, true, true].map(Any).reduce((acc, n) => acc.concat(n), Any.empty())
const res = immutableExt.List([false, false, true, true]).foldMap(All)
console.log( res )
