// Identity monad
var Id = value => ({
  // Functor mapping
  // Preserve the wrapping for .map() by
  // passing the mapped value into the type
  // lift:
  // @ts-ignore
  map: f => Id.of(f(value)),  // Monad chaining
  // Discard one level of wrapping
  // by omitting the .of() type lift:
  chain: f => f(value),  // Just a convenient way to inspect
  // the values:
  toString: () => `Id(${ value })`,
});
// The type lift for this monad is just
// a reference to the factory.
// @ts-ignore
Id.of = Id;


var compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

var trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};

var composeM = method => (...ms) => (
  ms.reduce((f, g) => x => g(x)[method](f))
);

var composeMap = (...ms) => (
  ms.reduce((f, g) => x => g(x).map(f))
);

{
  const label = 'API call composition';  // a => Promise(b)
  const getUserById = id => id === 3 ?
    Promise.resolve({ name: 'Kurt', role: 'Author' }) :
    undefined ;

  // b => Promise(c)
  const hasPermission = ({ role }) => (
    Promise.resolve(role === 'Author')
  );

  // Try to compose them. Warning: this will fail.
  const authUser = compose(hasPermission, getUserById);

  // Oops! Always false!
  authUser(3).then(trace(label));
}


{
  const composePromises = composeM('then');
  const label = 'API call composition';

  // a => Promise(b)
  const getUserById = id => id === 3 ?
    Promise.resolve({ name: 'Kurt', role: 'Author' }) :
    undefined
  ;

  // b => Promise(c)
  const hasPermission = ({ role }) => (
    Promise.resolve(role === 'Author')
  );

  // Compose the functions (this works!)
  const authUser = composePromises(hasPermission, getUserById);
  authUser(3).then(trace(label)); // true
}

{
  var composePromises = (...ms) => (
    ms.reduce((f, g) => x => g(x).then(f))
  );
  const label = 'Promise composition';
  const g = n => Promise.resolve(n + 1);
  const f = n => Promise.resolve(n * 2);
  const h = composePromises(f, g);

  h(20).then(trace(label)); // Promise composition: 42
}

{
  const g = n => Id(n + 1);
  const f = n => Id(n * 2);

  var x = 20;
  // Left identity
  // unit(x).chain(f) ==== f(x)
  trace('Id monad left identity')([
    Id(x).chain(f),
    f(x)
  ]);
  // Id monad left identity: Id(40), Id(40)

  // Right identity
  // m.chain(unit) ==== m
  trace('Id monad right identity')([
    // @ts-ignore
    Id(x).chain(Id.of),
    Id(x)
  ]);
  // Id monad right identity: Id(20), Id(20)  // Associativity

  // Associativity
  // m.chain(f).chain(g) ====
  // m.chain(x => f(x).chain(g)  
  trace('Id monad associativity')([
    Id(x).chain(g).chain(f),
    Id(x).chain(x => g(x).chain(f))
  ]);
  // Id monad associativity: Id(42), Id(42)
}