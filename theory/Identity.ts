var Identity = value => ({
  map: fn => Identity(fn(value)),
  valueOf: () => value,
  toString: () => `Identity(${value})`,
  [Symbol.iterator]: function* () {
    yield value;
  },
  constructor: Identity,
});

var trace = x => {
  console.log(x);
  return x;
};

var u = Identity(2);

// Identity law
u.map(trace);             // 2
u.map(x => x).map(trace); // 2

var f = n => n + 1;
var g = n => n * 2;


// Composition law
var r1 = u.map(x => f(g(x)));
r1.map(trace); // 5

var r2 = u.map(g).map(f);
r2.map(trace); // 5

console.log(Identity(4).toString());

var arr = [6, 7, ...Identity(8)];
trace(arr); // [6, 7, 8]
console.log('============ READY ==============');

var ints = (Identity(2).valueOf() + Identity(4).valueOf());
trace(ints); // 6

var hi = (Identity('h').valueOf() + Identity('i').valueOf());
trace(hi); // "hi"

var fRange = (start, end) => Array.from(
  { length: end - start + 1 },
  // (x, i) => Identity(i + start)
  (x, i) => start.constructor(i + start)
);
// console.log(...fRange(4, 9));

var range = fRange(Identity(2), 4);
console.log({ range })
range.map(x => x.map(trace)); // 2, 3, 4