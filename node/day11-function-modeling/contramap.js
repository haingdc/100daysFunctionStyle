// (acc, a) -> acc
const Reducer = run =>
({
  run,
  contramap: f =>
    Reducer( (acc, x) => run(accc, f(x)) )
})

Reducer(login.contramap(pay => pay.user))
.concat( Reducer(changePage).contramap(pay => pay.currentPage) )
.run(state, { user: {}, currentPage: {}})