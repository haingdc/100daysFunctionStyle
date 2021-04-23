var { Either, Task, Id } = require('../lib/types')
var { Right, Left } = Either

var Sum = x =>
({
  x,
  concat: other =>
    Sum(x + other.x)
})
Sum.empty = () => Sum(0)


var res = Id.of(  Right(Task.of(Sum(2)))  ) .concat( Id.of(  Right(Task.of(Sum(3)))  ) )
res.extract().fold(console.error, v => v.fork(console.error, console.log))



