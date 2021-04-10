const { List } = require('immutable-ext')
const { Either } = require('./types')
const { Right, Left } = Either;

const Validation  = run =>
({
  run,
  concat: other =>
    Validation( (key, x) => run(key, x).concat( other.run(key, x) ) )
})

const isEmail = Validation((key, x) =>
  /@/.test(x)
  ? Success(x)
  : Fail([`${key} must be an email `])
)

const isPresent = Validation((key, x) =>
  !!x
  ? Success(x)
  : Fail([`${key} needs to be present`])
)

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
    spec[key].run(key, obj[key])
  , Success( [obj] ))

const validations = { name: isPresent, email: isPresent.concat(isEmail) }
const obj = { name: '', email: '' }

/* Usage: */
// const res = validate(validations, obj)
// res.fold(console.error, console.log)
module.exports = validate
