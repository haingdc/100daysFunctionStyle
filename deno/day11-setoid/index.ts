interface Setoid<Box, T> {
  equals(a: Box, compareFn: CompareFnType<T>): boolean;
}

interface Ord<Box, T> extends Setoid<Box, T> {
  lte(a: Box, compareFn: CompareFnType<T>): boolean;
  lt (a: Box, compareFn: CompareFnType<T>): boolean;
  gt (a: Box, compareFn: CompareFnType<T>): boolean;
  gte(a: Box, compareFn: CompareFnType<T>): boolean;
}

type CompareFnType<T> = (a: T, b: T) => number;

class Foo implements Ord<Foo, Foo> {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  equals(that: Foo, compareFn: CompareFnType<Foo>) {
    return compareFn(this, that) === 0;
  }

  lte(that: Foo, compareFn: CompareFnType<Foo>) {
    return compareFn(this, that) <= 0;
  }

  gt(that: Foo, compareFn: CompareFnType<Foo>) {
    return compareFn(this, that) > 0;
  }

  gte(that: Foo, compareFn: CompareFnType<Foo>) {
    return compareFn(this, that) >= 0;
  }

  lt(that: Foo, compareFn: CompareFnType<Foo>) {
    return compareFn(this, that) < 0;
  }
}

// var foo = new Foo('abc', 10);
// var bar = new Foo('abc', 15);

// console.log(foo.lte(bar, function compareName(x: Foo, y: Foo) {
//   return x.name.localeCompare(y.name);
// }) );

// console.log(foo.lt(bar, function compareAge(x: Foo, y: Foo) {
//   return x.age - y.age;
// }) );


export class Node<T extends Ord<T, T>> implements Ord<Node<T>, T> {
  data: T;
  parent?: Node<T>;
  left?: Node<T>;
  right?: Node<T>;

  constructor(value: T) {
    this.data = value;
  }

  lte(that: Node<T>, compareFn: CompareFnType<T>): boolean {
    return that.data.lte(this.data, compareFn);
  }
  lt(that: Node<T>, compareFn: CompareFnType<T>): boolean {
    return that.data.lt(this.data, compareFn);
  }
  gt(that: Node<T>, compareFn: CompareFnType<T>): boolean {
    return that.data.gt(this.data, compareFn);
  }
  gte(that: Node<T>, compareFn: CompareFnType<T>): boolean {
    return that.data.gte(this.data, compareFn);
  }
  equals(that: Node<T>, compareFn: CompareFnType<T>): boolean {
    return that.data.equals(this.data, compareFn);
  }
}

export class BinarySearchTree<T extends Ord<T, T>> {
  public root?: Node<T>;
  private compareFn: CompareFnType<T>;

  constructor(compareFn: CompareFnType<T>) {
    this.compareFn = compareFn;
  }

  insert(value: T, root?: Node<T>) {
    if(!root) {
      if(this.root) {
        this.insert(value, this.root);
        return;
      }
      this.root = new Node(value);;
      return;
    }
    if(root.data.gte(value, this.compareFn)) {
      if (!root.left) {
        root.left = new Node(value);
        root.left.parent = root;
        return;
      }
      this.insert(value, root.left);
      return;
    }
    if(root.data.lt(value, this.compareFn)) {
      if(!root.right) {
        root.right = new Node(value);
        root.right.parent = root;
        return;
      }
      this.insert(value, root.right);
    }
  }

  delete(node: Node<T>) {
    if (this.root === node) {
      this.deleteRoot();
      return;
    }
    if (!node.left && !node.right) {
      if (node!.parent!.left === node) {
        delete node!.parent!.left;
      } else {
        delete node!.parent!.right;
      }
      return;
    }
    if (node.left && node.right) {
      node!.parent!.right = node.right;
      node.right.parent = node.parent;
      node.right.left = node.left;
      node.left.parent = node.right;
      delete node.left; delete node.right; delete node.parent;
      return;
    }
    // only child deletion
    if (node!.parent!.left == node) {
      node!.parent!.left = node.left || node.right;
      node!.parent!.left!.parent = node.parent;
    } else {
      node!.parent!.right = node.left || node.right;
      node!.parent!.right!.parent = node.parent;
    }
    delete node.left; delete node.right; delete node.parent;
  }

  deleteRoot() {}
}


var compareAge: CompareFnType<Foo> = (a: Foo, b: Foo) => {
  return a.age - b.age;
};

var compareName: CompareFnType<Foo> = (a: Foo, b: Foo) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
}

var tree = new BinarySearchTree<Foo>(compareAge);
tree.insert(new Foo('Bo', 65));
tree.insert(new Foo('Tan', 31));
tree.insert(new Foo('Phong', 30));
tree.insert(new Foo('Linh', 30));
tree.insert(new Foo('Me', 62));
tree.insert(new Foo('Ong Ngoai', 93));
console.log(tree);
// tree.delete(root);
// console.log(tree);