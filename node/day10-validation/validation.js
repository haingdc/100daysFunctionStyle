const { List } = require('immutable-ext')
const { Either } = require('./types')
const { Right, Left } = Either;

const isPresent = x => !!x

const Success = x =>
({
  isFail: false,
  x,
  fold: (f, g) => g(x),
  concat: other =>
    other.isFail ? other : Success(x)
})

const Fail = x =>
({
  isFail: true,
  fold: (f, g) => f(x),
  x,
  concat: other =>
    other.isFail ? Fail(x.concat(other.x)) : Fail(x)
})

const validate = (spec, obj) =>
  List(Object.keys(spec)).foldMap(key =>
    spec[key]( obj[key] ) ?
                            Success( [obj] )
                          :
                            Fail( [`${key} bad`] )
  , Success( [obj] ))

const validations = { name: isPresent, email: isPresent }
const obj = { name: 'brian', email: 'brain@brian.com' }

const res = validate(validations, obj)
res.fold(console.log, console.log)