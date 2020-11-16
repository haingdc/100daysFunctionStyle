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