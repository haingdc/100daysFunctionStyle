type compareFnType<T> = (a: T, b: T) => number;

class Foo {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  equals(that: Foo, compareFn: compareFnType<Foo>) {
    return compareFn(this, that) === 0;
  }

  lte(that: Foo, compareFn: compareFnType<Foo>) {
    return compareFn(this, that) <= 0;
  }

  gt(that: Foo, compareFn: compareFnType<Foo>) {
    return compareFn(this, that) > 0;
  }

  gte(that: Foo, compareFn: compareFnType<Foo>) {
    return compareFn(this, that) >= 0;
  }

  lt(that: Foo, compareFn: compareFnType<Foo>) {
    return compareFn(this, that) < 0;
  }
}

var foo = new Foo('abc', 10);
var bar = new Foo('abc', 15);

console.log(foo.lte(bar, function compareName(x: Foo, y: Foo) {
  return x.name.localeCompare(y.name);
}) );

console.log(foo.lt(bar, function compareAge(x: Foo, y: Foo) {
  return x.age - y.age;
}) );